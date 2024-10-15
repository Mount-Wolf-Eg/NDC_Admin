<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addAchievement"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#addAchieve"
        >
          Add New
        </button>
      </template>
    </HelperButtons>
    <AddAchievement
      @resetAchievement="item = {}"
      :partner="item"
    ></AddAchievement>
    <AchievementTable
      @editAchievements="editAchievements($event)"
    ></AchievementTable>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddAchievement from "./AddAchievement.vue";
import AchievementTable from "./AchievementTable.vue";

const item = ref({});

const editAchievements = (e) => {
  item.value = e;
  document.querySelector("#addAchievement").click();
};
</script>

<style lang="scss" scoped></style>
