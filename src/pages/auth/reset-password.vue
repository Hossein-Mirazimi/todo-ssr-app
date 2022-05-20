<template>
  <section class="bg md:mt-40 flex flex-col items-center justify-center w-full max-w-sm mt-24">
    <h1 class="mb-6 text-5xl font-bold leading-snug text-center">
      Forgotten Password?
    </h1>
    <p class="text-gray-text mb-14 text-center">
      Don't worry, simply enter your email in the field below, then we'll send
      you a link to reset your password shortly.
    </p>
    <form class="flex flex-col w-full">
      <label for="email" class="hidden mt-4 mb-2 ml-2">Email</label>
      <input
        id="email"
        required=""
        name="email"
        type="email"
        placeholder="Email"
        class="default-focus text-opacity-80 hover:text-opacity-100 border-3 border-secondary-card hover:border-primary-default rounded-xl bg-primary-background flex items-center justify-center w-full px-5 py-4 font-medium text-white transition-all duration-200 ease-in-out"
      >
      <button
        type="submit"
        class="rounded-xl bg-gradient-to-tr shadow-button from-gradient1-button via-gradient2-button hover:-translate-y-1 to-gradient3-button px-8 py-4 mt-4 font-semibold transition-all duration-200 ease-in-out transform"
      >
        Send
      </button>
    </form>
    <router-link class="text-gray-text flex items-center justify-center mt-8" to="/auth/signin">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 20 20"
        class="mr-2"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        >
        </path>
      </svg>
      Back to Sign in
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    useHead({
      title: 'Reset Password - Tsks',
      meta: [
        {
          name: 'description',
          content: 'Tsks is a task manager made simply to manage and keep track of everyday tasks with a modern and simple interface.',
        },
      ],
    })
  },
})
</script>
