import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: config => {
      config!.output!.publicPath = '/storybook/'
      return config
    },
  },
})
