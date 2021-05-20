<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { availableLocales } from '~/utils/lang'

// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})

// state
const currentStyle = toRef(props, 'type')
const localeSetting = useState<string>('locale.setting')
</script>

<template>
  <div class="flex items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="localeSetting"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel class="sr-only">Theme</ListboxLabel>
      <ListboxButton
        type="button"
        title="Change Language"
        class="transition-colors duration-300"
      >
        <span class="justify-center items-center flex">
          <IconLa:language />
        </sp