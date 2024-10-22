<template>
  <form
    @submit.prevent="handleAction()"
    class="modal fade modal-xl"
    id="addPost"
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
                v-model="formData.title.en"
                :holder="'title en'"
                :label="'Post title (EN)'"
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
                v-model="formData.title.ar"
                :label="'Post title (AR)'"
                :holder="'title ar'"
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
                v-model="formData.content.enn"
                :holder="'content en'"
                :label="'Post Content (EN)'"
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
                v-model="formData.content.arr"
                :label="'Post content (AR)'"
                :holder="'Post ar'"
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

          <span class="w-100">
            <MultiSelect
              :select="selectData"
              :appear="checkErrName(['categId']) ? 'err-border' : ''"
            />
            <span
              class="center-row justify-content-start"
              style="margin-top: -1rem; margin-bottom: 1rem"
              v-for="(err, i) in validationObj.$errors"
              :key="i"
              ><span v-if="err.$property == 'categId'" class="err-msg">
                {{ err.$message }}
              </span></span
            >
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
import { usePostStore } from "@/stores/posts/postStore";

import UploadeFile from "@/reusables/inputs/UploadeFile.vue";
import MultiSelect from "@/reusables/inputs/MultiSelect.vue";
// validation
import useVuelidator from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  alphaNum,
} from "@vuelidate/validators";
required.$message = "Field is required";

import { ref, watch, defineProps, onMounted } from "vue";

const emit = defineEmits(["resetPost"]);
const isLoading = ref(false);

const props = defineProps({
  singPost: {
    type: Object,
    required: false,
    default: () => ({}),
  },
  allCateg: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

watch(
  () => props.allCateg,
  (newVal) => {
    selectData.value.options = newVal;
  }
);

const formData = ref({
  title: {
    ar: "",
    en: "",
  },
  content: {
    arr: "",
    enn: "",
  },
  img: "",
  categId: "",
});

watch(
  () => props.singPost,
  () => {
    if (!props.singPost.id) {
      return;
    }
    formData.value.title.ar = props.singPost.title.ar;
    formData.value.title.en = props.singPost.title.en;
    formData.value.content.arr = props.singPost.content.ar;
    formData.value.content.enn = props.singPost.content.en;
    formData.value.categId = props.singPost.category_id;

    selectData.value.value = props.singPost.category_id;
    selectData.value.placeholder = props.singPost.category.name;

    formData.value.img = props.singPost.image;
  }
);

const validationRules = ref({
  title: {
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
  content: {
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
  categId: { required },
  img: { required },
});

const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};

const validationObj = useVuelidator(validationRules, formData);

const closeModal = () => {
  resetFormData();
  emit("resetPost");
  document.querySelector("#close-modal").click();
};

const resetFormData = () => {
  // reset form
  formData.value = {
    title: {
      ar: "",
      en: "",
    },
    content: {
      arr: "",
      enn: "",
    },
    img: "",
    categId: "",
  };
  validationObj.value.$reset();
  document.getElementById("addPost").reset();
};

const addPost = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await usePostStore().addPost({
      "title[ar]": formData.value.title.ar,
      "title[en]": formData.value.title.en,
      "content[ar]": formData.value.content.arr,
      "content[en]": formData.value.content.enn,
      category_id: formData.value.categId,
      image: formData.value.img,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const updatePost = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await usePostStore().updatePost({
      "title[ar]": formData.value.title.ar,
      "title[en]": formData.value.title.en,
      "content[ar]": formData.value.content.arr,
      "content[en]": formData.value.content.enn,
      category_id: formData.value.categId,
      id: props.singPost.id,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const handleAction = () => {
  if (props.singPost.id) {
    updatePost();
  } else {
    addPost();
  }
};

const selectData = ref({
  value: null,
  label: "name",
  placeholder: "Select Category",
  key: "id",
  options: "props.allCateg",
  groups: true,
  options: props.allCateg,
  searchable: true,
  mode: "single",
  valueProp: "id",
  labelProp: "name",
  closeOnSelect: true,
  disabled: false,
  change: (val) => {
    if (val) formData.value.categId = val;
  },
  clear: async () => {
    formData.value.categId = "";
  },
});
</script>

<style lang="scss" scoped></style>
