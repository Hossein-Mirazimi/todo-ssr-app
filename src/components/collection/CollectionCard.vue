<template>
  <router-link
    class="no-underline group default-focus rounded-3xl"
    :to="`/app/collections/${Math.floor(Math.random() * 10)}`"
  >
    <div
      class="flex flex-row items-start p-6 break-all transition-all duration-200 ease-in-out group-hover:bg-hover-card rounded-3xl bg-primary-card"
    >
      <!-- TODO: add custome background color here /n -->
      <div class="rounded-2xl p-4 bg-primary-default">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          font-size="30px"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"
          >
          </path>
        </svg>
      </div>
      <div class="ml-5">
        <h2 class="text-xl font-semibold">test</h2>
        <p class="mt-1 opacity-60">2 tasks</p>
      </div>
    </div>
  </router-link>
</template>
