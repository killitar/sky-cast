<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useWeatherStore } from '../store/weatherStore';
import { getHours } from '../utils/dateUtils';

const { forecastHourly, weatherData } = storeToRefs(useWeatherStore());
</script>
<template>
  <div>
    <h2 class="mb-4 text-xl text-zinc-800 duration-500 dark:text-white">
      Сегодня в
    </h2>
    <div class="slider-container">
      <ul
        class="container-snap flex touch-auto gap-3 overflow-auto scroll-smooth duration-500"
      >
        <li
          v-for="(weather, index) in forecastHourly"
          :key="index"
          class="flex flex-col items-center rounded-xl bg-stone-100 px-6 py-4 duration-500 dark:bg-zinc-800"
        >
          <p class="text-center text-zinc-700 duration-500 dark:text-stone-100">
            {{ getHours(weather?.dt, weatherData?.timezone) }}:00
          </p>
          <img
            :alt="weather?.weather[0].description"
            :src="`./weatherIcon/${weather?.weather[0].icon}.svg`"
            class="h-28 w-28"
          />
          <p class="text-center text-zinc-700 duration-500 dark:text-yellow-50">
            {{ parseInt(weather?.main.temp) }}&deg;
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container-snap::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container-snap {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
