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
        @keyup.enter="filterData()"
      />
      <button
        type="button"
        class="search-btn"
        @click="filterData()"
        :disabled="!searchText.trim()"
      >
        Search
      </button>
      <button type="button" class="reset-btn" @click="resetFilter()">
        Reset
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useSearchStore } from "@/stores/search/searchStore";
import { storeToRefs } from "pinia";

const { filteredData } = storeToRefs(useSearchStore());
const searchText = ref("");

const props = defineProps({
  route: {
    type: String,
    required: false,
  },
  slType: {
    type: Array,
    required: false,
  },
});

watch(
  () => searchText.value,
  (newVal) => {
    if (searchText.value?.length == 0) {
      filteredData.value = [];
    }
  }
);

const filterData = async () => {
  const res = await useSearchStore().getFilteredData(props.route, {
    search: searchText.value,
    slider_type: props.slType?.length == 1 ? props.slType[0] : props.slType,
  });
};
const resetFilter = async () => {
  searchText.value = "";
  useSearchStore().filteredData = [];
};
</script>

<style lang="scss" scoped></style>
