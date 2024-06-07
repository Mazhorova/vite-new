import { resolve } from 'path'

export default {
    base: "/vite-new/",
    build: {
      rollupOptions: {
        input: {
          
          main: resolve( 'index.html'),
          // @ts-ignore
          a1: resolve('a1.html'),
          // @ts-ignore
          a2: resolve('a2.html'),
          // @ts-ignore
          a3: resolve('a3.html'),
          // @ts-ignore
          a4: resolve('a4.html'),
        }
      }
    }
  }