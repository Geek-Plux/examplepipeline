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
      'three/examples/jsm/loaders/GLTFLoader.js'
    ).then((m) => m.default || m)
    // Canvas
    let canvas = document.querySelector('canvas.webgl')

    // wait
    while (!canvas) {
      await new Promise((resolve) => setTimeout(resolve, 50))
      canvas = document.querySelector('canvas.webgl')
    }

    // Scene
    const scene = new THREE.Scene()

    // Models
    let gem
    let light

    const gltfLoader = new GLTFLoader()
    gltfLoader.load('/assets/gem/gem.gltf', (gltf) => {
      // Gem
      gem = gltf.scene.children[6]

      // Material setup
      // const textureLoader = new THREE.