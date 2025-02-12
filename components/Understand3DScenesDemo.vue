<script setup lang="ts">
import { OrbitControls } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'

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
</script>

<template>
  <WindowWrapper max-height>
    <div v-if="isStep(6, 1)" class="h-full h-full bg-[#E1F4FF]" />
  </WindowWrapper>
</template>

<style scoped>
</style>
