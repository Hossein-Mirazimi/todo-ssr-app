import { UserConfig } from 'vite'
import VuePlugin from '@vitejs/plugin-vue'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import Components from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'

const config: UserConfig = {
  plugins: [
    VuePlugin(),
    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      dirs: ['src/components'],
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
      /* types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView'],
      }], */
    }),
    // https://github.com/antfu/vite-plugin-icons
    ViteIcons({
      scale: 1.1,
      defaultStyle: 'vertical-align: middle;',
    }),
    WindiCSS({ transformCSS: true }),
  ],
  build: {
    minify: false,
  },
}

export default config
