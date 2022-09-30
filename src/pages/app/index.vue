<template>
  <main class="flex flex-col items-center pb-40 text-white">
    <section class="mt-14 w-full max-w-screen-md px-5">
      <h1 class="text-3xl font-bold">
        Collections
      </h1>
      <div class="grid items-start grid-cols-1 gap-4 mt-10 md:grid-cols-2">
        <CollectionCard />
        <!-- Add Collection Button -->
        <button
          class="flex flex-row items-center justify-center px-6 py-3 font-medium text-white transition-colors duration-200 ease-in-out bg-transparent default-focus hover:bg-hover-card rounded-2xl border-hover-card border-3 focus:outline-none"
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="mr-1 text-lg"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Add Collection
        </button>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router'

import { useAuth } from '../../store/auth'

useHead({ title: 'Dashboard - Tsks.' })

const router = useRouter()
const auth = useAuth()

onMounted(() => {
  !auth.getUser && router.push('/auth/signin')
})
</script>
