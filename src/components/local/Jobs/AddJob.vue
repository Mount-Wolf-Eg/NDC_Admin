<template>
  <form
    @submit.prevent="handleAction()"
    class="modal fade modal-xl"
    id="add-Job"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div
      class="modal-dialog"
      style="margin-top: calc(100vh / 2); transform: translateY(-50%)"
    >
      <div class="modal-content add-admin-modal">
        <div class="modal-header pt-0" style="border: none !important">
          <button
            @click="closeModal()"
            type="button"
            class="btn-close fs-3 m-3 mt-0 ms-auto"
            data-bs-dismiss="modal"
            aria-label="Close"
            id="close-modal"
          ></button>
        </div>
        <div class="modal-body d-flex flex-wrap justify-content-between">
          <span class="row w-50">
            <!-- name -->
            <span class="col">
              <InptField
                v-model="formData.name.en"
                :holder="'Job Name '"
                :label="'Job Name (EN)'"
                :appear="checkErrName(['en']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'en'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>
          <span class="row w-50">
            <!-- email -->
            <span class="col">
              <InptField
                v-model="formData.name.ar"
                :holder="'Job Name'"
                :label="'Job Name (AR)'"
                :appear="checkErrName(['ar']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'ar'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>

          <span class="row w-50">
            <!-- name -->
            <span class="col">
              <InptField
                v-model="formData.description.enn"
                :holder="'Job Description '"
                :label="'Job Description (EN)'"
                :appear="checkErrName(['enn']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'enn'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>
          <span class="row w-50">
            <!-- email -->
            <span class="col">
              <InptField
                v-model="formData.description.arr"
                :holder="'Job Description'"
                :label="'Job Description (AR)'"
                :appear="checkErrName(['arr']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'arr'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>

          <span class="row w-50">
            <!-- name -->
            <span class="col">
              <InptField
                v-model="formData.jobContent.ennn"
                :holder="'Job Content '"
                :label="'Job Content (EN)'"
                :appear="checkErrName(['ennn']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'ennn'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>
          <span class="row w-50">
            <!-- email -->
            <span class="col">
              <InptField
                v-model="formData.jobContent.arrr"
                :holder="'Job Content'"
                :label="'Job Content (AR)'"
                :appear="checkErrName(['arrr']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'arrr'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>
          <span class="row w-100">
            <!-- role -->
            <span class="col">
              <UploadeFile @fileData="formData.img = $event"></UploadeFile>
              <img
                v-if="formData.img"
                class="mt-3"
                :src="formData.img"
                alt=""
                style="max-width: 10rem; border-radius: 7px"
              />
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'img'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>
        </div>

        <div class="modal-footer mx-auto gap-4" style="border: none">
          <button v-if="!isLoading" type="submit" class="modal-add-btn mx-auto">
            Add
          </button>
          <button v-else class="modal-add-btn mx-auto">
            <div class="spinner-grow me-3" role="status"></div>
            <span> Loading...</span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { onMounted, computed } from "vue";
import InptField from "@/reusables/inputs/InptField.vue";
import MultiSelect from "@/reusables/inputs/MultiSelect.vue";
import UploadeFile from "@/reusables/inputs/UploadeFile.vue";
import { useJobsStore } from "@/stores/jobs/jobsStore";

// validation
import useVuelidator from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  alphaNum,
} from "@vuelidate/validators";
required.$message = "Field is required";

import { ref, watch, defineProps } from "vue";

const emit = defineEmits(["resetJobs"]);
const isLoading = ref(false);

const props = defineProps({
  jobCard: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

const formData = ref({
  name: {
    ar: "",
    en: "",
  },
  description: {
    arr: "",
    enn: "",
  },
  jobContent: {
    arrr: "",
    ennn: "",
  },
  img: "",
});

watch(
  () => props.jobCard,
  () => {
    if (!props.jobCard.id) {
      return;
    }
    formData.value.name.ar = props.jobCard.title.ar;
    formData.value.name.en = props.jobCard.title.en;

    formData.value.description.arr = props.jobCard.description.ar;
    formData.value.description.enn = props.jobCard.description.en;

    formData.value.jobContent.arrr = props.jobCard.content.ar;
    formData.value.jobContent.ennn = props.jobCard.content.en;

    formData.value.img = props.jobCard.image;
  }
);

const validationRules = ref({
  name: {
    ar: { required, minLength: minLength(3), maxLength: maxLength(100) },
    en: { required, minLength: minLength(3), maxLength: maxLength(100) },
  },

  description: {
    arr: { required, minLength: minLength(3), maxLength: maxLength(500) },
    enn: { required, minLength: minLength(3), maxLength: maxLength(500) },
  },
  jobContent: {
    arrr: { required, minLength: minLength(3), maxLength: maxLength(2000) },
    ennn: { required, minLength: minLength(3), maxLength: maxLength(2000) },
  },
  img: "",
});

const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};

const validationObj = useVuelidator(validationRules, formData);

const closeModal = () => {
  resetFormData();
  emit("resetJobs");
  document.querySelector("#close-modal").click();
};

const resetFormData = () => {
  formData.value = {
    name: {
      ar: "",
      en: "",
    },
    description: {
      arr: "",
      enn: "",
    },
    jobContent: {
      arrr: "",
      ennn: "",
    },
    img: "",
  };
  validationObj.value.$reset();
  document.getElementById("add-Job").reset();
};

const addJob = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await useJobsStore().addJob({
      "title[ar]": formData.value.name.ar,
      "title[en]": formData.value.name.en,
      "description[ar]": formData.value.description.ar,
      "description[en]": formData.value.description.en,
      "content[ar]": formData.value.jobContent.arrr,
      "content[en]": formData.value.jobContent.ennn,
      image: formData.value.img,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const updateJob = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await useJobsStore().updateJob({
      "title[ar]": formData.value.name.ar,
      "title[en]": formData.value.name.en,
      "description[ar]": formData.value.description.ar,
      "description[en]": formData.value.description.en,
      "content[ar]": formData.value.jobContent.arrr,
      "content[en]": formData.value.jobContent.ennn,
      image: formData.value.img,
      id: props.jobCard.id,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const handleAction = () => {
  if (props.jobCard.id) {
    updateJob();
  } else {
    addJob();
  }
};
</script>

<style lang="scss" scoped></style>
