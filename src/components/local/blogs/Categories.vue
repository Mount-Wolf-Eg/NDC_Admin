<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addCategBlog"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#addCateg"
        >
          Add FAQ
        </button>
      </template>
    </HelperButtons>
    <AddBlogCateg @resetCategories="item = {}" :categData="item"></AddBlogCateg>
    <CategoriesTable @editCategories="editCategories($event)"></CategoriesTable>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddBlogCateg from "./AddBlogCateg.vue";
import CategoriesTable from "./CategoriesTable.vue";

const item = ref({});

const editCategories = (e) => {
  item.value = e;
  document.querySelector("#addCategBlog").click();
};
</script>

<style lang="scss" scoped></style>
