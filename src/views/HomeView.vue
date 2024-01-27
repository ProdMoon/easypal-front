<script setup>
import ServerStatusComponent from '@/components/ServerStatusComponent.vue';
import SendCommandComponent from '@/components/SendCommandComponent.vue';
</script>

<template>
  <main class="flex flex-col items-center">
    <div id="dashboard" class="max-w-xl w-full">
      <ServerStatusComponent class="mt-5" />
      <SendCommandComponent class="mt-5" />
    </div>
  </main>
</template>
