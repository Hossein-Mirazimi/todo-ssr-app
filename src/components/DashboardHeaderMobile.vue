<template>
  <header
    id="mobile_menu"
    class="fixed bottom-0 z-20 flex items-start justify-center w-full text-sm font-medium text-white bg-secondary-background md:hidden"
  >
    <div class="flex flex-row items-center justify-between w-full">
      <nav class="flex items-center justify-around w-full">
        <a
          class="default-focus py-4 opacity-70 hover:opacity-100 flex items-center opacity-100"
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
          </svg>
          Dashboard
        </a>
        <a class="default-focus py-4 opacity-70 hover:opacity-100 flex items-center " href="/">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="mr-2 text-2xl "
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z"
            >
            </path>
          </svg>
          Account
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
#mobile_menu {
    padding-bottom: calc(5px + env(safe-area-inset-bottom));
}
</style>
