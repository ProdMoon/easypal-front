<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex items-center justify-center bg-slate-100">
    <RouterLink class="flex items-end text-2xl font-bold" to="/">
      <img class="h-10 w-10 mr-3" src="/cattiva.png" alt="Cute Cattiva" />
      EasyPal
    </RouterLink>
  </header>

  <RouterView />
</template>
