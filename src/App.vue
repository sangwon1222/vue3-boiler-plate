<script lang="ts" setup scoped>
import tGnb from '@template/tGnb.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-w-full min-h-screen">
    <t-gnb />
    <RouterView />
  </div>
</template>
