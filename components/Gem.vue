<script>
// taken from https://github.com/nuxt/framework/blob/main/docs/components/atoms/Gem.vue
export default {
  data() {
    return {
      ready: false,
    }
  },
  async mounted() {
    const THREE = await import('three').then((m) => m.default || m)
    const {