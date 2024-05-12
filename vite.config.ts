import { resolve } from 'path'

export default {
    base: "/vite-new/",
    build: {
      rollupOptions: {
        input: {
          
          main: resolve(src, 'index.html'),
          // @ts-ignore
          a1: resolve(src, 'a1.html'),
          // @ts-ignore
          a2: resolve(src, 'a2.html'),
          // @ts-ignore
          a3: resolve(src, 'a3.html'),
          // @ts-ignore
          a4: resolve(src, 'a4.html'),
        }
      }
    }
  }