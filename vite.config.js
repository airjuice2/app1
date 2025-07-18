import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src'
      },
      {
        find: '@styles',
        replacement: '/src/styles'
      },
      {
        find: '@commonTemplate',
        replacement: '/src/components/common'
      },
      {
        find: '@components',
        replacement: '/src/components'
      },
    ]
  }
})
