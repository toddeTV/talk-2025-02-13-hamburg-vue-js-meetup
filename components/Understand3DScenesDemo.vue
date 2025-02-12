<script setup lang="ts">
import { OrbitControls } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
import { CameraHelper, PerspectiveCamera } from 'three'
import { shallowRef, watch } from 'vue'

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

// 8: camera
const perspectiveCamera = new PerspectiveCamera()
perspectiveCamera.position.set(-5, 5, -2)
perspectiveCamera.near = 2
perspectiveCamera.far = 10
const cameraHelper = new CameraHelper(perspectiveCamera)
const cameraRef = shallowRef()
watch(cameraRef, (value) => {
  if (!value) {
    return
  }
  value.add(cameraHelper)
}, {
  immediate: true,
})

setInterval(() => {
  perspectiveCamera.lookAt(0, 0, 0)
}, 1000)
</script>

<template>
  <WindowWrapper max-height>
    <!-- 6: canvas -->
    <div v-if="isStep(6, 1)" class="h-full h-full bg-[#E1F4FF]" />

    <TresCanvas
      :class="{ 'opacity-0 hidden h-0! w-0!': !isStep([7, 8]) }"
      clear-color="#E1F4FF"
    >
      <TresPerspectiveCamera :position="[-13, 11, 8]" />
      <OrbitControls />

      <!-- 7: world -->
      <TresGridHelper />
      <TresAxesHelper />

      <!-- 8: camera -->
      <TresGroup
        v-if="isStep(8)"
        ref="cameraRef"
      />
    </TresCanvas>
  </WindowWrapper>
</template>

<style scoped>
</style>
