<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { useWeatherStore } from '../store/weatherStore.ts';
import { getFormattedDate, getTime } from '../utils/dateUtils';
import { roundNumber } from '../utils/numberUtils';

import Header from '../components/HeaderComponent.vue';
import CurrentWeather from '../components/CurrentWeather.vue';
import DailyForecast from '../components/DailyForecast.vue';
import WeatherInfo from '../components/WeatherInfo.vue';
import HourlyForecast from '../components/HourlyForecast.vue';

const { weatherData, airPollutionData } = storeToRefs(useWeatherStore());

const roundedTemperature = computed(() => {
  const temperature = weatherData.value?.main.temp;
  if (typeof temperature === 'number') {
    return Math.round(temperature);
  }
  return 0;
});

const formattedDate = computed(() =>
  getFormattedDate(weatherData.value?.dt, weatherData.value?.timezone)
);

const roundedPM = computed(() =>
  roundNumber(airPollutionData.value?.components.pm2_5)
);

const roundedSO2 = computed(() =>
  roundNumber(airPollutionData.value?.components.so2)
);

const roundedNO = computed(() =>
  roundNumber(airPollutionData.value?.components.no)
);

const roundedO3 = computed(() =>
  roundNumber(airPollutionData.value?.components.o3)
);

const formattedSunrise = computed(() =>
  getTime(weatherData.value?.sys.sunrise, weatherData.value?.timezone)
);

const formattedSunset = computed(() =>
  getTime(weatherData.value?.sys.sunset, weatherData.value?.timezone)
);

const roundedVisibility = computed(() => {
  if (weatherData.value) {
    return weatherData.value.visibility / 1000;
  }
  return 0;
});

const roundedFellsLike = computed(() => {
  const feelsLike = weatherData.value?.main.feels_like;
  if (typeof feelsLike === 'number') {
    return Math.round(feelsLike);
  }
  return 0;
});
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
      weatherData.value.
      <div class="w-full duration-500 lg:w-3/4">
        <WeatherInfo
          :pm="roundedPM"
          :so2="roundedSO2"
          :no2="roundedNO"
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
  </div>
</template>
