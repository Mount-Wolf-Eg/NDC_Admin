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
          <span class="row w-50">
            <!-- Name -->
            <span class="col">
              <InptField
                v-model="formData.password"
                :holder="'Password'"
                :label="'Password'"
                :appear="checkErrName(['password']) ? 'err-border' : ''"
              ></InptField>
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
              <InptField
                v-model="formData.confirm_password"
                :holder="'Confirm Password'"
                :label="'Confirm Password'"
                :appear="checkErrName(['confirm_password']) ? 'err-border' : ''"
              ></InptField>
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
    alphaNum,
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
