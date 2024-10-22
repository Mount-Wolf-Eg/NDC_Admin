<template>
  <div class="user-info">
    <div class="user-data m-5">
      <div class="row">
        <span class="col-6 center-col my-3">
          <label class="user-name" for="quesEn"> Title En:</label>
          <textarea
            type="text"
            style="
              border: 1px solid var(--col-text);
              border-radius: 12px;
              padding: 1rem;
              margin: 1rem;
              font-weight: bold;
              color: var(--col-text);
            "
            disabled
            id="quesEn"
            :value="post.title?.en"
          ></textarea>
        </span>

        <span class="col-6 col-6 center-col my-3">
          <label class="user-name" for="quesAr"> Title AR:</label>
          <textarea
            type="text"
            style="
              border: 1px solid var(--col-text);
              border-radius: 12px;
              padding: 1rem;
              margin: 1rem;
              font-weight: bold;
              color: var(--col-text);
            "
            disabled
            id="quesAr"
            :value="post.title?.ar"
          ></textarea>
        </span>
      </div>
      <div class="row">
        <span class="col-6 center-col my-3">
          <label class="user-name" for="quesEn"> Content En:</label>
          <textarea
            type="text"
            style="
              border: 1px solid var(--col-text);
              border-radius: 12px;
              padding: 1rem;
              margin: 1rem;
              font-weight: bold;
              color: var(--col-text);
            "
            disabled
            id="quesEn"
            :value="post.content?.en"
          ></textarea>
        </span>

        <span class="col-6 col-6 center-col my-3">
          <label class="user-name" for="quesAr"> Content AR:</label>
          <textarea
            type="text"
            style="
              border: 1px solid var(--col-text);
              border-radius: 12px;
              padding: 1rem;
              margin: 1rem;
              font-weight: bold;
              color: var(--col-text);
            "
            disabled
            id="quesAr"
            :value="post.content?.ar"
          ></textarea>
        </span>
      </div>
      <div class="row">
        <span class="col-6 center-col my-3">
          <label class="user-name" for="quesEn"> Description En:</label>
          <textarea
            type="text"
            style="
              border: 1px solid var(--col-text);
              border-radius: 12px;
              padding: 1rem;
              margin: 1rem;
              font-weight: bold;
              color: var(--col-text);
            "
            disabled
            id="quesEn"
            :value="post.description?.en"
          ></textarea>
        </span>
        <span class="col-6 center-col my-3">
          <label class="user-name" for="descAr"> Description AR:</label>
          <textarea
            type="text"
            style="
              border: 1px solid var(--col-text);
              border-radius: 12px;
              padding: 1rem;
              margin: 1rem;
              font-weight: bold;
              color: var(--col-text);
            "
            disabled
            id="descAr"
            :value="post.description?.ar"
          ></textarea>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePostStore } from "@/stores/posts/postStore";

import { storeToRefs } from "pinia";

const { post } = storeToRefs(usePostStore());

const route = useRoute();
const router = useRouter();

onBeforeMount(async () => {
  if (!route.params.id) router.push({ name: "blog-posts" });
  let res = await usePostStore().getPost({ id: route.params.id });
  if (!res) router.push({ name: "blog-posts" });
});
</script>

<style lang="scss" scoped>
textarea {
  min-height: 15rem;
}
</style>
