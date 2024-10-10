<template>
  <div class="user-info">
    <div class="user-images">
      <img v-if="admin.image" :src="admin.image" alt="user image" />
      <div v-else class="center-row align-items-center gap-4">
        <div
          style="
            width: 5rem;
            height: 5rem;
            background-color: var(--col-text);
            border-radius: 50%;
          "
        ></div>
        <div>
          <p class="user-name">{{ admin.name }}</p>
          <p
            class="user-name"
            :style="`${
              admin.status == 'active'
                ? 'color: var(--col-success) !important'
                : 'color: var(--col-error) !important'
            }`"
          >
            {{ admin.status }}
          </p>
        </div>
      </div>
    </div>
    <div class="user-data m-5">
      <div class="d-flex flex-column" v-for="(info, i, j) in admin" :key="j">
        <div
          v-if="info"
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
            :value="info"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAdminStore } from "@/stores/admin/adminStore";
import { storeToRefs } from "pinia";

const { admin } = storeToRefs(useAdminStore());

const route = useRoute();
const router = useRouter();

onBeforeMount(async () => {
  if (!route.params.id) router.push({ name: "users" });
  let res = await useAdminStore().getAdmin({ id: route.params.id });
  if (!res) router.push({ name: "users" });
});
</script>

<style lang="scss" scoped></style>
