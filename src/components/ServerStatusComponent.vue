<script setup>
import { onMounted, computed } from 'vue';
import executeCommand from '@/components/ExecuteCommand';
import RefreshIcon from '@/components/icons/RefreshIcon.vue';
import { useServerStatusStore } from '@/stores/serverStatus';

const serverStatus = useServerStatusStore();
const status = computed(() => {
  if (serverStatus.isOnline) {
    return 'Running';
  } else if (serverStatus.isOffline) {
    return 'Stopped';
  } else {
    return 'Error';
  }
});

const checkStatus = async () => {
  const command = 'ps -ef | grep Pal';
  try {
    const responseText = await executeCommand(command);
    if (responseText.includes('PalServer-Linux-Test')) {
      serverStatus.setOnline();
      return;
    }
    serverStatus.setOffline();
  } catch (error) {
    console.error(error);
    serverStatus.setError();
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
