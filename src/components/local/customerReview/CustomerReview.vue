<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addCustomerReview"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#accCustomer"
        >
          Add New
        </button>
      </template>
    </HelperButtons>
    <AddCustomerReview
      @resetCustomer="item = {}"
      :partner="item"
    ></AddCustomerReview>
    <CustomerReviewTable
      @editCustomers="editCustomers($event)"
    ></CustomerReviewTable>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddCustomerReview from "./AddCustomerReview.vue";
import CustomerReviewTable from "./CustomerReviewTable.vue";

const item = ref({});

const editCustomers = (e) => {
  item.value = e;
  document.querySelector("#addCustomerReview").click();
};
</script>

<style lang="scss" scoped></style>
