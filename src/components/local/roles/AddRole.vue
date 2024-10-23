<template>
  <form
    @submit.prevent="handleAction()"
    class="modal fade modal-xl"
    id="addRole"
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
          <span class="row w-100">
            <!-- Name -->
            <span class="col">
              <InptField
                v-model="formData.RoleName"
                :holder="'Name'"
                :label="'Role Name'"
                :appear="checkErrName(['RoleName']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'RoleName'" class="err-msg">
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
import { roleStore } from "@/stores/roles/roleStore";

const { roles } = storeToRefs(roleStore());

// validation
import useVuelidator from "@vuelidate/core";
import { required } from "@vuelidate/validators";
required.$message = "Role Name is required";

import { ref, watch, defineProps } from "vue";

const emit = defineEmits(["resetRole"]);
const isLoading = ref(false);

const props = defineProps({
  role: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

const formData = ref({
  RoleName: "",
});

watch(
  () => props.role,
  () => {
    if (!props.role.role) {
      return;
    }
    formData.value.RoleName = props.role.role.name;
  }
);

const validationRules = ref({
  RoleName: { required },
});

const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};

const validationObj = useVuelidator(validationRules, formData);

const closeModal = () => {
  resetFormData();
  emit("resetRole");
  document.querySelector("#close-modal").click();
};

const resetFormData = () => {
  // reset form
  formData.value = {
    RoleName: "",
  };
  validationObj.value.$reset();
  document.getElementById("addRole").reset();
};

const addRole = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await roleStore().addRole({
      name: formData.value.RoleName,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const updateRole = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await roleStore().updateRole({
      name: formData.value.RoleName,
      id: props.role.role.id,
    });
    if (res) {
      closeModal();
    }
  }
  isLoading.value = false;
};

const handleAction = () => {
  if (props.role.role) {
    updateRole();
  } else {
    addRole();
  }
};
</script>

<style lang="scss" scoped></style>
