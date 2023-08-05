<script setup lang="ts">
import { onMounted } from "vue";
import HeaderComponent from "./components/header-component.vue";
import TodayComponent from "./components/today-component.vue";
import NowComponent from "./components/now-component.vue";

const checkTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

onMounted(() => {
  checkTheme();
});
</script>

<template>
  <div class="p-6 font-mplus">
    <HeaderComponent />
    <div class="flex flex-col duration-500 lg:flex-row lg:justify-between">
      <TodayComponent />
      <NowComponent />
    </div>
  </div>
</template>

<style scoped></style>
