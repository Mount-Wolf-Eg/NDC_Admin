<template>
  <div class="user-info">
    <div class="user-data m-5">
      <div class="row">
        <span class="col-6 center-col my-3">
          <label class="user-name" for="quesEn"> Name En:</label>
          <input
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
            :value="category.name?.en"
          />
        </span>

        <span class="col-6 col-6 center-col my-3">
          <label class="user-name" for="quesAr"> Name AR:</label>
          <input
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
            :value="category.name?.ar"
          />
        </span>
      </div>
      <div class="row">
        <span class="col-6 center-col my-3">
          <label class="user-name" for="quesEn"> Description En:</label>
          <input
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
            :value="category.description?.en"
          />
        </span>
        <span class="col-6 center-col my-3">
          <label class="user-name" for="descAr"> Description AR:</label>
          <input
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
            :value="category.description?.ar"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useBlogStore } from "@/stores/blogs/blogStore";

import { storeToRefs } from "pinia";

const { category } = storeToRefs(useBlogStore());

const route = useRoute();
const router = useRouter();

onBeforeMount(async () => {
  if (!route.params.id) router.push({ name: "blog-categories" });
  let res = await useBlogStore().getCategPost({ id: route.params.id });
  if (!res) router.push({ name: "blog-categories" });
});
</script>

<style lang="scss" scoped></style>
