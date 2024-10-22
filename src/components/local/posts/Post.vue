<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addNpost"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#addPost"
        >
          Add FAQ
        </button>
      </template>
    </HelperButtons>
    <AddPost
      @resetPost="item = {}"
      :singPost="item"
      :allCateg="allCategories"
    ></AddPost>
    <PostTable @editPost="editPost($event)"></PostTable>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddPost from "./AddPost.vue";
import PostTable from "./PostTable.vue";
import { useBlogStore } from "@/stores/blogs/blogStore";
import { storeToRefs } from "pinia";
const { allCategories } = storeToRefs(useBlogStore());

const item = ref({});

const editPost = (e) => {
  item.value = e;
  document.querySelector("#addNpost").click();
};

onMounted(async () => {
  await useBlogStore().getAllCategPosts();
});
</script>

<style lang="scss" scoped></style>
