<template>
  <form
    @submit.prevent="handleAction()"
    class="modal fade modal-xl"
    id="addSer"
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
                :holder="'Main Resource name '"
                :label="'Main Resource name'"
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
                :holder="'Main Resource  name'"
                :label="'Main Resource  name'"
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
            <!-- Name -->
            <span class="col">
              <InptField
                v-model="formData.serviceContent.enn"
                :holder="'Main Resource en'"
                :label="'Main Resource description'"
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
            <!-- Name -->
            <span class="col">
              <InptField
                v-model="formData.serviceContent.arr"
                :holder="'Main Resource ar'"
                :label="'Main Resource description'"
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
          <span class="row w-100">
            <!-- Name -->
            <span class="col">
              <InptField
                v-model="formData.imgDescription.arrr"
                :holder="'Main Resource ar'"
                :label="'Main Resource description'"
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
            <span class="col">
              <InptField
                v-model="formData.imgDescription.ennn"
                :holder="'Main Resource ar'"
                :label="'Main Resource description'"
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
import UploadeFile from "@/reusables/inputs/UploadeFile.vue";
import { useServiceStore } from "@/stores/settings/serviceStore";

// validation
import useVuelidator from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
required.$message = "Field is required";

import { ref, watch, defineProps } from "vue";

const emit = defineEmits(["resetMainService"]);
const isLoading = ref(false);

const props = defineProps({
  service: {
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
  serviceContent: {
    arr: "",
    enn: "",
  },
  imgDescription: {
    arrr: "",
    ennn: "",
  },
  img: "",
});

watch(
  () => props.service,
  () => {
    if (!props.service.id) {
      return;
    }
    formData.value.name.ar = props.service.name.ar;
    formData.value.name.en = props.service.name.en;

    formData.value.serviceContent.arr = props.service.content.ar;
    formData.value.serviceContent.enn = props.service.content.en;

    formData.value.imgDescription.arrr = props.service.description.ar;
    formData.value.imgDescription.ennn = props.service.description.en;

    formData.value.img = props.service.image;
  }
);

const validationRules = ref({
  name: {
    ar: { required, minLength: minLength(3), maxLength: maxLength(100) },
    en: { required, minLength: minLength(3), maxLength: maxLength(100) },
  },

  img: {
    required,
  },

  serviceContent: {
    arr: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(100),
    },
    enn: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(100),
    },
  },

  imgDescription: {
    arrr: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(250),
    },
    ennn: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(250),
    },
  },
});

const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};

const validationObj = useVuelidator(validationRules, formData);

const closeModal = () => {
  resetFormData();
  emit("resetMainService");
  document.querySelector("#close-modal").click();
};

const resetFormData = () => {
  // reset form
  formData.value = {
    name: {
      ar: "",
      en: "",
    },
    serviceContent: {
      arr: "",
      enn: "",
    },
    imgDescription: {
      arrr: "",
      ennn: "",
    },
    img: "",
  };
  validationObj.value.$reset();
  document.getElementById("addSer").reset();
};

const addService = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await useServiceStore().addService({
      "name[ar]": formData.value.name.ar,
      "name[en]": formData.value.name.en,
      "description[ar]": formData.value.imgDescription.arrr,
      "description[en]": formData.value.imgDescription.ennn,
      "content[ar]": formData.value.serviceContent.arr,
      "content[en]": formData.value.serviceContent.enn,
      image: formData.value.img,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const updateService = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await useServiceStore().updateService({
      "name[ar]": formData.value.name.ar,
      "name[en]": formData.value.name.en,
      "description[ar]": formData.value.imgDescription.arrr,
      "description[en]": formData.value.imgDescription.ennn,
      "content[ar]": formData.value.serviceContent.arr,
      "content[en]": formData.value.serviceContent.enn,
      image: formData.value.img,
      id: props.service.id,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const handleAction = () => {
  if (props.service.id) {
    updateService();
  } else {
    addService();
  }
};
</script>

<style lang="scss" scoped></style>
