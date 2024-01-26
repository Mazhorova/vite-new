import { resolve } from 'path'

export default {
    base: "/vite-new/",
    build: {
      rollupOptions: {
        input: {
          // @ts-ignore
          main: resolve(__dirname, 'index.html'),
          // @ts-ignore
          a1: resolve(__dirname, 'a1.html'),
          // @ts-ignore
          a2: resolve(__dirname, 'a2.html'),
        }
      }
    }
  }