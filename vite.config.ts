import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: `vite-react-ssg` requires extra runtime hooks and exports named functions
// which can cause Vite to fail to start if the plugin's runtime deps are missing
// or if it doesn't export a default. We remove it from the dev plugin list so
// the dev server can run. SSG integration will be invoked during the build step
// (or added back conditionally) once the SSG runtime is validated.

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true
  },
      ssgOptions: {
        script: 'async',
        beastiesOptions: {
            // E.g., change the preload strategy
            preload: 'media',
            // Other options: https://github.com/GoogleChromeLabs/critters#usage
        },
    },

})
