---
layout: two-cols
---

# Understand 3D Scenes in Vue

::left::

<Understand3DScenesHeadlines :step="2" />

````md magic-move {lines: true}
```vue {*}
<script setup lang="ts">
</script>

<template>
</template>
```

```vue {2,6-8}
<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <!-- 3d scene here -->
  </TresCanvas>
</template>
```
````

<div v-click="1" class="mt-4">

- Clear-color could be the sky.
- Here "full screen", but can be any container in DOM.

</div>

::right::

<WindowWrapper max-height>
  <div class="h-full h-full bg-[#E1F4FF]" v-click="1"></div>
</WindowWrapper>
