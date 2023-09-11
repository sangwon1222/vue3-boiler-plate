import { reactive } from 'vue';

export const useLayoutStore = reactive({
  isLoading: true,
  gnbMode: true,
});

export default useLayoutStore;
