<template>
  <div class="settings-page">
    <form action="#" @submit.prevent="handleSetting" style="position: relative">
      <span
        class="row d-flex flex-wrap"
        style="
          border: 1px solid var(--col-gray);
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          background-color: var(--col-bg);
        "
      >
        <span class="col-6">
          <InptField
            v-model="formData.firstMobile"
            :holder="'Mobile Number'"
            :label="'Mbile Number'"
            :appear="checkErrName(['firstMobile']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'firstMobile'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="col-6">
          <InptField
            v-model="formData.secondMobile"
            :holder="'Second Number'"
            :label="'Mbile Number'"
            :appear="checkErrName(['secondMobile']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'secondMobile'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="col-6">
          <InptField
            v-model="formData.thirdMobile"
            :holder="'Third Number'"
            :label="'Mbile Number'"
            :appear="checkErrName(['thirdMobile']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'thirdMobile'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="col-6">
          <InptField
            v-model="formData.whatsApp"
            :holder="'whatsApp'"
            :label="'whatsApp Number'"
            :appear="checkErrName(['whatsApp']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'whatsApp'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="col-6">
          <InptField
            v-model="formData.email"
            :holder="'Email'"
            :label="'Email Address'"
            :appear="checkErrName(['email']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'email'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="col-6">
          <InptField
            v-model="formData.address"
            :holder="'Address'"
            :label="'Address'"
            :appear="checkErrName(['address']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'address'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col-6">
          <InptField
            v-model="formData.facebook"
            :holder="'Facebook'"
            :label="'Facebook Link'"
            :appear="checkErrName(['facebook']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'facebook'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col-6">
          <InptField
            v-model="formData.linkedIn"
            :label="'Linked in'"
            :holder="'Linked in Link'"
            :appear="checkErrName(['linkedIn']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'linkedIn'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col-6">
          <InptField
            v-model="formData.instagram"
            :holder="'Instagram'"
            :label="'Instagram Link'"
            :appear="checkErrName(['instagram']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'instagram'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col-6">
          <InptField
            v-model="formData.youtube"
            :label="'Youtube'"
            :holder="'youtube Link'"
            :appear="checkErrName(['youtube']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'youtube'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span class="col-6">
          <InptField
            v-model="formData.tikTok"
            :holder="'Tiktok'"
            :label="'tiktok Link'"
            :appear="checkErrName(['tikTok']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'tikTok'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col-6">
          <InptField
            v-model="formData.Snapchat"
            :label="'Snapchat'"
            :holder="'Snapchat Link'"
            :appear="checkErrName(['Snapchat']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'Snapchat'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span class="col">
          <InptField
            v-model="formData.x"
            :label="'Twitter'"
            :holder="'Twitter Link'"
            :appear="checkErrName(['x']) ? 'err-border' : ''"
          ></InptField>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'x'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
      </span>

      <div class="w-100 mt-5">
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
import { contactSettings } from "@/stores/settings/contactsStore";
import { storeToRefs } from "pinia";
import useVuelidator from "@vuelidate/core";
import {
  required,
  url,
  email,
  minLength,
  maxLength,
  integer,
  numeric,
  sameAs,
} from "@vuelidate/validators";
required.$message = "Field is required";

const { allContacts } = storeToRefs(contactSettings());

const isLoading = ref(false);

const formData = ref({
  firstMobile: "",
  secondMobile: "",
  thirdMobile: "",
  whatsApp: "",
  email: "",
  address: "",
  facebook: "",
  linkedIn: "",
  instagram: "",
  youtube: "",
  tikTok: "",
  Snapchat: "",
  x: "",
});

onMounted(async () => {
  await contactSettings().getAllContacts();
  formData.value.firstMobile = allContacts.value.mainNumber;
  formData.value.secondMobile = allContacts.value.secondNumber;
  formData.value.thirdMobile = allContacts.value.thirdNumber;
  formData.value.whatsApp = allContacts.value.whatsapp;
  formData.value.email = allContacts.value.email;
  formData.value.address = allContacts.value.address;

  formData.value.facebook = allContacts.value.facebook;
  formData.value.linkedIn = allContacts.value.linkedin;
  formData.value.instagram = allContacts.value.instagram;
  formData.value.youtube = allContacts.value.youtube;
  formData.value.tikTok = allContacts.value.tiktok;
  formData.value.Snapchat = allContacts.value.snapchat;
  formData.value.x = allContacts.value.twitter;
});

const validationRules = ref({
  firstMobile: { required, numeric },
  secondMobile: { numeric },
  thirdMobile: { numeric },
  whatsApp: { numeric },
  email: { required, email, maxLength: maxLength(50) },
  address: { required, maxLength: maxLength(500) },
  facebook: { url },
  linkedIn: { url },
  instagram: { url },
  youtube: { url },
  tikTok: { url },
  Snapchat: { url },
  x: { url },
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
    let res = await contactSettings().updateContacts({
      "settings[mainNumber]": formData.value.firstMobile,
      "settings[secondNumber]": formData.value.secondMobile,
      "settings[thirdNumber]": formData.value.thirdMobile,
      "settings[whatsapp]": formData.value.whatsApp,
      "settings[email]": formData.value.email,
      "settings[address]": formData.value.address,
      "settings[facebook]": formData.value.facebook,
      "settings[linkedIn]": formData.value.linkedIn,
      "settings[instagram]": formData.value.instagram,
      "settings[youtube]": formData.value.youtube,
      "settings[tikTok]": formData.value.tikTok,
      "settings[Snapchat]": formData.value.Snapchat,
      "settings[twitter]": formData.value.x,
    });
    if (res) {
      await contactSettings().getAllContacts();
    }
    validationObj.value.$reset();
  }
  isLoading.value = false;
};
</script>

<style lang="scss" scoped></style>
