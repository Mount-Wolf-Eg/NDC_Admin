<template>
  <div class="inpt-box">
    <textarea
      name="description"
      type="text"
      class="txt-ar style-17"
      :class="appear"
      :placeholder="holder"
      :value="modelValue"
      @input="updateValue($event.target.value)"
    ></textarea>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const emits = defineEmits(["textData", "update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    required: false,
    default: "",
  },
  holder: {
    type: String,
    required: false,
    default: "",
  },
  appear: {
    type: String,
    required: false,
    default: "",
  },
});

const updateValue = (value) => {
  emits("update:modelValue", value);
};
</script>

<style lang="scss" scoped>
.inpt-box {
  margin: 2rem 0;
  .txt-ar {
    padding: 2rem;
    width: 100%;
    border-radius: var(--brd-radius);
    border: 1px solid var(--col-text);
    min-height: 10rem;
  }
}
</style>

<!-- usage 
   <Text-Area
            :holder="''"
            @inptData="formdata.data=$event"
          ></Text-Area> 
-->
