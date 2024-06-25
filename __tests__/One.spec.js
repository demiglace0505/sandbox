import { test, expect, vi } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import { createRouter, createMemoryHistory } from 'vue-router';
import One from '@/components/One.Vue';
import { useMyStore } from '@/stores/MyStore.js';
import {routes} from '@/router'

test('setFlags is called when transferring from a to b', async () => {
  const pinia = createPinia();
  setActivePinia(pinia);
  const store = useMyStore();
  store.setFlags = vi.fn();

  const router = createRouter({
    history: createMemoryHistory(),
    routes
  });

  // initial screen: a
  router.push('/test/a');
  await router.isReady();

  mount(One, {
    global: {
      plugins: [router],
    },
  });

  // simulate a router update from a to b
  router.push('/test/b');
  await router.isReady();
  await flushPromises();

  expect(store.setFlags).toHaveBeenCalledOnce();
});
