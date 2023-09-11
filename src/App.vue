<script lang="ts" setup scoped>
import { useLayoutStore } from '@store/index';
import tLoading from '@template/tLoading.vue';
import tGnb from '@template/layout/tGnb.vue';
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';

onMounted(() => {
  setTimeout(() => {
    useLayoutStore.isLoading = false;
  }, 1000);
});
</script>

<template>
  <div class="min-h-screen min-w-full">
    <t-loading />
    <t-gnb v-if="useLayoutStore.gnbMode" />
    <RouterView />
  </div>
</template>
