<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  url?: string
}>(), {
  url: '',
})

const zligDemoBaseUrl = computed<string | undefined>(() => {
  const zligDemoBaseUrl = import.meta.env.VITE_ZLIG_DEMO_BASE_URL
  if (!zligDemoBaseUrl) {
    return undefined
  }
  return zligDemoBaseUrl
})
</script>

<template>
  <iframe
    v-if="zligDemoBaseUrl"
    height="100%"
    :src="`${zligDemoBaseUrl}${props.url}`"
    width="100%"
  />
  <div v-else>
    zlig demo base url is not set. Please set it in .env file.
  </div>
</template>

<style scoped>
</style>
