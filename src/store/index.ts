import { createPinia, defineStore } from 'pinia';
import { reactive } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  let { gnb } = reactive({ gnb: true as Boolean });

  const setGndMode = (v: boolean) => (gnb = v);

  return { gnb, setGndMode };
});

export default createPinia();
