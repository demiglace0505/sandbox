<script setup>
import { onBeforeRouteUpdate } from 'vue-router';
import { useMyStore } from '@/stores/MyStore.js';
import { useRouter } from 'vue-router';

const store = useMyStore();
const router = useRouter()

const init = async () => {
  console.log('init call');
  store.setFlags();
};

onBeforeRouteUpdate((to, from, next) => {
  console.log('!!!!calling onBeforeRouteUpdate');
    next();
    init();
});

const push = () => {
  router.push('/test/b')
}
</script>

<template>
  <h1>hello world</h1>
  <button @click="push">to B</button>
</template>
