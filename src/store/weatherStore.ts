import { ref } from 'vue';
import { defineStore } from 'pinia';
import { fetchData } from '../api/apiWeather';

// import WeatherDataResponse from '../interfaces/WeatherData';
// import { AirPollutionDataResponse } from '../interfaces/AirPollutionData';
// import ForecastDataResponse from '../interfaces/ForecastResponse';

export const useWeatherStore = defineStore('weather', () => {
  const weatherData = ref();
  const airPollutionData = ref();
  const forecastDailyData = ref([]);
  const forecastHourlyData = ref([]);

  const fetchWeatherData = (lat: number, lon: number) => {
    fetchData(lat, lon, 'weather').then((response) => {
      weatherData.value = [];
      weatherData.value = response;
    });
  };

  const fetchAirPollutionData = (lat: number, lon: number) => {
    fetchData(lat, lon, 'air_pollution').then((response) => {
      airPollutionData.value = [];
      response.list.map((item) => {
        airPollutionData.value = item;
      });
    });
  };

  const fetchForecastData = (lat: number, lon: number) => {
    fetchData(lat, lon, 'forecast').then((response) => {
      forecastDailyData.value = [];
      for (let i = 7, len = response.list.length; i < len; i += 8) {
        forecastDailyData.value.push(response.list[i]);
      }

      forecastHourlyData.value = [];
      for (const [index, data] of response.list.entries()) {
        if (index > 7) break;
        forecastHourlyData.value.push(data);
      }
    });
  };

  return {
    fetchWeatherData,
    fetchAirPollutionData,
    fetchForecastData,

    weatherData,
    airPollutionData,
    forecastDailyData,
    forecastHourlyData,
  };
});
