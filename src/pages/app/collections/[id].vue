<template>
  <main class="flex flex-col items-center pb-40 text-white">
    <div class="w-full max-w-screen-md px-5 mt-14">
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
          <div class="relative flex items-center justify-start p-3 group rounded-2xl bg-primary-card">
            <button
              class="default-focus border-3 focus:outline-none bg-opacity-0 hover:bg-opacity-40 px-2 py-2 transition-colors duration-100 ease-in-out rounded-lg"
              style="border-color: rgb(255, 255, 255);"
            ></button>
            <p class="pr-8 ml-3 text-white">
              test22
            </p>
            <div class="focus:outline-none absolute right-0 mr-2 rounded-lg">
              <div class="relative flex text-left">
                <button
                  class="default-focus hover:opacity-100 z-10 p-2 transition-opacity duration-200 ease-in-out rounded-lg opacity-50"
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
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </button>
                <div
                  class="origin-top-right absolute right-0 top-5 z-50 mt-2 w-56 rounded-md shadow-lg bg-secondary-background ring-1 ring-black ring-opacity-5 divide-y divide-primary-background invisible"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div class="py-1">
                    <button
                      class="default-focus hover:bg-secondary-card flex w-full px-4 py-2 text-sm text-left text-gray-200"
                      role="menuitem"
                    >
                      <div class="default-focus flex flex-row w-full text-left text-white">
                        Edit
                      </div>
                    </button>
                  </div>
                  <div class="py-1">
                    <button
                      class="default-focus hover:bg-secondary-card block w-full px-4 py-2 text-sm text-left text-gray-200"
                      role="menuitem"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form class="css-0">
        <div role="group" class="chakra-form-control css-zn965q">
          <label
            id="field-6-label"
            for="todo"
            class="chakra-form__label css-vucjec"
          >
            <div
              class="border-primary-card group hover:border-secondary-card rounded-2xl border-3 flex items-center w-full"
              style="padding: 10px;"
            >
              <button
                class="default-focus text-primary-background text-center flex justify-center items-center mr-3 text-base transition-colors duration-100 ease-in-out rounded-lg"
                style="height: 22px; width: 23px; border-color: rgb(51, 50, 35); background-color: rgb(51, 50, 35);"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                </svg>
              </button>
              <input
                id="name"
                class="w-full bg-transparent rounded-md outline-none"
                name="name"
                type="name"
                placeholder="Add task"
                required=""
              >
            </div>
          </label>
        </div>
      </form>
      <p class="mt-10 mb-2 font-medium text-white">
        Completed - 1
      </p>
      <div>
        <div class="py-2">
          <div class="relative flex items-center justify-start p-3 group rounded-2xl bg-primary-card">
            <button
              class="default-focus text-primary-background hover:bg-opacity-50 focus:outline-none flex justify-center items-center transition-colors duration-100 ease-in-out rounded-lg"
              style="height: 22px; width: 22px; border-color: rgb(255, 255, 51); background-color: rgb(255, 255, 51);"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <p class="ml-3 mr-8 text-white line-through">
              test22
            </p>
            <div class="focus:outline-none absolute right-0 mr-2 rounded-lg">
              <div class="relative flex text-left">
                <button
                  class="default-focus hover:opacity-100 z-10 p-2 transition-opacity duration-200 ease-in-out rounded-lg opacity-50"
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
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </button>
                <div
                  class="origin-top-right absolute right-0 top-5 z-50 mt-2 w-56 rounded-md shadow-lg bg-secondary-background ring-1 ring-black ring-opacity-5 divide-y divide-primary-background invisible"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div class="py-1">
                    <button
                      class="default-focus hover:bg-secondary-card block w-full px-4 py-2 text-sm text-left text-gray-200"
                      role="menuitem"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
</style>
