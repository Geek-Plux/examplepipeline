<script lang="ts" setup>
// composable
const { t } = useLang()

// meta
definePageMeta({
  layout: 'page',
})

// vars
const titlesText = computed<string[]>(() => t('pages.index.title').split('[]'))
const leadingsText = computed(() => [
  {
    text: titlesText.value[0],
    startColor: '#007CF0',
    endColor: '#00DFD8',
    delay: 0,
  },
  {
    text: titlesText.value[1],
    startColor: '#7928CA',
    endColor: '#FF0080',
    delay: 2,
  },
  {
    text: titlesText.value[2],
    st