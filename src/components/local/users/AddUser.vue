<template>
  <form
    @submit.prevent="handleAction()"
    class="modal fade modal-xl"
    id="addUser"
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
                v-model="formData.name"
                :holder="'Name'"
                :label="'Name'"
                :appear="checkErrName(['name']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'name'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>
          <span class="row w-50">
            <!-- email -->
            <span class="col">
              <InptField
                v-model="formData.email"
                :holder="'Email'"
                :label="'Email'"
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
          </span>
          <span class="row w-50">
            <!-- phone -->
            <span class="col">
              <InptField
                v-model="formData.phone"
                :holder="'Phone'"
                :label="'Phone Number'"
                :appear="checkErrName(['phone']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'phone'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>
          <span class="row w-50">
            <!-- role -->
            <span
              class="col d-flex flex-column align-items-center justify-content-center"
            >
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
                >Role</label
              >
              <MultiSelect
                class="w-100"
                id="inpt-field"
                :select="rolesData"
                :appear="checkErrName(['role']) ? 'err-border' : ''"
              />
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'role'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>
          <span class="row w-100">
            <!-- role -->
            <span class="col">
              <UploadeFile
                @fileData="formData.img = $event"
                :reset="resetImg"
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
          <span class="row w-50">
            <!-- Name -->
            <span class="col">
              <div style="position: relative">
                <InptField
                  :typ="`${showPass ? 'text' : 'password'}`"
                  v-model="formData.password"
                  :holder="'Password'"
                  :label="'Password'"
                  :appear="checkErrName(['password']) ? 'err-border' : ''"
                ></InptField>
                <button
                  @click="showPass = !showPass"
                  v-if="showPass"
                  class="eye"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style="width: 2.4rem; height: 2.4rem"
                    fill="currentColor"
                    class="bi bi-eye-slash"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"
                    />
                    <path
                      d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"
                    />
                    <path
                      d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"
                    />
                  </svg>
                </button>
                <button @click="showPass = !showPass" v-else class="eye">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style="width: 2.4rem; height: 2.4rem"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                    />
                    <path
                      d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                    />
                  </svg>
                </button>
              </div>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'password'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </span>
          <span class="row w-50">
            <!-- Name -->
            <span class="col">
              <div style="position: relative">
                <InptField
                  :typ="`${showConfirm ? 'text' : 'password'}`"
                  v-model="formData.confirm_password"
                  :holder="'Confirm Password'"
                  :label="'Confirm Password'"
                  :appear="
                    checkErrName(['confirm_password']) ? 'err-border' : ''
                  "
                ></InptField>
                <button
                  @click="showConfirm = !showConfirm"
                  v-if="showConfirm"
                  class="eye"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style="width: 2.4rem; height: 2.4rem"
                    fill="currentColor"
                    class="bi bi-eye-slash"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"
                    />
                    <path
                      d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"
                    />
                    <path
                      d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"
                    />
                  </svg>
                </button>
                <button @click="showConfirm = !showConfirm" v-else class="eye">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style="width: 2.4rem; height: 2.4rem"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                    />
                    <path
                      d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                    />
                  </svg>
                </button>
              </div>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span
                  v-if="err.$property == 'confirm_password'"
                  class="err-msg"
                >
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
import { storeToRefs } from "pinia";
import { roleStore } from "@/stores/roles/roleStore";
import { useAdminStore } from "@/stores/admin/adminStore";
const { roles, role } = storeToRefs(roleStore());
const { allAdmins } = storeToRefs(useAdminStore());
const showPass = ref(false);
const showConfirm = ref(false);
const resetImg = ref(false);
// validation
import useVuelidator from "@vuelidate/core";
import {
  email,
  required,
  minLength,
  maxLength,
  alphaNum,
  numeric,
  sameAs,
} from "@vuelidate/validators";
required.$message = "Field is required";

import { ref, watch, defineProps } from "vue";

const emit = defineEmits(["resetUser"]);
const isLoading = ref(false);

onMounted(async () => {
  const res = await roleStore().getAllRoles();
  rolesData.value.options = roles.value;
});

const props = defineProps({
  user: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

const formData = ref({
  name: "",
  email: "",
  phone: "",
  role: "",
  password: "",
  img: "",
  confirm_password: "",
});

const rolesData = ref({
  value: null,
  label: "name",
  placeholder: "Select Role",
  key: "id",
  options: "roles.value",
  groups: true,
  options: roles.value,
  searchable: true,
  mode: "single",
  valueProp: "id",
  labelProp: "name",
  closeOnSelect: true,
  disabled: false,
  change: (val) => {
    if (val) setRole(val);
  },
  clear: async () => {
    formData.value.role = "";
  },
});

const setRole = async (val) => {
  formData.value.role = val;
  const res = await roleStore().showRole({ id: val });
  if (res) {
    // rolesData.value.options = role.value;
  }
};

watch(
  () => props.user,
  () => {
    if (!props.user) {
      return;
    }
    formData.value.name = props.user.name;
    formData.value.email = props.user.email;
    formData.value.phone = props.user.phone;
    formData.value.role = props.user.role;
    formData.value.password = props.user.password;
    formData.value.img = props.user.image;
    formData.value.password = props.user.password;
    formData.value.confirm_password = props.user.confirm_password;
  }
);

const samePass = computed(() => {
  return formData.value.password;
});

const validationRules = ref({
  name: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(100),
  },
  email: { required, email, maxLength: maxLength(50) },
  phone: { required, numeric },

  password: {
    required,
    required,
    minLength: minLength(6),
    maxLength: maxLength(20),
  },
  confirm_password: {
    required,
    sameAs: sameAs(samePass),
  },
});

const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};

const validationObj = useVuelidator(validationRules, formData);

const closeModal = () => {
  resetFormData();
  emit("resetUser");
  resetImg.value = true;
  setTimeout(() => {
    resetImg.value = false;
  }, 500);
  document.querySelector("#close-modal").click();
};

const resetFormData = () => {
  // reset form
  formData.value = {
    name: "",
    email: "",
    phone: "",
    role: "",
    img: "",
    password: "",
    confirm_password: "",
  };
  validationObj.value.$reset();
  document.getElementById("addUser").reset();
};

const addUser = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await useAdminStore().addAdmin({
      name: formData.value.name,
      email: formData.value.email,
      phone: formData.value.phone,
      role: formData.value.role,
      image: formData.value.img,
      password: formData.value.password,
      confirm_password: formData.value.confirm_password,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const updateUser = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await useAdminStore().updateAdmin({
      name: formData.value.name,
      email: formData.value.email,
      phone: formData.value.phone,
      role: formData.value.role,
      image: formData.value.img,
      password: formData.value.password,
      confirm_password: formData.value.confirm_password,
      id: props.user.id,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const handleAction = () => {
  if (props.user.id) {
    updateUser();
  } else {
    addUser();
  }
};
</script>

<style lang="scss" scoped></style>
