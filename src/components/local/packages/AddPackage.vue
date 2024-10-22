<template>
  <form
    @submit.prevent="handleAction()"
    class="modal fade modal-xl"
    id="addPack"
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
                :holder="'name en'"
                :label="'Name (EN)'"
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
                v-model="formData.packContent.enn"
                :holder="'description en'"
                :label="'Description (EN)'"
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
                v-model="formData.packContent.arr"
                :holder="'description ar'"
                :label="'Description (AR)'"
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
            <!-- Name -->
            <span class="col">
              <span
                class="d-flex flex-row align-items-end justify-content-center gap-2"
              >
                <InptField
                  style="flex: 1"
                  v-model="target"
                  :holder="'Target Group'"
                  :label="'Target Group (EN)'"
                  :appear="checkErrName(['ten']) ? 'err-border' : ''"
                ></InptField>
                <button
                  class="addBtn"
                  type="button"
                  @click="addItem('targetGroupen')"
                  :disabled="!target"
                >
                  Add
                </button>
              </span>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'ten'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
            <ul
              class="target-list"
              style="color: var(--col-text); list-style: none"
            >
              <li v-for="(ser, j) in formData.targetGroup.ten" :key="j">
                {{ ser }}
                <button type="button" @click="deleteItem(ser, 'targetGroupen')">
                  -
                </button>
              </li>
            </ul>
          </span>

          <span class="row w-50">
            <!-- Name -->
            <span class="col">
              <span
                class="d-flex flex-row align-items-end justify-content-center gap-2"
              >
                <InptField
                  style="flex: 1"
                  v-model="targetar"
                  :holder="'Target Group'"
                  :label="'Target Group (AR)'"
                  :appear="checkErrName(['tar']) ? 'err-border' : ''"
                ></InptField>
                <button
                  class="addBtn"
                  type="button"
                  @click="addItem('targetGroupar')"
                  :disabled="!targetar"
                >
                  Add
                </button>
              </span>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'tar'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
            <ul
              class="target-list"
              style="color: var(--col-text); list-style: none"
            >
              <li v-for="(ser, j) in formData.targetGroup.tar" :key="j">
                {{ ser }}
                <button type="button" @click="deleteItem(ser, 'targetGroupar')">
                  -
                </button>
              </li>
            </ul>
          </span>

          <span class="row w-50">
            <!-- Name -->
            <span class="col">
              <span
                class="d-flex flex-row align-items-end justify-content-center gap-2"
              >
                <InptField
                  style="flex: 1"
                  v-model="included"
                  :holder="'included services'"
                  :label="'Included Services (EN)'"
                  :appear="checkErrName(['ien']) ? 'err-border' : ''"
                ></InptField>
                <button
                  class="addBtn"
                  type="button"
                  :disabled="!included"
                  @click="addItem('includedServicesen')"
                >
                  Add
                </button>
              </span>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'ien'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
            <ul
              class="target-list"
              style="color: var(--col-text); list-style: none"
            >
              <li v-for="(ser, j) in formData.includedServices.ien" :key="j">
                {{ ser }}
                <button
                  type="button"
                  @click="deleteItem(ser, 'includedServicesen')"
                >
                  -
                </button>
              </li>
            </ul>
          </span>
          <span class="row w-50">
            <!-- Name -->
            <span class="col">
              <span
                class="d-flex flex-row align-items-end justify-content-center gap-2"
              >
                <InptField
                  style="flex: 1"
                  v-model="includedar"
                  :holder="'included services'"
                  :label="'Included Services (AR)'"
                  :appear="checkErrName(['iar']) ? 'err-border' : ''"
                ></InptField>
                <button
                  class="addBtn"
                  type="button"
                  :disabled="!includedar"
                  @click="addItem('includedServicesar')"
                >
                  Add
                </button>
              </span>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'iar'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
            <ul
              class="target-list"
              style="color: var(--col-text); list-style: none"
            >
              <li v-for="(ser, j) in formData.includedServices.iar" :key="j">
                {{ ser }}
                <button
                  type="button"
                  @click="deleteItem(ser, 'includedServicesar')"
                >
                  -
                </button>
              </li>
            </ul>
          </span>

          <span class="row w-50">
            <!-- Name -->
            <span class="col">
              <InptField
                v-model="formData.imgDescription.ennn"
                :holder="'description en'"
                :label="'Image Description (EN)'"
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
            <!-- Name -->
            <span class="col">
              <InptField
                v-model="formData.imgDescription.arrr"
                :holder="'description ar'"
                :label="'Image Description (AR)'"
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
          <button
            @click="closeModal()"
            type="button"
            class="ms-auto modal-add-btn"
            data-bs-dismiss="modal"
            aria-label="Close"
            id="close-modal"
          >
            Cancel
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
import { usePackageStore } from "@/stores/settings/packageStore";

