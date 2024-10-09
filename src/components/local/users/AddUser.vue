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
            <!-- Name -->
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
            <!-- Name -->
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
                ><span v-if="err.$property == 'phobe'" class="err-msg">
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

import { storeToRefs } from "pinia";
import { useAdminStore } from "@/stores/admin/adminStore";

const { allAdmins } = storeToRefs(useAdminStore());

// validation
import useVuelidator from "@vuelidate/core";
import { email, required, minLength, maxLength } from "@vuelidate/validators";
required.$message = "Field is required";

import { ref, watch, defineProps } from "vue";

const emit = defineEmits(["resetUser"]);
const isLoading = ref(false);

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
  password: "",
});

watch(
  () => props.user,
  () => {
    if (!props.user) {
      return;
    }
    formData.value.name = props.user.name;
    formData.value.email = props.user.email;
    formData.value.password = props.user.password;
  }
);

const validationRules = ref({
  name: { required },
  email: { required, email },
  password: {
    required,
    required,
    minLength: minLength(6),
    maxLength: maxLength(20),
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
    password: "",
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
      password: formData.value.password,
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
      password: formData.value.password,
      phone: formData.value.phone,
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
