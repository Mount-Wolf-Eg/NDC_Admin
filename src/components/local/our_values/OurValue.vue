<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addValue"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#addval"
        >
          Add New
        </button>
      </template>
    </HelperButtons>
    <AddValue @resetOurValue="item = {}" :val="item"></AddValue>
    <OurValueTable @editValue="editValue($event)"></OurValueTable>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";

import OurValueTable from "./OurValueTable.vue";
import AddValue from "./AddValue.vue";

const item = ref({});

const editValue = (e) => {
  item.value = e;
  document.querySelector("#addValue").click();
};
</script>

<style lang="scss" scoped></style>
