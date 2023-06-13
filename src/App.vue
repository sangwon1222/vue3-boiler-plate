<script lang="ts" setup scoped>
import { RouterView } from 'vue-router';
import tGnb from '@template/tGnb.vue';
</script>

<template>
  <div class="min-w-full min-h-screen">
    <t-gnb />
    <RouterView />
  </div>
</template>
