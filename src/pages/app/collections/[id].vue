<template>
  <main class="flex flex-col items-center pb-40 text-white">
    <div class="w-full max-w-screen-md px-5 mt-14">
      <TodoSkeleton />
    </div>
    <div v-if="false" class="w-full max-w-screen-md px-5 mt-14">
      <!-- Header -->
      <div class="flex justify-between mb-12">
        <div class="flex items-center">
          <router-link
            class="p-3 text-2xl transition-colors duration-200 ease-in-out default-focus bg-primary-card hover:bg-hover-card rounded-2xl"
            to="/app"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M328 112L184 256l144 144"
              ></path>
            </svg>
          </router-link>
          <h1 class="ml-4 text-3xl font-bold">tt</h1>
        </div>
        <div class="relative flex text-left">
          <button
            class="z-10 p-2 transition-opacity duration-200 ease-in-out rounded-lg opacity-50 default-focus hover:opacity-100"
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
          <div
            class="origin-top-right absolute right-0 top-10 z-50 mt-2 w-56 rounded-md shadow-lg bg-secondary-background ring-1 ring-black ring-opacity-5 divide-y divide-primary-background"
            :class="false ? 'invisible': 'visible'"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div class="py-1">
              <button
                class="block w-full px-4 py-2 text-sm text-left text-gray-200 default-focus hover:bg-secondary-card"
                role="menuitem"
              >
                <div class="default-focus flex flex-row w-full text-left text-white">
                  Edit Collection
                </div>
              </button>
            </div>
            <div class="py-1">
              <button
                class="block w-full px-4 py-2 text-sm text-left text-gray-200 default-focus hover:bg-secondary-card"
                role="menuitem"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-2 font-medium text-white">
        Tasks - 1
      </p>
      <div>
        <div class="py-2">
          <TodoItem v-for="n in Math.floor(Math.random() * 3)" :key="n" class="mb-2 last:mb-0" />
        </div>
      </div>
      <TodoInput />
      <p class="mt-10 mb-2 font-medium text-white">
        Completed - 1
      </p>
      <div>
        <div class="py-2">
          <TodoItem v-for="n in Math.floor(Math.random() * 3)" :key="n" is-completed class="mb-2 last:mb-0" />
        </div>
      </div>
    </div>
  </main>
</template>
