<script setup lang="ts">
import Header from '../components/HeaderComponent.vue';
import CurrentWeather from '../components/CurrentWeather.vue';
import DailyForecast from '../components/DailyForecast.vue';
import WeatherInfo from '../components/WeatherInfo.vue';
import HourlyForecast from '../components/HourlyForecast.vue';
import { storeToRefs } from 'pinia';
import { useWeatherStore } from '../store/weatherStore.ts';

import { useWeatherData } from '../hooks/useWeatherData';

const { weatherData } = storeToRefs(useWeatherStore());

const {
  roundedTemperature,
  formattedDate,
  roundedPM,
  roundedSO2,
  roundedNO,
  roundedO3,
  formattedSunrise,
  formattedSunset,
  roundedVisibility,
  roundedFellsLike,
} = useWeatherData();
</script>

<template>
  <div class="p-6">
    <Header />
    <div
      v-if="weatherData"
      class="flex flex-col lg:flex-row lg:justify-between"
    >
      <div class="w-full duration-500 lg:mr-4 lg:w-1/4">
        <template v-if="weatherData !== undefined">
          <CurrentWeather
            :name="weatherData?.name"
            :country="weatherData?.sys.country"
            :temperature="roundedTemperature"
            :condition_text="weatherData?.weather[0].description"
            :icon="weatherData?.weather[0].icon"
            :date="formattedDate"
          />
        </template>
        <DailyForecast />
      </div>
      <div class="w-full duration-500 lg:w-3/4">
        <WeatherInfo
          :pm="roundedPM"
          :so2="roundedSO2"
          :no="roundedNO"
          :o3="roundedO3"
          :visibility="roundedVisibility"
          :feels="roundedFellsLike"
          :humidity="weatherData?.main.humidity"
          :pressure="weatherData?.main.pressure"
          :sunrise="formattedSunrise"
          :sunset="formattedSunset"
        />
        <HourlyForecast />
      </div>
    </div>
    <div v-else>
      <div class="mt-32 flex place-items-center items-center justify-center">
        <div
          class="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-zinc-800 motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-stone-100"
          role="status"
        >
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
