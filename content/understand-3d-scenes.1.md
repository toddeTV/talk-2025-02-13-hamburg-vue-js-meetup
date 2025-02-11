---
layout: two-cols
---

# Understand 3D Scenes in Vue

::left::

<Understand3DScenesHeadlines :step="1" />

<div class="flex flex-col gap-3 mt-3">
    <div
        class="flex flex-row justify-center gap-7"
        v-click="4"
    >
        <div
            class="flex flex-col p-1"
            v-mark="{ at: 4, color: '#36ab7a', type: 'box' }"
        >
            <div class="!w-22 shrink-0 flex flex-col">
                <span class="text-primary text-xl">TresJS</span>
                <span class="text-sm color-gray-500">for Vue/ Nuxt</span>
            </div>
        </div>
        <div
            class="flex flex-col p-1"
            v-mark="{ at: 4, color: '#36ab7a', type: 'box' }"
        >
            <div class="!w-22 shrink-0 flex flex-col">
                <span class="text-primary text-xl">Threlte</span>
                <span class="text-sm color-gray-500">for svelte</span>
            </div>
        </div>
        <div
            class="flex flex-col p-1"
            v-mark="{ at: 4, color: '#36ab7a', type: 'box' }"
        >
            <div class="!w-22 shrink-0 flex flex-col">
                <span class="text-primary text-xl">drei</span>
                <span class="text-sm color-gray-500">for react</span>
            </div>
        </div>
    </div>

  <div
    class="flex flex-row justify-between items-center p-1 mx-8"
    v-mark="{ at: 3, color: '#26ab7a', type: 'box' }"
    v-click="3"
  >
    <div class="!w-22 pr-3 shrink-0 flex flex-col">
      <span class="text-primary text-xl">ThreeJS</span>
      <img src="/assets/logos/ThreeJS.png" />
    </div>
    <div class="w-full text-sm">
      <ul>
        <li>High-level framework on WebGL</li>
        <li>Simplifies 3D objects, cameras, lighting</li>
        <li>Easier tools for animations, scenes, etc.</li>
      </ul>
    </div>
  </div>

  <div
    class="flex flex-row justify-between items-center p-1 mx-4"
    v-mark="{ at: 2, color: '#26ab7a', type: 'box' }"
    v-click="2"
  >
    <div class="!w-20 pr-3 shrink-0 flex flex-col">
      <span class="text-primary text-xl">WebGL</span>
      <img src="/assets/logos/WebGL.png" />
    </div>
    <div class="w-full text-sm">
      <ul>
        <li>Low-level API in the browser</li>
        <li>Direct GPU interaction</li>
        <li>complex (manual handling shaders, buffers, ...)</li>
      </ul>
    </div>
  </div>

  <div
    class="flex flex-row justify-center items-center p-3"
    v-mark="{ at: 1, color: '#26ab7a', type: 'box' }"
    v-click="1"
  >
    <span class="text-primary text-xl">GPU</span>
  </div>

</div>

::right::

<WindowWrapper max-height>
</WindowWrapper>