// validation
import useVuelidator from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
required.$message = "Field is required";

import { ref, watch, defineProps } from "vue";

const emit = defineEmits(["resetMainService"]);
const isLoading = ref(false);

const props = defineProps({
  package: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});
const target = ref("");
const targetar = ref("");
const included = ref("");
const includedar = ref("");
const formData = ref({
  name: {
    ar: "",
    en: "",
  },
  packContent: {
    arr: "",
    enn: "",
  },
  imgDescription: {
    arrr: "",
    ennn: "",
  },
  img: "",
  targetGroup: {
    tar: [],
    ten: [],
  },
  includedServices: {
    iar: [],
    ien: [],
  },
});

watch(
  () => props.package,
  () => {
    if (!props.package.id) {
      return;
    }
    formData.value.name.ar = props.package.name.ar;
    formData.value.name.en = props.package.name.en;

    formData.value.packContent.arr = props.package.content.ar;
    formData.value.packContent.enn = props.package.content.en;

    formData.value.imgDescription.arrr = props.package.description.ar;
    formData.value.imgDescription.ennn = props.package.description.en;

    formData.value.targetGroup.tar = props.package.target_group.ar;
    formData.value.targetGroup.ten = props.package.target_group.en;

    formData.value.includedServices.iar = props.package.included_services.ar;
    formData.value.includedServices.ien = props.package.included_services.en;

    formData.value.img = props.package.image;
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

  packContent: {
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
  targetGroup: {
    tar: { required },
    ten: { required },
  },
  includedServices: {
    iar: { required },
    ien: { required },
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
    packContent: {
      arr: "",
      enn: "",
    },
    imgDescription: {
      arrr: "",
      ennn: "",
    },
    targetGroup: {
      tar: [],
      ten: [],
    },
    includedServices: {
      iar: [],
      ien: [],
    },
    img: "",
  };
  validationObj.value.$reset();
  document.getElementById("addPack").reset();
};

const addPack = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await usePackageStore().addPackage({
      "name[ar]": formData.value.name.ar,
      "name[en]": formData.value.name.en,
      "content[ar]": formData.value.packContent.arr,
      "content[en]": formData.value.packContent.enn,
      "description[ar]": formData.value.imgDescription.arrr,
      "description[en]": formData.value.imgDescription.ennn,
      "included_services[en]": formData.value.includedServices.ien,
      "included_services[ar]": formData.value.includedServices.iar,
      "target_group[en]": formData.value.targetGroup.ten,
      "target_group[ar]": formData.value.targetGroup.tar,
      image: formData.value.img,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const updatePack = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await usePackageStore().updatePackage({
      "name[ar]": formData.value.name.ar,
      "name[en]": formData.value.name.en,
      "description[ar]": formData.value.imgDescription.arrr,
      "description[en]": formData.value.imgDescription.ennn,
      "content[ar]": formData.value.packContent.arr,
      "content[en]": formData.value.packContent.enn,
      "included_services[en]": formData.value.includedServices.ien,
      "included_services[ar]": formData.value.includedServices.iar,
      "target_group[en]": formData.value.targetGroup.ten,
      "target_group[en]": formData.value.targetGroup.tar,
      image: formData.value.img,
      id: props.package.id,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const handleAction = () => {
  if (props.package.id) {
    updatePack();
  } else {
    addPack();
  }
};

const addItem = (comp) => {
  if (comp == "targetGroupen") {
    formData.value.targetGroup.ten.push(target.value);
    target.value = "";
  } else if (comp == "targetGroupar") {
    formData.value.targetGroup.tar.push(targetar.value);
    targetar.value = "";
  } else if (comp == "includedServicesen") {
    formData.value.includedServices.ien.push(included.value);
    included.value = "";
  } else if (comp == "includedServicesar") {
    formData.value.includedServices.iar.push(includedar.value);
    includedar.value = "";
  }
};

const deleteItem = (ser, comp) => {
  if (comp == "targetGroupen") {
    formData.value.targetGroup.ten = formData.value.targetGroup.ten.filter(
      (e) => e != ser
    );
  } else if (comp == "targetGroupar") {
    formData.value.targetGroup.tar = formData.value.targetGroup.tar.filter(
      (e) => e != ser
    );
  } else if (comp == "includedServicesen") {
    formData.value.includedServices.ien =
      formData.value.includedServices.ien.filter((e) => e != ser);
  } else if (comp == "includedServicesar") {
    formData.value.includedServices.iar =
      formData.value.includedServices.iar.filter((e) => e != ser);
  }
};
</script>

<style lang="scss" scoped></style>
