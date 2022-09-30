<template>
  <header class="items-center justify-center hidden text-white shadow-md bg-navigation font-regular md:flex">
    <div class="flex flex-row items-center justify-between w-full px-5">
      <div>
        <nav class="flex items-center">
          <a
            class="default-focus py-4 font-medium border-transparent opacity-70 border-b-2 hover:opacity-100 flex items-center border-white opacity-100"
            href="/app"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="mr-2 text-2xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
            </svg>Dashboard</a>
        </nav>
      </div>
      <div class="relative inline-block text-left">
        <button class="rounded-full default-focus" @click="isShow = !isShow">
          <Avatar :src="getUser.avatar" w="35px" h="35px" />
        </button>
        <div
          class="origin-top-right absolute right-0 z-20 mt-2 w-56 rounded-md shadow-lg bg-secondary-background ring-1 ring-black ring-opacity-5 divide-y divide-primary-background"
          :class="isShow ? 'visible' : 'invisible'"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div class="py-1">
            <p class="block px-4 pt-2 pb-1 text-sm text-gray-200" role="menuitem">
              Signed in as
            </p>
            <p class="inline-flex items-start px-4 pb-2 text-sm font-semibold text-gray-200 just" role="menuitem">
              {{ getUser.name }}
              <span class="px-1 ml-2 font-normal tracking-wide text-purple-100 uppercase rounded-md bg-primary-default border-primary-default border-1 bg-opacity-60 text-xxs">
                {{ getUser.role.toUpperCase() }}
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
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuth } from '../store/auth'

const { getUser } = useAuth()

const isShow = ref(false)
</script>
