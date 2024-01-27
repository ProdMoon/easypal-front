<script setup>
import { ref, onMounted } from 'vue';
import executeCommand from '@/components/ExecuteCommand';
import RefreshIcon from '@/components/icons/RefreshIcon.vue';

const status = ref('');

const checkStatus = async () => {
  const command = 'ps -ef | grep Pal';
  try {
    const responseText = await executeCommand(command);
    if (responseText.includes('PalServer-Linux-Test')) {
      status.value = 'Running';
      return;
    }
    status.value = 'Stopped';
  } catch (error) {
    status.value = error;
  }
};

onMounted(async () => {
  await checkStatus();
});
</script>

<template>
  <div class="bg-blue-100 border-4 border-blue-200 rounded-xl p-4">
    <div class="text-blue-700 flex items-center">
      Current Server Status
      <button @click="checkStatus">
        <RefreshIcon class="h-5 w-5 ml-2" />
      </button>
    </div>
    <div>{{ status }}</div>
  </div>
</template>
