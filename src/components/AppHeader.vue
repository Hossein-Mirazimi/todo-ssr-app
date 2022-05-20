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
          <router-link class="sign-in-btn" to="/auth/signin">
            Sign in
          </router-link>
          <router-link class="sign-up" to="/auth/signup">
            Sign up
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

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
