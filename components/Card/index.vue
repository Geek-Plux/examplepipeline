<script lang="ts" setup>
defineProps({
  disabled: {
    type: Boolean,
    required: false,
  },
})
</script>

<template>
  <div
    class="card duration-300 transition-colors w-full relative rounded overflow-hidden bg-white dark:bg-slate-900 border border-gray-900/10 dark:border-gray-50/[0.2]"
  >
    <div
      v-if="disabled"
      class="absolute z-10 top-0 lef