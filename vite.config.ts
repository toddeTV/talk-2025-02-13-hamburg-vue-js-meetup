import { templateCompilerOptions } from '@tresjs/core'
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    // markdown: {
    //   markdownItSetup(md) {
    //   },
    // },
    vue: {
      ...templateCompilerOptions,
    },
  },
})
