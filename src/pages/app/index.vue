<template>
  <main class="flex flex-col items-center pb-40 text-white">
    <section class="mt-14 w-full max-w-screen-md px-5">
      <h1 class="text-3xl font-bold">
        Collections
      </h1>
      <div class="grid items-start grid-cols-1 gap-4 mt-10 md:grid-cols-2">
        <router-link
          class="no-underline group default-focus rounded-3xl"
          to="/app/collection"
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
