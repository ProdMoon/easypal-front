<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="flex items-center justify-center bg-slate-100">
    <RouterLink class="flex items-end text-2xl font-bold" to="/">
      <img class="h-10 w-10 mr-3" src="/cattiva.png" alt="Cute Cattiva" />
      EasyPal
    </RouterLink>
  </header>

  <RouterView />

  <footer class="mt-40 mb-4 text-center text-sm text-gray-500">
    <a class="underline" href="https://github.com/ProdMoon" target="_blank">ProdMoon</a>
    © 2024 All rights reserved.
  </footer>
</template>
