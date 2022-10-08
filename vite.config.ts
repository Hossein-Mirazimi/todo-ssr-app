import { UserConfig } from 'vite'
import VuePlugin from '@vitejs/plugin-vue'
import ViteIcons from 'vite-plugin-icons'
import { VitePWA } from 'vite-plugin-pwa'
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
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Tsk, just tasks',
        short_name: 'Tsk',
        theme_color: '#FDB713',
        icons: [
          {
            src: '/favicon_x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/favicon_x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          /* {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/maskable-icon-x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/maskable-icon-x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          }, */
        ],
      },
    }),
    WindiCSS(),
  ],
  build: {
    minify: false,
  },
}

export default config
