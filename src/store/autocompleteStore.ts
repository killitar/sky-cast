import { ref } from 'vue';
import { defineStore } from 'pinia';
import { debounce } from '../utils/debounce';
import { useWeatherStore } from './weatherStore';
import { fetchAutoCompleteData } from '../api/apiAutocomplete';
import LocationDataResponse from '../interfaces/Location';

export const useAutoCompleteStore = defineStore('autocomplete', () => {
  const { fetchWeatherData, fetchAirPollutionData, fetchForecastData } =
    useWeatherStore();

  const autocompleteData = ref<LocationDataResponse>();
  const isLoading = ref<boolean>(false);
  const searchQuery = ref<string>();

  const handleAutoCompleteData = (input: string): void => {
    isLoading.value = true;
    fetchAutoCompleteData(input).then((response: LocationDataResponse) => {
      autocompleteData.value = null;
      autocompleteData.value = response;
    });
    isLoading.value = false;
  };

  const debouncedAutoComplete = debounce(handleAutoCompleteData, 1000);

  const handleItemClick = (lat: number, lon: number): void => {
    searchQuery.value = '';
    autocompleteData.value = null;

    fetchWeatherData(lat, lon);
    fetchAirPollutionData(lat, lon);
    fetchForecastData(lat, lon);
  };

  return {
    debouncedAutoComplete,
    autocompleteData,
    isLoading,
    handleItemClick,
    searchQuery,
  };
});
