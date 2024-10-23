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
        <h2 class="sec-head">About Us</h2>

        <span class="col-6">
          <InptField
            v-model="formData.aboutUs.aTitleEn"
            :holder="'title'"
            :label="'About us Title (EN)'"
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
            v-model="formData.aboutUs.aTitleAr"
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
            v-model="formData.aboutUs.acontEn"
            :holder="'content'"
            :label="'About us Content (EN)'"
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
            v-model="formData.aboutUs.acontAr"
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
        <span class="row w-100">
          <span class="col">
            <UploadeFile
              :for="'aimg'"
              @fileData="formData.aboutUs.aimg = $event"
            ></UploadeFile>
            <img
              v-if="formData.aboutUs.aimg"
              class="mt-3"
              :src="formData.aboutUs.aimg"
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

        <span class="w-50">
          <InptField
            v-model="formData.aboutUs.aimgDescen"
            :label="'Description (EN)'"
            :holder="'description'"
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
            v-model="formData.aboutUs.aimgDescar"
            :label="'Description (AR)'"
            :holder="'description'"
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
      </span>
      <!-- two -->
      <span
        class="row center-row align-items-center p-4 my-5"
        style="
          border: 1px solid var(--col-gray);
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          background-color: var(--col-bg);
        "
      >
        <h2 class="sec-head">Vission</h2>

        <span class="col-6">
          <InptField
            v-model="formData.ourVission.vTitleEn"
            :holder="'title'"
            :label="'Our Vission Title (EN)'"
            :appear="checkErrName(['vTitleEn']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'vTitleEn'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col-6">
          <InptField
            style="direction: rtl !important"
            v-model="formData.ourVission.vTitleAr"
            :label="'الاسم بالعربي'"
            :holder="'الاسم بالعربي'"
            :appear="checkErrName(['vTitleAr']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'vTitleAr'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="col-6">
          <InptField
            v-model="formData.ourVission.vcontEn"
            :holder="'content'"
            :label="'Our Vission Content (EN)'"
            :appear="checkErrName(['vcontEn']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'vcontEn'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col-6">
          <InptField
            style="direction: rtl !important"
            v-model="formData.ourVission.vcontAr"
            :label="'المحتوى بالعربي'"
            :holder="'المحتوى بالعربي'"
            :appear="checkErrName(['vcontAr']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'vcontAr'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="w-50">
          <InptField
            v-model="formData.ourVission.vimgDescen"
            :label="'Description (EN)'"
            :holder="'description'"
            :appear="checkErrName(['vimgDescen']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'vimgDescen'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="w-50">
          <InptField
            v-model="formData.ourVission.vimgDescar"
            :label="'Description (AR)'"
            :holder="'description'"
            :appear="checkErrName(['vimgDescar']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'vimgDescar'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="row w-100">
          <span class="col">
            <UploadeFile
              :for="'vimg'"
              @fileData="formData.ourVission.vimg = $event"
            ></UploadeFile>
            <img
              v-if="formData.ourVission.vimg"
              class="mt-3"
              :src="formData.ourVission.vimg"
              alt=""
              style="max-width: 10rem; border-radius: 7px"
            />
            <span
              class="center-row justify-content-start"
              style="margin-top: -1rem; margin-bottom: 1rem"
              v-for="(err, i) in validationObj.$errors"
              :key="i"
              ><span v-if="err.$property == 'vimg'" class="err-msg">
                {{ err.$message }}
              </span></span
            >
          </span>
        </span>
      </span>
      <!-- three -->
      <span
        class="row center-row align-items-center p-4 my-5"
        style="
          border: 1px solid var(--col-gray);
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          background-color: var(--col-bg);
        "
      >
        <h2 class="sec-head">Mission</h2>

        <span class="col-6">
          <InptField
            v-model="formData.ourMission.mTitleEn"
            :holder="'title'"
            :label="'Our Mission Title (EN)'"
            :appear="checkErrName(['mTitleEn']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'mTitleEn'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col-6">
          <InptField
            style="direction: rtl !important"
            v-model="formData.ourMission.mTitleAr"
            :label="'الاسم بالعربي'"
            :holder="'الاسم بالعربي'"
            :appear="checkErrName(['mTitleAr']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'mTitleAr'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="col-6">
          <InptField
            v-model="formData.ourMission.mcontEn"
            :holder="'content'"
            :label="'Our Mission Content (EN)'"
            :appear="checkErrName(['mcontEn']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'mcontEn'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col-6">
          <InptField
            style="direction: rtl !important"
            v-model="formData.ourMission.mcontAr"
            :label="'المحتوى بالعربي'"
            :holder="'المحتوى بالعربي'"
            :appear="checkErrName(['mcontAr']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'mcontAr'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="w-50">
          <InptField
            v-model="formData.ourMission.mimgDescen"
            :label="'Description (EN)'"
            :holder="'description'"
            :appear="checkErrName(['mimgDescen']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'mimgDescen'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="w-50">
          <InptField
            v-model="formData.ourMission.mimgDescar"
            :label="'Description (AR)'"
            :holder="'description'"
            :appear="checkErrName(['mimgDescar']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'mimgDescar'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="row w-100">
          <span class="col">
            <UploadeFile
              :for="'mimg'"
              @fileData="formData.ourMission.mimg = $event"
            ></UploadeFile>
            <img
              v-if="formData.ourMission.mimg"
              class="mt-3"
              :src="formData.ourMission.mimg"
              alt=""
              style="max-width: 10rem; border-radius: 7px"
            />
            <span
              class="center-row justify-content-start"
              style="margin-top: -1rem; margin-bottom: 1rem"
              v-for="(err, i) in validationObj.$errors"
              :key="i"
              ><span v-if="err.$property == 'mimg'" class="err-msg">
                {{ err.$message }}
              </span></span
            >
          </span>
        </span>
      </span>
      <!-- four -->
      <span
        class="row center-row align-items-center p-4 my-5"
        style="
          border: 1px solid var(--col-gray);
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          background-color: var(--col-bg);
        "
      >
        <h2 class="sec-head">Goals</h2>

        <span class="col-6">
          <InptField
            v-model="formData.ourGoals.gTitleEn"
            :holder="'title'"
            :label="'Our Goals Title (EN)'"
            :appear="checkErrName(['gTitleEn']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'gTitleEn'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col-6">
          <InptField
            style="direction: rtl !important"
            v-model="formData.ourGoals.gTitleAr"
            :label="'الاسم بالعربي'"
            :holder="'الاسم بالعربي'"
            :appear="checkErrName(['gTitleAr']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'gTitleAr'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="col-6">
          <InptField
            v-model="formData.ourGoals.gcontEn"
            :holder="'content'"
            :label="'Our Goals Content (EN)'"
            :appear="checkErrName(['gcontEn']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'gcontEn'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col-6">
          <InptField
            style="direction: rtl !important"
            v-model="formData.ourGoals.gcontAr"
            :label="'المحتوى بالعربي'"
            :holder="'المحتوى بالعربي'"
            :appear="checkErrName(['gcontAr']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'gcontAr'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="w-50">
          <InptField
            v-model="formData.ourGoals.gimgDescen"
            :label="'Description (EN)'"
            :holder="'description'"
            :appear="checkErrName(['gimgDescen']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'gimgDescen'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="w-50">
          <InptField
            v-model="formData.ourGoals.gimgDescar"
            :label="'Description (AR)'"
            :holder="'description'"
            :appear="checkErrName(['gimgDescar']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'gimgDescar'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="row w-100">
          <span class="col">
            <UploadeFile
              :for="'gimg'"
              @fileData="formData.ourGoals.gimg = $event"
            ></UploadeFile>
            <img
              v-if="formData.ourGoals.gimg"
              class="mt-3"
              :src="formData.ourGoals.gimg"
              alt=""
              style="max-width: 10rem; border-radius: 7px"
            />
            <span
              class="center-row justify-content-start"
              style="margin-top: -1rem; margin-bottom: 1rem"
              v-for="(err, i) in validationObj.$errors"
              :key="i"
              ><span v-if="err.$property == 'gimg'" class="err-msg">
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
  aboutUs: {
    aTitleEn: "",
    aTitleAr: "",
    acontEn: "",
    acontAr: "",
    aimg: "",
    aimgDescar: "",
    aimgDescen: "",
  },
  ourVission: {
    vTitleEn: "",
    vTitleAr: "",
    vcontAr: "",
    vcontEn: "",
    vimg: "",
    vimgDescar: "",
    vimgDescen: "",
  },
  ourMission: {
    mTitleEn: "",
    mTitleAr: "",
    mcontAr: "",
    mcontEn: "",
    mimg: "",
    mimgDescar: "",
    mimgDescen: "",
  },
  ourGoals: {
    gTitleEn: "",
    gTitleAr: "",
    gcontAr: "",
    gcontEn: "",
    gimg: "",
    gimgDescar: "",
    gimgDescen: "",
  },
});

