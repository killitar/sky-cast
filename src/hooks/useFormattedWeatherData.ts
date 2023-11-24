import { computed } from 'vue';
import { useWeatherStore } from '../store/weatherStore';
import { getFormattedDate, getTime } from '../utils/dateUtils';
import { roundNumber } from '../utils/numberUtils';

export function useFormattedWeatherData() {
  const weatherStore = useWeatherStore();

  const roundedTemperature = computed(() => {
    const temperature = weatherStore.weatherData?.main.temp;
    if (typeof temperature === 'number') {
      return Math.round(temperature);
    }
    return 0;
  });

  const formattedDate = computed(() =>
    getFormattedDate(
      weatherStore.weatherData?.dt,
      weatherStore.weatherData?.timezone
    )
  );

  const roundedPM = computed(() =>
    roundNumber(weatherStore.airPollutionData?.components.pm2_5)
  );

  const roundedSO2 = computed(() =>
    roundNumber(weatherStore.airPollutionData?.components.so2)
  );

  const roundedNO = computed(() =>
    roundNumber(weatherStore.airPollutionData?.components.no)
  );

  const roundedO3 = computed(() =>
    roundNumber(weatherStore.airPollutionData?.components.o3)
  );

  const formattedSunrise = computed(() =>
    getTime(
      weatherStore.weatherData?.sys.sunrise,
      weatherStore.weatherData?.timezone
    )
  );

  const formattedSunset = computed(() =>
    getTime(
      weatherStore.weatherData?.sys.sunset,
      weatherStore.weatherData?.timezone
    )
  );

  const roundedVisibility = computed(() => {
    if (weatherStore.weatherData) {
      return weatherStore.weatherData.visibility / 1000;
    }
    return 0;
  });

  const roundedFellsLike = computed(() => {
    const feelsLike = weatherStore.weatherData?.main.feels_like;
    if (typeof feelsLike === 'number') {
      return Math.round(feelsLike);
    }
    return 0;
  });

  return {
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
  };
}
