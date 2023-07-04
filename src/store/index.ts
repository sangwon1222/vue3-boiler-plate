import { defineStore } from 'pinia';

export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => ({
    gnb: true,
  }),
  getters: {
    getGndMode: (state) => state.gnb,
  },
  actions: {
    setGndMode(v: boolean) {
      this.counter = v;
    },
  },
});
