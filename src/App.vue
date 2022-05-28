<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="layoutComponent(route.fullPath)">
        <component :is="Component" />
      </component>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { reactive, computed, defineComponent } from 'vue'
import { useHead } from '@vueuse/head'
import AuthLayout from './layouts/auth.vue'
import DashboardLayout from './layouts/dashboard.vue'

export default defineComponent({
  setup() {
    const siteData = reactive({
      title: 'Tsk, just tasks',
      description: 'Tsks is a task manager made simply to manage and keep track of everyday tasks with a modern and simple interface.',
    })
    useHead({
      title: siteData.title,
      meta: [
        {
          name: 'description',
          content: computed(() => siteData.description),
        },
      ],
    })

    return {
      layoutComponent(path: string) {
        if (path.includes('/auth/')) return AuthLayout
        else if (path.includes('/app')) return DashboardLayout
        return 'div'
      },
    }
  },
})

</script>
