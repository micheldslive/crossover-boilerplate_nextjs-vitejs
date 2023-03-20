import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin('all'),
    cssInjectedByJsPlugin(),
    tsConfigPaths(),
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: './src/main.tsx',
      output: {
        dir: './.next/static/widget/',
        format: 'commonjs',
        inlineDynamicImports: true,
        entryFileNames: 'viteWidget.js',
        assetFileNames: 'viteWidget.js',
      },
    },
  },
})
