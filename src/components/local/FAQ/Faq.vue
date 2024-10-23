<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addFAQ"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#addFaq"
        >
          Add FAQ
        </button>
      </template>
    </HelperButtons>
    <AddFaq @resetFaq="item = {}" :faqData="item"></AddFaq>
    <FaqTable @editQuestion="editQuestion($event)"></FaqTable>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddFaq from "./AddFaq.vue";
import FaqTable from "./FaqTable.vue";
const item = ref({});

const editQuestion = (e) => {
  item.value = e;
  document.querySelector("#addFAQ").click();
};
</script>

<style lang="scss" scoped></style>
