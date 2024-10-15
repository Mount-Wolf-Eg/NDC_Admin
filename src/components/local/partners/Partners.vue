<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addPart"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#addPartner"
        >
          Add New
        </button>
      </template>
    </HelperButtons>
    <AddPartner @resetPartner="item = {}" :partner="item"></AddPartner>
    <PartnerTable @editPartner="editPartner($event)"></PartnerTable>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddPartner from "./AddPartner.vue";
import PartnerTable from "./PartnerTable.vue";
const item = ref({});

const editPartner = (e) => {
  item.value = e;
  document.querySelector("#addPart").click();
};
</script>

<style lang="scss" scoped></style>
