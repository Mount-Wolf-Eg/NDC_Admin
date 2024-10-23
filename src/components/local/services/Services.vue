<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addService"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#addSer"
        >
          Add New
        </button>
      </template>
    </HelperButtons>
    <AddService @resetMainService="item = {}" :service="item"></AddService>
    <ServicesTable @editMainService="editMainService($event)"></ServicesTable>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddService from "./AddService.vue";
import ServicesTable from "./ServicesTable.vue";

const item = ref({});

const editMainService = (e) => {
  item.value = e;
  document.querySelector("#addService").click();
};
</script>

<style lang="scss" scoped></style>
