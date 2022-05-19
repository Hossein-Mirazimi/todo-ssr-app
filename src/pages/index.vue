<template>
  <h1 class="text-4xl my-14 text-bold">
    Vite SSR Starter
  </h1>
  <button class="px-3 py-2 text-white bg-gray-500 rounded-md focus:ring" @click="state.count++">
    count is: {{ state.count }}
  </button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({ count: 0 })
</script>
