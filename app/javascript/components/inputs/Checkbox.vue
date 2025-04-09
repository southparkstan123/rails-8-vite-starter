<template>
  <InputField
    :inputId="forAttribute"
    :className="'float-left my-3'"
    :inputValue="inputValue"
    :inputFieldClass="'join-item px-1 text-primary border-secondary focus:ring-0 disabled:opacity-25'"
    :inputName="forAttribute"
    :inputType="'checkbox'"
    :checked="inputValue"
    :isDisabled="false"
    :isMultiple="undefined"
    :accept="undefined"
    :autocomplete="'off'"
    :step="undefined"
    :min="undefined"
    :max="undefined"
    :placeholder="label"
    :isRequired="false"
    @changeValue="onChangeValue"
  >
    <template #label>
      <label :for="forAttribute" class="px-1 text-primary">{{ label }}</label>
    </template>
  </InputField>
</template>

<script setup lang="ts">
import InputField from "@/components/inputs/InputField.vue";

withDefaults(
  defineProps<{
    forAttribute: string;
    label: string;
    inputValue: boolean;
  }>(),
  {
    forAttribute: "",
    label: "",
    inputValue: false,
  },
);

const emit = defineEmits<{ e: any; changeValue: any }>();

const onChangeValue = (payload: any) => {
  emit("changeValue", payload);
};
</script>

<style scoped></style>
