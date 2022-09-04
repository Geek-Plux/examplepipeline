export default defineNuxtPlugin((nuxtApp) => {
  // when page redirect on mobile device, close drawer navbar
  nuxtApp.hook('page:finish', () => {
    const showDrawer = useState<boolean>('navbar.showDrawer', () => false)
    const showOptions = useSta