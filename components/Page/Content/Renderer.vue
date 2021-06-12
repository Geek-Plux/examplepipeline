<script setup>
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  pageTitle: {
    type: String,
    default: '',
  },
})

const { data } = await useAsyncData(props.path, () =>
  queryContent(