const validationRules = ref({
  aboutUs: {
    aTitleAr: { required, minLength: minLength(3), maxLength: maxLength(500) },
    aTitleEn: { required, minLength: minLength(3), maxLength: maxLength(500) },
    acontAr: { required, minLength: minLength(3), maxLength: maxLength(2000) },
    acontEn: { required, minLength: minLength(3), maxLength: maxLength(2000) },
    aimg: { required },
    aimgDescar: { required },
    aimgDescen: { required },
  },
  ourVission: {
    vTitleAr: { required, minLength: minLength(3), maxLength: maxLength(500) },
    vTitleEn: { required, minLength: minLength(3), maxLength: maxLength(500) },
    vcontAr: { required, minLength: minLength(3), maxLength: maxLength(2000) },
    vcontEn: { required, minLength: minLength(3), maxLength: maxLength(2000) },
    vimg: { required },
    vimgDescar: { required },
    vimgDescen: { required },
  },
  ourMission: {
    mTitleAr: { required, minLength: minLength(3), maxLength: maxLength(500) },
    mTitleEn: { required, minLength: minLength(3), maxLength: maxLength(500) },
    mcontAr: { required, minLength: minLength(3), maxLength: maxLength(2000) },
    mcontEn: { required, minLength: minLength(3), maxLength: maxLength(2000) },
    mimg: { required },
    mimgDescar: { required },
    mimgDescen: { required },
  },
  ourGoals: {
    gTitleAr: { required, minLength: minLength(3), maxLength: maxLength(500) },
    gTitleEn: { required, minLength: minLength(3), maxLength: maxLength(500) },
    gcontAr: { required, minLength: minLength(3), maxLength: maxLength(2000) },
    gcontEn: { required, minLength: minLength(3), maxLength: maxLength(2000) },
    gimg: { required },
    gimgDescar: { required },
    gimgDescen: { required },
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
    const res = Promise.all([
      await aboutUsStore().updateAllAbout({
        id: 1,
        "title[ar]": formData.value.aboutUs.aTitleAr,
        "title[en]": formData.value.aboutUs.aTitleEn,
        "content[ar]": formData.value.aboutUs.acontAr,
        "content[en]": formData.value.aboutUs.acontEn,
        "description[ar]": formData.value.aboutUs.aimgDescar,
        "description[en]": formData.value.aboutUs.aimgDescen,
        image: formData.value.aboutUs.aimg,
      }),
      await aboutUsStore().updateAllAbout({
        id: 4,
        "title[ar]": formData.value.ourVission.vTitleAr,
        "title[en]": formData.value.ourVission.vTitleEn,
        "content[ar]": formData.value.ourVission.vcontAr,
        "content[en]": formData.value.ourVission.vcontEn,
        "description[ar]": formData.value.ourVission.vimgDescar,
        "description[en]": formData.value.ourVission.vimgDescen,
        image: formData.value.ourVission.vimg,
      }),
      await aboutUsStore().updateAllAbout({
        id: 5,
        "title[ar]": formData.value.ourMission.mTitleAr,
        "title[en]": formData.value.ourMission.mTitleEn,
        "content[ar]": formData.value.ourMission.mcontAr,
        "content[en]": formData.value.ourMission.mcontEn,
        "description[ar]": formData.value.ourMission.mimgDescar,
        "description[en]": formData.value.ourMission.mimgDescen,
        image: formData.value.ourMission.mimg,
      }),
      await aboutUsStore().updateAllAbout({
        id: 6,
        "title[ar]": formData.value.ourGoals.gTitleAr,
        "title[en]": formData.value.ourGoals.gTitleEn,
        "content[ar]": formData.value.ourGoals.gcontAr,
        "content[en]": formData.value.ourGoals.gcontEn,
        "description[ar]": formData.value.ourGoals.gimgDescar,
        "description[en]": formData.value.ourGoals.gimgDescen,
        image: formData.value.ourGoals.gimg,
      }),
    ]);

    if (res) {
      formData.value = {
        aboutUs: {
          aTitleEn: "",
          aTitleAr: "",
          acontEn: "",
          acontAr: "",
          aimg: "",
          aimgDescar: "",
          aimgDescen: "",
        },
        ourVission: {
          vTitleEn: "",
          vTitleAr: "",
          vcontAr: "",
          vcontEn: "",
          vimg: "",
          vimgDescar: "",
          vimgDescen: "",
        },
        ourMission: {
          mTitleEn: "",
          mTitleAr: "",
          mcontAr: "",
          mcontEn: "",
          mimg: "",
          mimgDescar: "",
          mimgDescen: "",
        },
        ourGoals: {
          gTitleEn: "",
          gTitleAr: "",
          gcontAr: "",
          gcontEn: "",
          gimg: "",
          gimgDescar: "",
          gimgDescen: "",
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
