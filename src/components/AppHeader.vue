<template>
  <header class="font-regular md:flex items-center justify-center hidden w-full py-10 text-white">
    <div class="container flex flex-row items-center justify-between w-full px-5">
      <nav class="flex items-center justify-between w-full">
        <div class="flex items-center">
          <router-link class="default-focus text-2xl font-bold" to="/">
            <img src="../assets/img/tsks-logo-w-type.svg" alt="Tsks logo">
          </router-link>
          <router-link class="feature" to="/">
            Features
          </router-link>
        </div>
        <div class="flex items-center">
          <template v-if="!isLoggin">
            <router-link class="sign-in-btn" to="/auth/signin">
              Sign in
            </router-link>
            <router-link class="sign-up" to="/auth/signup">
              Sign up
            </router-link>
          </template>
          <div v-else class="relative inline-block text-left">
            <button class="rounded-full default-focus" @click="isShowed = !isShowed">
              <Avatar bg="#444457" w="35px" h="35px" src="https://i.pravatar.cc/150?img=36" />
            </button>

            <div
              class="origin-top-right absolute right-0 z-20 mt-2 w-56 rounded-md shadow-lg bg-secondary-background ring-1 ring-black ring-opacity-5 divide-y divide-primary-background"
              :class="isShowed ? 'visible' : 'invisible'"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div class="py-1">
                <p
                  class="block px-4 pt-2 pb-1 text-sm text-gray-200"
                  role="menuitem"
                >
                  Signed in as
                </p>
                <p
                  class="inline-flex items-start px-4 pb-2 text-sm font-semibold text-gray-200 just"
                  role="menuitem"
                >
                  Hossein Mirazimi
                  <span class="px-1 ml-2 font-normal tracking-wide text-purple-100 uppercase rounded-md bg-primary-default border-primary-default border-1 bg-opacity-60 text-xxs">
                    Admin
                  </span>
                </p>
              </div>
              <div class="py-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-500 pointer-events-none hover:bg-secondary-card"
                  role="menuitem"
                >
                  Account settings
                </a>
              </div>
              <div class="py-1">
                <button
                  class="block w-full px-4 py-2 text-sm text-left text-gray-200 hover:bg-secondary-card"
                  role="menuitem"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const isShowed = ref(false)

    return { isShowed, isLoggin: false }
  },
})
</script>

<style lang="scss">
header {
  .sign-in-btn {
    @apply default-focus p-4 font-medium border-transparent hover: border-gradient2-button transition-all duration-200 ease-in-out bg-opacity-50 border-b-2 flex items-center;
  }
  .sign-up {
    @apply default-focus ml-5 py-3 px-6 border-3 border-gray-button rounded-xl font-medium border-transparent hover: border-gradient2-button transition-all duration-200 ease-in-out bg-opacity-50 flex items-center;
  }
  .feature {
    @apply default-focus ml-10 p-4 font-medium border-transparent hover: border-gradient2-button transition-all duration-200 ease-in-out bg-opacity-50 border-b-2 flex items-center;
  }
}
</style>
