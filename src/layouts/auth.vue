<template>
  <main class="sign-in-up-balls flex items-start justify-center min-h-screen px-6 pb-16">
    <slot />
  </main>
</template>

<style scoped>
.sign-in-up-balls {
  background-image: url('../assets/img/signin_balls.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: auto;
}
</style>
