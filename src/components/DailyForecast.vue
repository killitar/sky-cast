<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useWeatherStore } from '../store/weatherStore';
import { getWeekDay, getDate, getMonth } from '../utils/dateUtils';

const { forecastDaily } = storeToRefs(useWeatherStore());
</script>
<template>
  <div class="mb-8 lg:mb-4">
    <h2 class="mb-4 text-xl text-zinc-800 duration-500 dark:text-white">
      Прогноз на 5 дней
    </h2>
    <div
      class="rounded-2xl bg-stone-100 p-6 shadow-md duration-500 dark:bg-zinc-800"
    >
      <ul
        v-for="(weather, index) in forecastDaily"
        :key="index"
        class="my-5 flex items-center justify-between first:my-0 last:my-0"
      >
        <div class="flex items-center">
          <img
            alt="{descption}"
            :src="`./weatherIcon/${weather?.weather[0].icon}.svg`"
            class="h-8 w-8"
          />
          <span>
            <p
              class="ml-2 w-10 text-xl text-zinc-700 duration-500 dark:text-stone-50"
            >
              {{ parseInt(weather?.main.temp_max) }} &deg;
            </p>
          </span>
        </div>
        <p class="text-zinc-500">
          {{ getDate(weather?.dt_txt) }}, {{ getMonth(weather?.dt_txt) }}
        </p>
        <p class="text-zinc-500">{{ getWeekDay(weather?.dt_txt) }}</p>
      </ul>
    </div>
  </div>
</template>
