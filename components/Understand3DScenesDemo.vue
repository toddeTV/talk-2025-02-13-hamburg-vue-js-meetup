<script setup lang="ts">
import type { TresCanvasProps } from '@tresjs/core/dist/src/components/TresCanvas.vue.js'
import { OrbitControls } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
import {
  AmbientLight,
  CameraHelper,
  DirectionalLight,
  NoToneMapping,
  PerspectiveCamera,
  SRGBColorSpace,
  VSMShadowMap,
} from 'three'
import { ref, shallowRef, watch, watchEffect } from 'vue'

const props = defineProps<{
  page: number
  click: number
}>()

function isStep(page: number | number[], click?: number | number[]) {
  const pages = Array.isArray(page) ? page : [page]
  const clicks = Array.isArray(click) ? click : [click]

  if (!click) {
    return pages.includes(props.page)
  }
  return pages.includes(props.page) && clicks.includes(props.click)
}

function isStepHigherEqual(page: number) {
  return props.page >= page
}

const showGrid = ref(true)
const showCamera = ref(true)
const showLights = ref(true)
const directionalLightRange = ref('100')
const showPlane = ref(true)
const showCube = ref(true)

const canvasProps = ref<TresCanvasProps>({
  alpha: false,
  clearColor: '#82DBC5',
  outputColorSpace: SRGBColorSpace,
  renderMode: 'always',
  // resize: true, // not present? hmm ... documentation says it's there and important for resizable canvas - weird
  // `VSMShadowMap` better shadows, but more performance heavy; `BasicShadowMap` is faster but has less quality
  shadowMapType: VSMShadowMap, // BasicShadowMap | PCFShadowMap | PCFSoftShadowMap | VSMShadowMap
  shadows: true,
  toneMapping: NoToneMapping,
  useLegacyLights: false,
})

// 8: camera
const perspectiveCamera = new PerspectiveCamera()
perspectiveCamera.position.set(-5, 5, -2)
perspectiveCamera.near = 2
perspectiveCamera.far = 10
const perspectiveCameraHelper = new CameraHelper(perspectiveCamera)
const cameraRef = shallowRef()
watch(cameraRef, (value) => {
  if (!value) {
    return
  }
  value.add(perspectiveCameraHelper)
}, {
  immediate: true,
})
setInterval(() => {
  perspectiveCamera.lookAt(0, 0, 0)
}, 1000)

// 9: lights
const lightsRef = shallowRef()
watchEffect(() => {
  if (!lightsRef.value) {
    return
  }
  lightsRef.value.remove(...lightsRef.value.children)

  const ambientLight = new AmbientLight(0xFFFFFF, 0)
  ambientLight.intensity = 0.5
  const directionalLight = new DirectionalLight(0xFFFFFF, 0)
  directionalLight.castShadow = true
  directionalLight.intensity = 1.2
  directionalLight.shadow.camera.near = 5
  directionalLight.shadow.camera.far = +directionalLightRange.value / 10
  directionalLight.shadow.camera.left = -5
  directionalLight.shadow.camera.right = 5
  directionalLight.shadow.camera.top = 5
  directionalLight.shadow.camera.bottom = -5
  // directionalLight.shadow.camera.position.set(0, 3, 7)
  // directionalLight.shadow.camera.lookAt(0, 0, 0)
  directionalLight.position.set(5, 3, 5)
  directionalLight.target.position.set(0, 0, 0)
  // directionalLight.shadow.camera.updateProjectionMatrix()
  const directionalLightHelper = new CameraHelper(directionalLight.shadow.camera)

  lightsRef.value.add(ambientLight)
  lightsRef.value.add(directionalLight)
  lightsRef.value.add(directionalLightHelper)
})
</script>

<template>
  <WindowWrapper max-height>
    <!-- 6: canvas -->
    <div v-if="isStep(6, 1)" class="h-full h-full bg-[#E1F4FF]" />

    <TresCanvas
      v-bind="canvasProps"
      class="absolute inset-0"
      :class="{ 'opacity-0 hidden h-0! w-0!': !isStepHigherEqual(7) }"
      clear-color="#E1F4FF"
    >
      <TresPerspectiveCamera :position="[-13, 11, 8]" />
      <OrbitControls />

      <!-- 7: world -->
      <TresGridHelper v-if="showGrid" />
      <TresAxesHelper v-if="showGrid" />

      <!-- 8: camera -->
      <TresGroup
        v-if="isStepHigherEqual(8) && showCamera"
        ref="cameraRef"
      />

      <!-- 9: lights -->
      <TresGroup
        v-if="isStepHigherEqual(9) && showLights"
        ref="lightsRef"
      />

      <!-- 10: meshed -->
      <TresMesh
        v-if="isStepHigherEqual(10) && showPlane"
        :position="[0, -0.01, 0]"
        receive-shadow
        :rotation="[-Math.PI / 2, 0, 0]"
      >
        <TresPlaneGeometry :args="[10, 10, 10]" />
        <TresMeshToonMaterial color="#fefefe" />
      </TresMesh>
      <TresMesh
        v-if="isStepHigherEqual(10) && showCube"
        cast-shadow
        :position="[0, 1, 0]"
      >
        <TresBoxGeometry
          :args="[2, 2, 2]"
        />
        <TresMeshNormalMaterial />
      </TresMesh>
    </TresCanvas>

    <div class="absolute bottom-0 left-0 w-full z-2 flex flex-row justify-start pl-1">
      <div
        v-if="isStepHigherEqual(7)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showGrid }"
        @click="showGrid = !showGrid"
      >
        Grid
      </div>
      <div
        v-if="isStepHigherEqual(8)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showCamera }"
        @click="showCamera = !showCamera"
      >
        Camera
      </div>
      <div
        v-if="isStepHigherEqual(9)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showLights }"
        @click="showLights = !showLights"
      >
        Lights
      </div>
      <input
        v-if="isStepHigherEqual(9)"
        v-model="directionalLightRange"
        class="cursor-pointer w-20"
        max="150"
        min="60"
        type="range"
      >
      <div
        v-if="isStepHigherEqual(10)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showPlane }"
        @click="showPlane = !showPlane"
      >
        Plane
      </div>
      <div
        v-if="isStepHigherEqual(10)"
        class="cursor-pointer text-xs text-gray-500 p-1 select-none"
        :class="{ 'text-decoration-line': !showCube }"
        @click="showCube = !showCube"
      >
        Cube
      </div>
    </div>
  </WindowWrapper>
</template>

<style scoped>
.text-decoration-line {
  text-decoration-line: line-through;
}
</style>
