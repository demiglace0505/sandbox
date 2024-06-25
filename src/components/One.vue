<script setup>
import { onBeforeRouteUpdate } from 'vue-router';
import { useMyStore } from '@/stores/MyStore.js';
const store = useMyStore();

const init = async () => {
  console.log('init call');
  store.setFlags();
};

onBeforeRouteUpdate((to, from, next) => {
  console.log('!!!!calling onBeforeRouteUpdate');
    next();
    init();
});
</script>

<template></template>
