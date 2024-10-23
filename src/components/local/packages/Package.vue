<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addPackage"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#addPack"
        >
          Add New
        </button>
      </template>
    </HelperButtons>
    <AddPackage @resetMainService="item = {}" :package="item"></AddPackage>
    <PackagesTable @editPackage="editPackage($event)"></PackagesTable>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddPackage from "./AddPackage.vue";
import PackagesTable from "./PackagesTable.vue";

const item = ref({});

const editPackage = (e) => {
  item.value = e;
  document.querySelector("#addPackage").click();
};
</script>

<style lang="scss" scoped></style>
