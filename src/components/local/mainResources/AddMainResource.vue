<template>
  <form
    @submit.prevent="handleAction()"
    class="modal fade modal-xl"
    id="accResource"
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
                :label="'Name (EN)'"
                :holder="'name en'"
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
                :holder="'name ar'"
                :label="'Name (AR)'"
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
                v-model="formData.imgDescription.enn"
                :label="'Description (EN)'"
                :holder="'description en'"
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
                v-model="formData.imgDescription.arr"
                :label="'Description (AR)'"
                :holder="'description ar'"
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
import { sliderStore } from "@/stores/settings/slidersStore";

// validation
import useVuelidator from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
required.$message = "Field is required";

import { ref, watch, defineProps } from "vue";

const emit = defineEmits(["resetMainResource"]);
const isLoading = ref(false);

const props = defineProps({
  partner: {
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
  imgDescription: {
    arr: "",
    enn: "",
  },
  img: "",
});

watch(
  () => props.partner,
  () => {
    if (!props.partner.id) {
      return;
    }
    formData.value.name.ar = props.partner.title.ar;
    formData.value.name.en = props.partner.title.en;

    formData.value.img = props.partner.image;

    formData.value.imgDescription.arr = props.partner.description.ar;
    formData.value.imgDescription.enn = props.partner.description.en;
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
  imgDescription: {
    arr: {
      required,
      maxLength: maxLength(250),
    },
    enn: {
      required,
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
  emit("resetMainResource");
  document.querySelector("#close-modal").click();
};

const resetFormData = () => {
  // reset form
  formData.value = {
    name: {
      ar: "",
      en: "",
    },
    img: "",
    imgDescription: {
      arr: "",
      enn: "",
    },
  };
  validationObj.value.$reset();
  document.getElementById("accResource").reset();
};

const addPartner = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await sliderStore().addslider(
      {
        slider_type: "main_resources",
        "title[ar]": formData.value.name.ar,
        "title[en]": formData.value.name.en,
        image: formData.value.img,
        "description[ar]": formData.value.imgDescription.arr,
        "description[en]": formData.value.imgDescription.enn,
      },
      "main_resources"
    );
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const updatePartner = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await sliderStore().updateSlider(
      {
        slider_type: "main_resources",
        "title[ar]": formData.value.name.ar,
        "title[en]": formData.value.name.en,
        image: formData.value.img,
        "description[ar]": formData.value.imgDescription.arr,
        "description[en]": formData.value.imgDescription.enn,
        id: props.partner.id,
      },
      "main_resources"
    );
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const handleAction = () => {
  if (props.partner.id) {
    updatePartner();
  } else {
    addPartner();
  }
};
</script>

<style lang="scss" scoped></style>
