<script setup lang="ts">
import { onMounted } from 'vue';
import headerComponent from './components/header-component.vue';

const checkTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

onMounted(() => {
  checkTheme();
});
</script>

<template>
  <div class="p-6">
    <headerComponent />
  </div>
</template>

<style scoped></style>
