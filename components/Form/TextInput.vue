<script lang="ts" setup>
// compiler macro
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
  type: {
    type: String,
    default: 'default',
  },
})
const emit = defineEmits(['update:modelValue'])
const slots = useSlots()

// list styles
const paddingStyles = reactive<{
  [key: string]: string
}>({
  xs: 'px-1 py-0.5',
  sm: 'px-2 py-1.5',
  md: 'px-4 py-2',
  lg: 'px-5 py-3',
})
const fontSizeStyles = reactive<{
  [key: string]: string
}>({
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
})

// states
const modelValue = useSyncProps<string>(props, 'modelValue', emit)
const havePreEl = computed(
  () =>
    typeof slots.prefix !== 'undefined' ||
    typeof slots['prefix-disabled'] !== 'undefined'
)
const haveSuEl = computed(() => typeof slots.suffix !== 'undefined')
cons