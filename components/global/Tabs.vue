
<script lang="ts" setup>
// types
interface TabItem {
  name: string
  title: string
}

// composables
const slots = useSlots()
defineEmits(['click'])

// vars
const tabs = ref<HTMLDivElement>()
const tabHeaderIndicator = ref<HTMLDivElement>()
const tabItems = ref<TabItem[]>([])
const activeTab = ref<string>()

// provides
provide('activeTab', activeTab)

// methods
const updateIndicator = () => {
  if (!tabs.value || !tabHeaderIndicator.value) return

  // dom
  const dom = tabHeaderIndicator.value
  // get header tab item dom
  const currentActiveIndex = tabItems.value.findIndex(
    ({ name }) => name === activeTab.value
  )
  const tabItem = tabs.value.querySelectorAll('.tabs-header-item')[
    currentActiveIndex
  ] as HTMLDivElement
  if (!tabItem) return

  // set dom position and size to tab item
  const padding = 24
  const diff = 30
  dom.style.width = `${tabItem.offsetWidth + diff}px`
  dom.style.left = `${tabItem.offsetLeft - padding - diff / 2}px`
}

// watchs
watch(tabItems, () => updateIndicator())
watch(activeTab, () => updateIndicator())

// lifecycle
onBeforeMount(() => {
  if (slots.default) {
    slots.default().forEach((element, i) => {
      const tab = element.props as TabItem
      tabItems.value.push(tab)
      if (i === 0) activeTab.value = tab.name
    })
  }
})
onMounted(() => {
  ;(async () => {
    while (
      typeof tabHeaderIndicator.value === 'undefined' ||
      typeof tabs.value === 'undefined'
    ) {
      await new Promise((resolve) => setTimeout(resolve, 10))
    }
    setTimeout(() => {
      updateIndicator()
    }, 350)
  })()
})
</script>
