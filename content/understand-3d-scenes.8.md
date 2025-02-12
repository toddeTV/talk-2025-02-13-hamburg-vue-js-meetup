---
layout: two-cols
---

<Understand3DScenesHeadline />

::left::

<div class="w-full h-23"></div>

````md magic-move {lines: true}
```vue {2,9-11}
<script setup lang="ts">
import { GLTFModel } from '@tresjs/cientos'
// [...]
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <!-- [...] -->
    <Suspense>
      <GLTFModel path="keyboard.gltf" />
    </Suspense>
    <!-- [...] -->
  </TresCanvas>
</template>
```
````

::right::
