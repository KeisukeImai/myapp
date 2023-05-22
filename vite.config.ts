import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // Exclude storybook stories and test modules
    exclude: /\.(stories|test)\.(t|j)sx?$/,
    // emotion設定
    jsxImportSource: '@emotion/react',
  })],
  build: {
    outDir: "./build",
    target: [
      'es2015', // ES6
      'edge18', // release 2018
      'firefox53', // release 2017
      'chrome51', // release 2016
      'safari11' // release 2017
    ],
  },
  server: {
    open: true,
    // 必要に応じてプロキシを設定
    proxy: {
      '/app': 'http://localhost:9080',
    }
  }
})
