import { defineStore } from 'pinia';

export const useMyStore = defineStore('MyStore', () => {
  const setFlags = () => {
    console.log('setting flags...');
  };

  return {
    setFlags,
  };
});