---
layout: basic
---

# load a glTF file - Problems Solutions

<div class="absolute w-38 left-79 top-14" v-mark="{ at: 0, color: '#ab2657', type: 'underline' }"></div>
<div class="absolute w-38 left-79 top-15" v-mark="{ at: 0, color: '#ab2657', type: 'underline' }"></div>

<div class="text-gray-400">

- <mdi-code class="mr-2"/> loads only at runtime, nothing in dev
- <ant-design-frown-filled class="text-red-400" /> no typings
  - no code completion
  - no safeguarding on build (missing file, missing node, etc.)
- <ant-design-frown-filled class="text-red-400" /> get node by name is depth-first in scene graph, e.g. `modelScene.getObjectByName("rock001");`
- <ant-design-frown-filled class="text-red-400" /> models as public assets (no versioning, etc.)
- <ant-design-frown-filled class="text-red-400" /> all models always are bundled because the bundler does not know what models are used

</div>

<div class="absolute w-full top-24 bg-white" v-click>

- <mdi-code class="mr-2"/> loads at build time and can be triggered in dev

</div>

<div class="absolute w-full top-34 bg-white" v-click>

- <ant-design-smile-filled class="text-green-400" /> typings present
  - code completion
  - safeguarding on build (missing file, missing node, etc.)

</div>

<div class="absolute w-full top-64 bg-white" v-click>

- <ant-design-smile-filled class="text-green-400" /> get node by name on direct path in scene graph, e.g. `IslandScene.island.beach.rock001`

</div>

<div class="absolute w-full top-74 bg-white" v-click>

- <ant-design-smile-filled class="text-green-400" /> models are in src assets (versioning, etc.)

</div>

<div class="absolute w-full top-84 bg-white" v-click>

- <ant-design-smile-filled class="text-green-400" /> only bundle used models

</div>
