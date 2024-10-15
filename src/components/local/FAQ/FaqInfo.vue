<template>
  <div class="user-info">
    <div class="user-data m-5">
      <div class="row">
        <span class="col-6 center-col my-3">
          <label class="user-name" for="quesEn"> Question En:</label>
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
            :value="question.title?.en"
          />
        </span>
        <span class="col-6 col-6 center-col my-3">
          <label class="user-name" for="quesAr"> Question AR:</label>
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
            :value="question.title?.ar"
          />
        </span>
      </div>
      <div class="row">
        <span class="col-6 center-col my-3">
          <label class="user-name" for="quesEn"> Answer En:</label>
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
            :value="question.description?.en"
          />
        </span>
        <span class="col-6 center-col my-3">
          <label class="user-name" for="descAr"> Answer AR:</label>
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
            :value="question.description?.ar"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { FAQStore } from "@/stores/settings/FAQ";

import { storeToRefs } from "pinia";

const { question } = storeToRefs(FAQStore());

const route = useRoute();
const router = useRouter();

onBeforeMount(async () => {
  if (!route.params.id) router.push({ name: "FAQ" });
  let res = await FAQStore().getQuestion({ id: route.params.id });
  if (!res) router.push({ name: "FAQ" });
});
</script>

<style lang="scss" scoped></style>
