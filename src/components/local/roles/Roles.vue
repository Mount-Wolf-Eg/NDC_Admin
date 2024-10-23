<template>
  <div class="roles-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addRol"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#addRole"
        >
          Add Role
        </button>
      </template>
    </HelperButtons>
    <AddRole @resetRole="item = {}" :role="item"></AddRole>

    <RolesTable @editRole="editRol($event)"></RolesTable>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddRole from "./AddRole.vue";
import RolesTable from "./RolesTable.vue";
const item = ref({});

const editRol = (e) => {
  item.value = e;
  document.querySelector("#addRol").click();
};
</script>

<style lang="scss" scoped></style>
