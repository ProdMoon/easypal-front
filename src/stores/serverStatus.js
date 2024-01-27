import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useServerStatusStore = defineStore('server-status', () => {
  const status = ref('offline');
  const isOnline = computed(() => status.value === 'online');
  const isOffline = computed(() => status.value === 'offline');
  function setOnline() {
    status.value = 'online';
  }
  function setOffline() {
    status.value = 'offline';
  }
  function setError() {
    status.value = 'error';
  }
  return { status, isOnline, isOffline, setOnline, setOffline, setError};
});
