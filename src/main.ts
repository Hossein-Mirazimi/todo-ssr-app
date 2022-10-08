import 'virtual:windi.css'
import './main.scss'

import { createSSRApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createRouter } from './router'
import App from './App.vue'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)
  const head = createHead()
  const router = createRouter()
  const pinia = createPinia()

  app.use(head)
  app.use(router)
  app.use(pinia)

  return { app, router, head }
}
