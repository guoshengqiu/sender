import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import html from 'vite-plugin-html'
import {hostIp} from '../host'
const host = hostIp()
import {defaultServerPort} from '../config'

const SERVER_PORT = process.env.SERVER_PORT || defaultServerPort
console.log(host, SERVER_PORT, 'SERVER_PORT');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), html({minify: true})],
  server: {
    port: 4000,
    host: '0.0.0.0',
    proxy: {
      // 选项写法
      '/api': {
        target: `http://${host}:${SERVER_PORT}`,
        changeOrigin: true
      }
    }
  }
})
