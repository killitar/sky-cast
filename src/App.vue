<script setup lang="ts">
import { onMounted } from 'vue';
import HeaderComponent from './components/header-component.vue';
import TodayComponent from './components/today-component.vue';
import NowComponent from './components/now-component.vue';
import HourlyComponent from './components/hourly-forecast-component.vue';
import DailyComponent from './components/daily-forecast-component.vue';

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
  <div class="p-6 font-mplus">
    <HeaderComponent />
    <div class="flex flex-col lg:flex-row lg:justify-between">
      <div class="w-full duration-500 lg:mr-4 lg:w-1/4">
        <NowComponent />
        <DailyComponent />
      </div>
      <div class="w-full duration-500 lg:w-3/4">
        <TodayComponent />
        <HourlyComponent />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
