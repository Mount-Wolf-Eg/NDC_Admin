<template>
  <div
    class="row helper-btns d-flex flex-row align-items-center justify-content-between"
  >
    <div class="col-6">
      <slot name="add-btn"></slot>
    </div>

    <div
      class="col-6 d-flex flex-row align-items-center justify-content-end gap-3"
    >
      <input
        class="col"
        type="text"
        id="search"
        placeholder="Search"
        v-model="searchText"
      />
      <button type="button" class="search-btn">Search</button>
      <button type="button" class="reset-btn" @click="searchText = ''">
        Reset
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const searchText = ref("");
</script>

<style lang="scss" scoped></style>

<!-- <button
        type="button"
        id="openModal"
        class="add-admin"
        data-bs-toggle="modal"
        data-bs-target="#addAdmin"
      >
       </button> -->
