<template>
  <section
    class="
      bg
      md:mt-40
      flex flex-col
      items-center
      justify-center
      w-full
      max-w-sm
      mt-24
    "
  >
    <h1 class="mb-20 text-5xl font-bold">
      Sign in.
    </h1>
    <button
      class="
        default-focus
        py-4
        text-white text-opacity-80
        hover:text-opacity-100
        flex
        justify-center
        items-center
        border-3
        w-full
        border-secondary-card
        hover:bg-secondary-card
        rounded-xl
        transition-all
        duration-200
        ease-in-out
        font-medium
      "
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 1024 1024"
        class="mr-2 text-2xl"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"
        >
        </path>
      </svg>
      Continue with Google
    </button>
    <button
      class="
        default-focus
        mt-5
        py-4
        text-white text-opacity-80
        hover:text-opacity-100
        flex
        justify-center
        items-center
        border-3
        w-full
        border-secondary-card
        hover:bg-secondary-card
        rounded-xl
        transition-all
        duration-200
        ease-in-out
        font-medium
      "
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        class="mr-2 text-2xl"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
        >
        </path>
      </svg>
      Continue with Facebook
    </button>
    <p class="opacity-60 my-4 font-medium">
      or
    </p>
    <form class="flex flex-col w-full" @submit.prevent="signIn">
      <label for="email" class="hidden mt-4 mb-2 ml-2">Email</label>
      <input
        id="email"
        v-model="email"
        required=""
        name="email"
        type="email"
        placeholder="Email"
        class="
          default-focus
          text-opacity-80
          hover:text-opacity-100
          border-3 border-secondary-card
          hover:border-primary-default
          rounded-xl
          bg-primary-background
          flex
          items-center
          justify-center
          w-full
          px-5
          py-4
          font-medium
          text-white
          transition-all
          duration-200
          ease-in-out
        "
      />
      <label for="password" class="hidden mt-4 mb-2 ml-2">
        Password
      </label>
      <input
        id="password"
        v-model="password"
        required=""
        name="password"
        type="password"
        placeholder="Password"
        class="
          default-focus
          text-opacity-80
          hover:text-opacity-100
          border-3 border-secondary-card
          hover:border-primary-default
          rounded-xl
          bg-primary-background
          flex
          items-center
          justify-center
          w-full
          px-5
          py-4
          mt-5
          font-medium
          text-white
          transition-all
          duration-200
          ease-in-out
        "
      />
      <button
        type="submit"
        class="
          rounded-xl
          bg-gradient-to-tr
          shadow-button
          from-gradient1-button
          via-gradient2-button
          hover:-translate-y-1
          to-gradient3-button
          px-8
          py-4
          mt-6
          font-semibold
          transition-all
          duration-200
          ease-in-out
          transform
        "
      >
        Sign in
      </button>
    </form>
    <p class="text-gray-text mt-8">
      Don't have an account?
      <router-link class="text-white" to="/auth/signup">
        Sign up
      </router-link>
    </p>
    <router-link class="mt-4 text-white" to="/auth/reset-password">
      Forgot password?
    </router-link>
    <router-link
      class="text-gray-text flex items-center justify-center mt-8"
      to="/"
    >
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
      Back to Home
    </router-link>
  </section>
</template>

<script lang="ts" setup>
import { ref, unref } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router'
import { useAuth } from '../../store/auth'
import { isEmptyObject } from '../../utils'

useHead({
  title: 'Sign in - Tsks',
  meta: [
    {
      name: 'description',
      content: 'Tsks is a task manager made simply to manage and keep track of everyday tasks with a modern and simple interface.',
    },
  ],
})

const router = useRouter()
const auth = useAuth()

const email = ref('admin@test.com')
const password = ref('admin')

const signIn = async() => {
  await auth.signIn(unref(email), unref(password)).then(async(user) => {
    !isEmptyObject(user) && await router.push('/app')
  }).catch((err) => {
    // eslint-disable-next-line no-alert
    alert(err?.message || 'Email or Password is not valid')
  })
}

</script>
