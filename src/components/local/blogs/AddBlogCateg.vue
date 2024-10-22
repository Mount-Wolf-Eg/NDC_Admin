<template>
  <form
    @submit.prevent="handleAction()"
    class="modal fade modal-xl"
    id="addCateg"
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
          <span class="d-flex gap-4 w-100">
            <span class="col-6">
              <InptField
                v-model="formData.name.en"
                :holder="'Category en'"
                :label="'Category Name (EN)'"
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

            <span class="col-6">
              <InptField
                v-model="formData.name.ar"
                :label="'Category Name (AR)'"
                :holder="'Category ar'"
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
          <span class="row w-100">
            <span class="col">
              <UploadeFile
                :for="'img'"
                @fileData="formData.img = $event"
              ></UploadeFile>
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
import InptField from "@/reusables/inputs/InptField.vue";
import { useBlogStore } from "@/stores/blogs/blogStore";
import UploadeFile from "@/reusables/inputs/UploadeFile.vue";
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

const emit = defineEmits(["resetCategories"]);
const isLoading = ref(false);

const props = defineProps({
  categData: {
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
  img: "",
});

watch(
  () => props.categData,
  () => {
    if (!props.categData.id) {
      return;
    }
    formData.value.name.ar = props.categData.name.ar;
    formData.value.name.en = props.categData.name.en;
    formData.value.img = props.categData.image;
  }
);

const validationRules = ref({
  name: {
    ar: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(200),
    },
    en: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(200),
    },
  },

  img: { required },
});

const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};

const validationObj = useVuelidator(validationRules, formData);

const closeModal = () => {
  resetFormData();
  emit("resetCategories");
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
  };
  validationObj.value.$reset();
  document.getElementById("addCateg").reset();
};

const addCateg = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await useBlogStore().addCategoryPost({
      "name[ar]": formData.value.name.ar,
      "name[en]": formData.value.name.en,
      image: formData.value.img,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const updateCateg = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await useBlogStore().updateCategoryPost({
      "name[ar]": formData.value.name.ar,
      "name[en]": formData.value.name.en,

      id: props.categData.id,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const handleAction = () => {
  if (props.categData.id) {
    updateCateg();
  } else {
    addCateg();
  }
};
</script>

<style lang="scss" scoped></style>
