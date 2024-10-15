<template>
  <div class="user-info">
    <div class="user-data m-5">
      <div class="d-flex flex-column" v-for="(faq, i, j) in question" :key="j">
        <div
          v-if="faq"
          style="width: 30%"
          class="d-flex align-items-center justify-content-between gap-4"
        >
          <label class="user-name" :for="i">{{ i }}:</label>
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
            :id="i"
            :value="faq"
          />
        </div>
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
