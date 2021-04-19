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
      // const textureLoader = new THREE.TextureLoader()
      // const roughnessTexture = textureLoader.load('/assets/gem/roughness.jpeg')
      // gem.material.roughnessMap = roughnessTexture
      gem.material.displacementScale = 0.15
      gem.material.emissiveIntensity = 0.4
      gem.material.refractionRatio = 1
      gem.rotation.z = 0
      // change color
      scene.add(gem)

      light = gltf.scene.children[0]
      scene.add(light)
      this.ready = true
    })

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 3)
    directionalLight2.position.set(-1, -1, -1)
    scene.add(directionalLight2)

    // Settings
    const sizes = {
      width: 500,
      height: 500,
    }

    // Base camera
    const camera = n