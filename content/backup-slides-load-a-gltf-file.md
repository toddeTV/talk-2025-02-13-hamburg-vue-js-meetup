---
layout: two-cols
---

# load a glTF file

::left::

## ThreeJS (native)

````md magic-move {lines: true}
```js {*}
const loader = new GLTFLoader();

// loader.setDRACOLoader(dracoLoader);   <- optional

loader.load(
  '//localhost:3000/models/Island.gltf',
  function ( gltf ) { // on success
    // do something ...
    scene.add( gltf.scene );
    gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Group
    gltf.scenes; // Array<THREE.Group>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object
  },
  function ( xhr ) { // while loading
        const per = xhr.loaded / xhr.total * 100;
    console.log( per + '% loaded' );
  },
  function ( error ) { // on error
    console.log( 'An error happened' );
  }
);
```
````

::right::

## TresJS (Vue/ Nuxt)

````md magic-move {lines: true}
```vue {2-4,8-10}
<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'
const path = '//localhost:3000/models/Island.gltf'
const { scene: modelScene } = await useGLTF(path)
</script>
<template>
  <TresCanvas>
    <Suspense>
      <primitive :object="modelScene" />
    </Suspense>
  </TresCanvas>
</template>
```
````

<div class="text-center baseColor -mt-2 -mb-2 text-xl">OR</div>

````md magic-move {lines: true}
```vue {2,6-8}
<script setup lang="ts">
import { GLTFModel } from '@tresjs/cientos'
</script>
<template>
  <TresCanvas clear-color="E1F4FF">
    <Suspense>
      <GLTFModel path="keyboard.gltf" />
    </Suspense>
  </TresCanvas>
</template>
```
````
