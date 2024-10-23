<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addMainResource"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#accResource"
        >
          Add New
        </button>
      </template>
    </HelperButtons>
    <AddMainResource
      @resetMainResource="item = {}"
      :partner="item"
    ></AddMainResource>
    <MainResourceTable
      @editMainResource="editMainResource($event)"
    ></MainResourceTable>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddMainResource from "./AddMainResource.vue";
import MainResourceTable from "./MainResourceTable.vue";

const item = ref({});

const editMainResource = (e) => {
  item.value = e;
  document.querySelector("#addMainResource").click();
};
</script>

<style lang="scss" scoped></style>
