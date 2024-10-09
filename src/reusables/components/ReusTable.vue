<template>
  <div class="paymen-table" style="min-height: auto">
    <table class="table table-hover table-st-1">
      <thead v-if="props.header">
        <tr>
          <th v-for="(head, i) in header" :key="i">
            {{ head }}
          </th>
        </tr>
      </thead>

      <tbody>
        <slot name="table"></slot>
      </tbody>
      <tfoot>
        <tr>
          <td
            class="text-center p-0"
            style="background-color: transparent !important; width: fit-content"
            colspan="9"
          >
            {{ foot }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  header: {
    type: Array,
    required: false,
  },
  body: {
    type: Array,
    required: false,
  },
  foot: {
    type: Array,
    required: false,
  },
});
</script>

<style lang="scss" scoped></style>
