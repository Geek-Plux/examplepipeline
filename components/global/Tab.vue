<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
const activeTab = inject<string>('activeTa