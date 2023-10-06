import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  build: {
    target: 'modules',
    lib: {
      entry: './src/main.ts',
      name: 'my-custom',
      fileName: 'components' // output js file name
    }
  }
})
