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
    const { OrbitControls } = await import(
      'three/examples/jsm/controls/OrbitControls.js'
    ).then((m) => m.default || m)
    const { GLTFLoader } = await import(
      'three/examples/jsm/loaders/GLTFLoad