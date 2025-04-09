<template>
  <div :class="className">
    <input
      :id="inputId"
      :type="inputType"
      :class="inputFieldClass"
      :name="inputName"
      :placeholder="displayedPlaceholder"
      :value="inputValue"
      @input="changeValue"
      :disabled="isDisabled"
      :step="step"
      :min="min"
      :max="max"
      :checked="checked"
      :multiple="isMultiple"
      :accept="accept"
      :autocomplete="'off'"
    />
    <slot name="label"></slot>
    <div class="block">
      <slot name="error-feedback"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type {
  InputType,
  InputFieldProps,
  RangeProps,
  CheckboxProps,
  RadioButtonProps,
  FileProps,
} from "../../types/types";

const props = withDefaults(
  defineProps<
    InputFieldProps & { inputType: InputType } & RangeProps &
      CheckboxProps &
      RadioButtonProps &
      FileProps
  >(),
  {
    inputId: "",
    className: "",
    inputName: "",
    isRequired: false,
    placeholder: "Placeholder",
    inputValue: "",
    inputFieldClass: "form-control",
    inputType: "text",
    isDisabled: false,
    step: undefined,
    min: undefined,
    max: undefined,
    checked: false,
    isMultiple: undefined,
    accept: undefined,
  },
);

const displayedPlaceholder = computed<string>(() => {
  return props.isRequired
    ? `${props.placeholder} (Required)`
    : props.placeholder;
});

interface ChangeValuePayload {
  checked?: boolean;
  value?: string;
  files?: FileList | null;
}

const emit = defineEmits<{
  (e: "changeValue", payload: ChangeValuePayload | string): void;
}>();

interface CheckboxEventTarget extends EventTarget {
  checked: boolean;
  value: string;
}

interface FileEventTarget extends EventTarget {
  files: FileList | null;
}

interface InputEvent extends Event {
  target:
    | HTMLInputElement
    | (EventTarget & CheckboxEventTarget & FileEventTarget);
}

const changeValue = (event: Event) => {
  const inputEvent = event as InputEvent;
  if (props.inputType === "checkbox") {
    const { checked, value } = inputEvent.target as CheckboxEventTarget;
    emit("changeValue", { checked, value });
  } else if (props.inputType === "file") {
    const { files } = inputEvent.target as FileEventTarget;
    emit("changeValue", { files });
  } else {
    emit("changeValue", (inputEvent.target as HTMLInputElement).value);
  }
};
</script>

<style scoped></style>
