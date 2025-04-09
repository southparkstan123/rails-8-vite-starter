<template>
  <fieldset :class="wrapperClass">
    <legend :class="textClass">{{ title }}</legend>
    <slot></slot>
  </fieldset>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ wrapperClass: string; textClass: string; title: string }>(),
  {
    wrapperClass: "",
    textClass: "",
    title: "",
  },
);
</script>

<style scoped></style>
