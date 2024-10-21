<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addJob"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add-Job"
        >
          Add New
        </button>
      </template>
    </HelperButtons>
    <AddJob @resetJobs="item = {}" :jobCard="item"></AddJob>
    <JobsTable @editJob="editJob($event)"></JobsTable>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddJob from "./AddJob.vue";
import JobsTable from "./JobsTable.vue";

const item = ref({});

const editJob = (e) => {
  item.value = e;
  document.querySelector("#addJob").click();
};
</script>

<style lang="scss" scoped></style>
