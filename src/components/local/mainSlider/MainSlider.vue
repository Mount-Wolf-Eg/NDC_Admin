<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="mainSlider"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#mSlider"
        >
          Add New
        </button>
      </template>
    </HelperButtons>
    <AddMainSlider @resetCustomer="item = {}" :partner="item"></AddMainSlider>
    <MainSliderTable @editSlider="editSlider($event)"></MainSliderTable>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddMainSlider from "./AddMainSlider.vue";
import MainSliderTable from "./MainSliderTable.vue";

const item = ref({});

const editSlider = (e) => {
  item.value = e;
  document.querySelector("#mainSlider").click();
};
</script>

<style lang="scss" scoped></style>
