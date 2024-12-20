import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          runtimeCompiler: true
        }
      }
    })
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  base: '/Gestor-de-Tareas-con-VueJs/',
  build: {
    outDir: 'docs', // Genera archivos en carpeta docs
  },
})