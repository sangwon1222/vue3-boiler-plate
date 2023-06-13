<script setup lang="ts" scoped>
defineProps({
  customStyle: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="flex flex-wrap justify-center w-full" :class="customStyle">
    <slot />
  </div>
</template>
