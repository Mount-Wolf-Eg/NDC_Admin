<template>
  <div class="settings-page">
    <form action="#" @submit.prevent="handleSetting" style="position: relative">
      <!-- one -->
      <span
        class="row center-row align-items-center p-4 my-5"
        style="
          border: 1px solid var(--col-gray);
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          background-color: var(--col-bg);
        "
      >
        <h2 class="sec-head">Terms and Conditons</h2>

        <span class="col-6">
          <InptField
            v-model="formData.termsAndConditions.aTitleEn"
            :holder="'title'"
            :label="'Terms&Conditions (EN)'"
            :appear="checkErrName(['aTitleEn']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'aTitleEn'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col-6">
          <InptField
            style="direction: rtl !important"
            v-model="formData.termsAndConditions.aTitleAr"
            :label="'الاسم بالعربي'"
            :holder="'الاسم بالعربي'"
            :appear="checkErrName(['aTitleAr']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'aTitleAr'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="col-6">
          <InptField
            v-model="formData.termsAndConditions.acontEn"
            :holder="'content'"
            :label="'Terms&Conditions (En)'"
            :appear="checkErrName(['acontEn']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'acontEn'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col-6">
          <InptField
            style="direction: rtl !important"
            v-model="formData.termsAndConditions.acontAr"
            :label="'المحتوى بالعربي'"
            :holder="'المحتوى بالعربي'"
            :appear="checkErrName(['acontAr']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'acontAr'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="w-50">
          <InptField
            v-model="formData.termsAndConditions.aimgDescen"
            :label="'Description (EN)'"
            :holder="'description en'"
            :appear="checkErrName(['aimgDescen']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'aimgDescen'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="w-50">
          <InptField
            v-model="formData.termsAndConditions.aimgDescar"
            :label="'Description (AR)'"
            :holder="'description ar'"
            :appear="checkErrName(['aimgDescar']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'aimgDescar'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="row w-100">
          <span class="col">
            <UploadeFile
              :for="'aimg'"
              @fileData="formData.termsAndConditions.aimg = $event"
            ></UploadeFile>
            <img
              v-if="formData.termsAndConditions.aimg"
              class="mt-3"
              :src="formData.termsAndConditions.aimg"
              alt=""
              style="max-width: 10rem; border-radius: 7px"
            />
            <span
              class="center-row justify-content-start"
              style="margin-top: -1rem; margin-bottom: 1rem"
              v-for="(err, i) in validationObj.$errors"
              :key="i"
              ><span v-if="err.$property == 'aimg'" class="err-msg">
                {{ err.$message }}
              </span></span
            >
          </span>
        </span>
      </span>

      <div>
        <button v-if="!isLoading" type="submit" class="modal-add-btn mx-auto">
          Save
        </button>
        <button
          v-else
          class="modal-add-btn mt-4"
          type="submit"
          style="font-weight: normal !important"
          disabled
        >
          <div class="spinner-grow me-3" role="status"></div>
          <span> Loading...</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
// Validator
import { onMounted, ref, watch } from "vue";
import InptField from "@/reusables/inputs/InptField.vue";
import UploadeFile from "@/reusables/inputs/UploadeFile.vue";

import { aboutUsStore } from "@/stores/settings/aboutUs";
import { storeToRefs } from "pinia";

import useVuelidator from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  numeric,
  sameAs,
} from "@vuelidate/validators";
required.$message = "Field is required";

const isLoading = ref(false);
const mainL = ref("");
const secondL = ref("");

onMounted(async () => {
  await aboutUsStore().getAllAboutUs();
});

const formData = ref({
  termsAndConditions: {
    aTitleEn: "",
    aTitleAr: "",
    acontEn: "",
    acontAr: "",
    aimgDescar: "",
    aimgDescen: "",
    aimg: "",
  },
});

const validationRules = ref({
  termsAndConditions: {
    aTitleAr: { required, minLength: minLength(3), maxLength: maxLength(500) },
    aTitleEn: { required, minLength: minLength(3), maxLength: maxLength(500) },
    acontAr: { required, minLength: minLength(3), maxLength: maxLength(2000) },
    acontEn: { required, minLength: minLength(3), maxLength: maxLength(2000) },
    aimg: { required },
    aimgDescar: { required },
    aimgDescen: { required },
  },
});

// validation testing
const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};

// // validation testing
const validationObj = useVuelidator(validationRules, formData);

const handleSetting = async () => {
  const result = await validationObj.value.$validate();
  if (result) {
    isLoading.value = true;
    const res = await aboutUsStore().updateAllAbout({
      id: 2,
      "title[ar]": formData.value.termsAndConditions.aTitleAr,
      "title[en]": formData.value.termsAndConditions.aTitleEn,
      "content[ar]": formData.value.termsAndConditions.acontAr,
      "content[en]": formData.value.termsAndConditions.acontEn,
      "description[ar]": formData.value.termsAndConditions.aimgDescar,
      "description[en]": formData.value.termsAndConditions.aimgDescen,
      image: formData.value.termsAndConditions.aimg,
    });

    if (res) {
      formData.value = {
        termsAndConditions: {
          aTitleEn: "",
          aTitleAr: "",
          acontEn: "",
          acontAr: "",
          aimg: "",
          aimgDescar: "",
          aimgDescen: "",
        },
      };
    }
    validationObj.value.$reset();
  }
  isLoading.value = false;
};
</script>

<style lang="scss" scoped>
.sec-head {
  font-weight: bold;
  font-size: 2.2rem;
  color: var(--col-text);
}
</style>
