<script setup>
import { ref } from 'vue';
import executeCommand from '@/components/ExecuteCommand';
import BasicButton from '@/components/BasicButton.vue';
import { useServerStatusStore } from '@/stores/serverStatus';

const outputText = ref('Hello! Welcome to EasyPal!');
const serverStatus = useServerStatusStore();
const isExecuting = ref(false);

const execute = async (command) => {
  isExecuting.value = true;
  try {
    const responseText = await executeCommand(command);
    outputText.value = responseText;
    isExecuting.value = false;
    return true;
  } catch (error) {
    outputText.value = error;
    isExecuting.value = false;
    return false;
  }
};

const grepPal = async () => {
  await execute('ps -ef | grep Pal');
};

const startPalServer = async () => {
  if (serverStatus.isOnline) {
    outputText.value = 'PalServer is already running';
    return;
  }
  const result = await execute('nohup ~/.steam/SteamApps/common/PalServer/PalServer.sh &> /dev/null &');
  if (result) {
    serverStatus.setOnline();
  } else {
    serverStatus.setError();
  }
};

const stopPalServer = async () => {
  const result = await execute('killall PalServer-Linux-Test');
  if (result) {
    serverStatus.setOffline();
  } else {
    serverStatus.setError();
  }
};
</script>

<template>
  <div>
    <div id="buttons" class="space-y-3">
      <BasicButton class="w-full" @click="grepPal" :disabled="isExecuting">Grep Pal</BasicButton>
      <BasicButton class="w-full" @click="startPalServer" :disabled="isExecuting || serverStatus.isOnline">
        Start PalServer
      </BasicButton>
      <BasicButton class="w-full" @click="stopPalServer" :disabled="isExecuting">Stop PalServer</BasicButton>
    </div>
    <div id="output" class="mt-5 bg-blue-100 border-4 border-blue-200 rounded-xl p-4">
      <div class="text-blue-700">Output</div>
      <div class="mt-2 bg-blue-50 border-4 border-blue-200 rounded-xl p-4">
        <pre id="output-pre" class="whitespace-pre-wrap">{{ outputText }}</pre>
      </div>
    </div>
  </div>
</template>
