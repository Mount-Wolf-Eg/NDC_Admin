<template>
  <form
    @submit.prevent="handleAction()"
    class="modal fade modal-xl"
    id="addFaq"
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
                v-model="formData.question.en"
                :holder="'Question en'"
                :label="'Question (EN)'"
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
                v-model="formData.question.ar"
                :label="'Question (AR)'"
                :holder="'question ar'"
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

          <span class="d-flex gap-4 w-100">
            <span class="col-6">
              <InptField
                v-model="formData.answer.enn"
                :holder="'answer ar'"
                :label="'Answer (EN)'"
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

            <span class="col-6">
              <InptField
                v-model="formData.answer.arr"
                :label="'answer ar'"
                :holder="'Answer (AR)'"
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
import { FAQStore } from "@/stores/settings/FAQ";
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

const emit = defineEmits(["resetFaq"]);
const isLoading = ref(false);

const props = defineProps({
  faqData: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

const formData = ref({
  question: {
    ar: "",
    en: "",
  },
  answer: {
    arr: "",
    enn: "",
  },
});

watch(
  () => props.faqData,
  () => {
    if (!props.faqData.id) {
      return;
    }
    formData.value.question.ar = props.faqData.title.ar;
    formData.value.question.en = props.faqData.title.en;
    formData.value.answer.arr = props.faqData.description.ar;
    formData.value.answer.enn = props.faqData.description.en;
  }
);

const validationRules = ref({
  question: {
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

  answer: {
    arr: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(500),
    },
    enn: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(500),
    },
  },
});

const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};

const validationObj = useVuelidator(validationRules, formData);

const closeModal = () => {
  resetFormData();
  emit("resetFaq");
  document.querySelector("#close-modal").click();
};

const resetFormData = () => {
  // reset form
  formData.value = {
    question: {
      ar: "",
      en: "",
    },
    answer: {
      arr: "",
      enn: "",
    },
  };
  validationObj.value.$reset();
  document.getElementById("addFaq").reset();
};

const addFaq = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await FAQStore().addQuestion({
      "title[ar]": formData.value.question.ar,
      "title[en]": formData.value.question.en,
      "description[ar]": formData.value.answer.arr,
      "description[en]": formData.value.answer.enn,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const updateFaq = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await FAQStore().updateQuestion({
      "title[ar]": formData.value.question.ar,
      "title[en]": formData.value.question.en,
      "description[ar]": formData.value.answer.arr,
      "description[en]": formData.value.answer.enn,
      id: props.faqData.id,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const handleAction = () => {
  if (props.faqData.id) {
    updateFaq();
  } else {
    addFaq();
  }
};
</script>

<style lang="scss" scoped></style>
