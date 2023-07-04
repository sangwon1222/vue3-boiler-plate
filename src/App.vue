<script lang="ts" setup scoped>
import tGnb from '@template/layout/tGnb.vue'
import {useLayoutStore} from '@store/index'
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
const store = useLayoutStore()

onMounted(()=>{
  store.gnb = true
})
</script>

<template>
  <div class="min-w-full min-h-screen">
    <t-gnb v-if="store.gnb"/>
    <RouterView />
  </div>
</template>
