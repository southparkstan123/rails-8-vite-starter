<template>
  <InputField
    v-for="item in data"
    :inputId="item.value"
    :className="className"
    :inputValue="item.value"
    :inputFieldClass="inputFieldClass"
    :inputType="'radio'"
    :checked="selectedItem === item.value"
    :inputName="item.value"
    :isDisabled="false"
    :isMultiple="undefined"
    :accept="undefined"
    :autocomplete="'off'"
    :step="undefined"
    :min="undefined"
    :max="undefined"
    :placeholder="item.label"
    :isRequired="false"
    @changeValue="onChangeSelectedItem"
  >
    <template #label>
      <label :for="item.value" :class="labelClass">
        {{ item.label }}
      </label>
    </template>
  </InputField>
</template>

<script setup lang="ts">
import InputField from "@/components/inputs/InputField.vue";

defineProps<{
  data: { value: string; label: string }[];
  selectedItem: string;
  className: string;
  inputFieldClass: string;
  labelClass: string;
}>();

const emit = defineEmits<{ (evt: "onSelectItem", payload: any): void }>();

const onChangeSelectedItem = (payload: any) => {
  emit("onSelectItem", payload);
};
</script>

<style scoped></style>
