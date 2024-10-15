<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addSuccess"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#addMetrics"
        >
          Add New
        </button>
      </template>
    </HelperButtons>
    <AddSuccessMetrics
      @resetSuccess="item = {}"
      :partner="item"
    ></AddSuccessMetrics>
    <SuccessMetricsTable
      @editMetrics="editMetrics($event)"
    ></SuccessMetricsTable>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddSuccessMetrics from "./AddSuccessMetrics.vue";
import SuccessMetricsTable from "./SuccessMetricsTable.vue";
const item = ref({});

const editMetrics = (e) => {
  item.value = e;
  document.querySelector("#addSuccess").click();
};
</script>

<style lang="scss" scoped></style>
