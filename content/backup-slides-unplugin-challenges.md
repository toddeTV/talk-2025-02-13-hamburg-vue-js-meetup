---
layout: basic
---

<h1>
    <simple-icons:unjs class="baseColor mr-2" />UnJs/Unplugin - our challenges with integrating
</h1>

<v-clicks :depth="2">

- <ant-design-frown-filled class="text-red-400" /> Documentation not always correct, e.g. the doc for the `loadInclude` hook states:

  > Custom predicate function to filter modules to be loaded. When omitted, all modules will be included (might have potential perf impact on Webpack).

  But this is not true for the implementation for the farm bundler (if omitted it assumes the file to be skipped)

- <ant-design-frown-filled class="text-red-400" /> Esbuild does only allow watching files during specific phases of the build process

  - This limits the watch benefits for esbuild as it might not detect added/ updated models

- <ant-design-frown-filled class="text-red-400" /> `emitFiles` does not provide a way to retrieve the generated filename.

  - Reason is that for some bundler implementations this simply writes a file into the out dir (see esbuild)
  - Solution is to simply generate fixed filenames that bundlers take without modifications

- <ant-design-frown-filled class="text-red-400" /> No unified way to detect dev/serve VS build
  - Solution: custom checks for the bundlers which have this distinction and where it is possible to detect this

</v-clicks>
