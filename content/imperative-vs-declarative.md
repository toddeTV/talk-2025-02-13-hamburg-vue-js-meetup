---
layout: two-cols
---

# Different Approaches

::left::

## imperative

````md magic-move {lines: true}
```vue {*}
<script setup lang="ts">
import { useTresContext } from '@tresjs/core'
import { AmbientLight, DirectionalLight } from 'three'

const { scene } = useTresContext()

const ambLight = new AmbientLight(0xFFFFFF, 0.6)
scene.value.add(ambLight)

const dirLight = new DirectionalLight(0xFFFFFF, 1.2)
dirLight.position.set(0, 2, 4)
dirLight.castShadow = true
dirLight.value.shadow.mapSize.width = 1024
dirLight.value.shadow.mapSize.height = 1024
scene.value.add(dirLight)
</script>

<!-- <template>
</template> -->
```
````

::right::

## declarative

````md magic-move {lines: true, at: 1}
```vue {*}
<script setup lang="ts">
import type { DirectionalLight } from 'three'
import { watch, shallowRef } from 'vue'

const dirLight = shallowRef<DirectionalLight>()

watch(dirLight, (newValue) => {
  if (!newValue)
    return
  dirLight.value.shadow.mapSize.width = 1024
  dirLight.value.shadow.mapSize.height = 1024
})
</script>

<template>
  <TresAmbientLight color="#FFFFFF" :intensity="0.6" />
  <TresDirectionalLight
    ref="dirLight"
    cast-shadow
    color="#FFFFFF"
    :intensity="1.2"
    :position="[0, 2, 4]"
  />
</template>
```
````
