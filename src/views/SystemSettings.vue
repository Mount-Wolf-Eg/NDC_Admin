<template>
  <div class="settings-page">
    <form action="#" @submit.prevent="handleSetting" style="position: relative">
      <span
        class="row center-row align-items-center p-4 my-5"
        style="
          border: 1px solid var(--col-gray);
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          background-color: var(--col-bg);
        "
      >
        <span class="col-6">
          <InptField
            v-model="formData.name.en"
            :holder="'Name English'"
            :label="'Name English'"
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
            style="direction: rtl !important"
            v-model="formData.name.ar"
            :label="'الاسم بالعربي'"
            :holder="'الاسم بالعربي'"
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

      <span
        class="row center-row align-items-center p-4 my-5"
        style="
          border: 1px solid var(--col-gray);
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          background-color: var(--col-bg);
        "
      >
        <span>
          <label
            for="inpt-field"
            style="
              background-color: transparent !important;
              color: var(--col-text) !important;
              font-size: var(--fs-16) !important;
              font-weight: var(--fw-bold) !important;
              line-height: var(--line-h-20) !important;
            "
            class="inpt-label w-100"
            >Main Logo</label
          >
          <UploadeFile
            :for="'main -logo'"
            @fileData="formData.mainLogo.sourceM = $event"
          ></UploadeFile>

          <span
            class="center-row justify-content-start"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'sourceM'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span>
          <InptField
            v-model="formData.mainLogo.descM"
            :label="'Main Logo Description'"
            :holder="'Main Logo'"
            :appear="checkErrName(['descM']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'descM'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
      </span>
      <span
        class="row center-row align-items-center p-4 my-5"
        style="
          border: 1px solid var(--col-gray);
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          background-color: var(--col-bg);
        "
      >
        <span>
          <label
            for="inpt-field"
            style="
              background-color: transparent !important;
              color: var(--col-text) !important;
              font-size: var(--fs-16) !important;
              font-weight: var(--fw-bold) !important;
              line-height: var(--line-h-20) !important;
            "
            class="inpt-label w-100"
            >Second Logo</label
          >
          <UploadeFile
            :for="'second-logo'"
            @fileData="formData.secondLogo.sourceS = $event"
          ></UploadeFile>
          <!-- i frame -->
          <div class="show_attachments mt-3">
            <div class="row">
              <div class="col col-3">
                <div class="position-relative w-100">
                  <img
                    :src="formData.secondLogo.sourceS"
                    style="
                      border-radius: 10px;
                      max-width: 100px !important;
                      max-height: 100px !important;
                    "
                    alt=""
                    class="mb-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <span
            class="center-row justify-content-start"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'sourceS'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span>
          <InptField
            v-model="formData.secondLogo.descS"
            :label="'Second Logo Description'"
            :holder="'Second Logo'"
            :appear="checkErrName(['descS']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'descS'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
      </span>

      <div>
        <button v-if="!isLoading" type="submit" class="modal-add-btn mx-auto">
          Save
        </button>
        <button
          v-else
          class="save-popup-btn mt-4"
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
import { settingStore } from "@/stores/settings/settingStore";
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

const { allSettings, activeSettings, suspendedSettings, setting } = storeToRefs(
  settingStore()
);

const isLoading = ref(false);
const mainL = ref("");
const secondL = ref("");

onMounted(async () => {
  await settingStore().getAllSettings();

  formData.value.name.ar = allSettings.value.settings?.name_ar;
  formData.value.name.en = allSettings.value.settings?.name_en;
  formData.value.mainLogo.sourceM = allSettings.value.settings?.main_logo_src;
  formData.value.mainLogo.descM = allSettings.value.settings?.second_logo_desc;
  formData.value.secondLogo.sourceS =
    allSettings.value.setting?.second_logo_src;
  formData.value.secondLogo.descS =
    allSettings.value.settings?.second_logo_desc;
  mainL.value = allSettings.value.settings?.main_logo_src;
  secondL.value = allSettings.value.settings?.second_logo_src;
});

const formData = ref({
  name: {
    ar: "",
    en: "",
  },
  mainLogo: {
    sourceM: "",
    descM: "",
  },
  secondLogo: {
    sourceS: "",
    descS: "",
  },
});

const validationRules = ref({
  name: {
    en: { required },
    ar: { required },
  },

  mainLogo: {
    sourceM: { required },
    descM: { required },
  },
  secondLogo: {
    sourceS: { required },
    descS: { required },
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
    let res = await settingStore().updateSetting({
      "settings[name_ar]": formData.value.name.ar,
      "settings[name_en]": formData.value.name.en,
      "settings[main_logo_src]": formData.value.mainLogo.sourceM,
      "settings[second_logo_desc]": formData.value.mainLogo.descM,
      "settings[second_logo_src]": formData.value.secondLogo.sourceS,
      "settings[second_logo_desc]": formData.value.secondLogo.descS,
    });
    if (res) {
      formData.value = {
        name: {
          ar: "",
          en: "",
        },
        mainLogo: {
          sourceM: "",
          descM: "",
        },
        secondLogo: {
          sourceS: "",
          descS: "",
        },
      };
    }
    validationObj.value.$reset();
  }
  isLoading.value = false;
};
</script>

<style lang="scss" scoped></style>

<!-- <button
  v-else
  class="started-btn"
  style="align-self: flex-start; width: 25rem"
  disabled
>
  <div class="spinner-grow me-3" role="status"></div>
  <span> Loading...</span>
</button> -->
