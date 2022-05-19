<template>
  <div class="text-center">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useHead } from '@vueuse/head'

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
</script>
