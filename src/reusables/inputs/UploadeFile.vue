<template>
  <div class="upload-field center-row justify-content-between">
    <label :for="`img-field-${props.for}`">
      <div class="center-row justify-content-between px-5 style-17">
        <span>Add photo</span><span>Drop here</span>
      </div></label
    >
    <input
      class="style-17 img-field-st"
      type="file"
      name="upload file"
      :id="`img-field-${props.for}`"
      accept=".png, .jpeg, .jpg, .pdf"
      @change="uploadFile"
      :disabled="disable"
    />
    <span
      ><svg
        style="width: 3rem; height: 3rem; margin-inline-end: 3rem"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.75 19.25V24.9167C27.75 25.6681 27.4515 26.3888 26.9201 26.9201C26.3888 27.4515 25.6681 27.75 24.9167 27.75H5.08333C4.33189 27.75 3.61122 27.4515 3.07986 26.9201C2.54851 26.3888 2.25 25.6681 2.25 24.9167V19.25M22.0833 9.33333L15 2.25M15 2.25L7.91667 9.33333M15 2.25V19.25"
          stroke="#464A61"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </div>
</template>

<script setup>
import { mainStore } from "@/stores/mainStore";
import { ref, watch } from "vue";

const file = ref(null);
const emits = defineEmits(["fileData"]);
const props = defineProps({
  disable: {
    type: Boolean,
    default: false,
    required: false,
  },

  for: {
    type: String,
    default: "",
    required: false,
  },
});

const uploadFile = (e) => {
  const uploadedFile = e.target.files[0];
  if (!uploadedFile) {
    file.value = null;
    emits("fileData", file.value);
    return;
  }

  if (uploadedFile.size <= 5 * 1024 * 1024) {
    file.value = uploadedFile;
    emits("fileData", file.value);
    file.value = null;
  } else {
    file.value = null;
    mainStore().showAlert("File size cannot be more than 5 MB", 2);
    emits("fileData", file.value);
  }
};
</script>

<style lang="scss" scoped>
.upload-field {
  position: relative;
  border-radius: var(--brd-radius);
  border: 1px solid var(--col-text);
  padding: 0.5rem;
  input {
    width: 25% !important;
    color: transparent;
    border: 1px solid var(--col-text);
  }

  input::file-selector-button {
    background-color: transparent;
    border-radius: var(--brd-radius);
    padding: 1rem 2rem;
    border: none;
  }

  .img-field-st {
    border-radius: var(--brd-radius);
    padding: 1rem 2rem;
  }
  label {
    width: 75% !important;
    cursor: pointer;
    padding: 2rem 0;
  }
  svg {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>

<!-- usage
          <UploadeFile @fileData="formData.file=$event" :disable="true or false" :for="id"></UploadeFile>
-->
