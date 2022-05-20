<template>
  <main class="bg-hero-background">
    <AppHeader />
    <article class="hero-image flex flex-col w-full h-screen">
      <section class="h-4/6 md:h-3/6 lg:h-3/6 relative flex flex-col items-center justify-center">
        <h1 class="text-5xl font-bold leading-snug">
          Tsks, just tasks<span class="bg-gradient-to-r from-gradient1-button via-gradient2-button to-gradient3-button bg-clip-text text-transparent">.</span>
        </h1>
        <p class="text-gray-text mt-7 font-medium leading-relaxed">
          Keep track of the daily tasks in life and<br>get that satisfaction upon completion.
        </p>
        <div class="flex justify-center mt-12 font-semibold">
          <router-link class="rounded-xl bg-gradient-to-tr shadow-button from-gradient1-button via-gradient2-button hover:-translate-y-1 to-gradient3-button px-8 py-4 mx-3 transition-all duration-200 ease-in-out transform" to="/auth/signup">
            Get Started
          </router-link>
          <a class="bg-gray-button shadow-button rounded-xl hover:bg-opacity-90 hover:-translate-y-1 px-8 py-4 mx-3 transition-all duration-200 ease-in-out transform">
            Learn More
          </a>
        </div>
      </section>
    </article>
  </main>
</template>

<style lang="scss">
/* header {
  .sign-in-btn {
    @apply default-focus p-4 font-medium border-transparent hover: border-gradient2-button transition-all duration-200 ease-in-out bg-opacity-50 border-b-2 flex items-center;
  }
  .sign-up {
    @apply default-focus ml-5 py-3 px-6 border-3 border-gray-button rounded-xl font-medium border-transparent hover: border-gradient2-button transition-all duration-200 ease-in-out bg-opacity-50 flex items-center;
  }
  .feature {
    @apply default-focus ml-10 p-4 font-medium border-transparent hover: border-gradient2-button transition-all duration-200 ease-in-out bg-opacity-50 border-b-2 flex items-center;
  }
} */

.hero-image {
    background-image: url('../assets/img/hero-app-preview_tablet.png');
    background-repeat: no-repeat;
    background-position: bottom left -25px;
    background-size: 800px;
  @media only screen and (min-width: 1024px) {
    background-image: url('../assets/img/hero-app-preview.png');
    background-position: bottom;
    background-size: auto;
  }
  @media only screen and (min-width: 768px) {
    background-image: url('../assets/img/hero-app-preview_tablet.png');
    background-position: bottom left -25px;
    background-size: 100vw;
  }
}
</style>
