<script setup lang="ts">
import { ref } from 'vue';
import { useThemeStore } from '../store/themeStore';
import { useWeatherStore } from '../store/weatherStore';
import LocationDataResponse from '../interfaces/Location';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const weatherStore = useWeatherStore();

const { autocompleteData, isLoading } = storeToRefs(weatherStore);
const {
  fetchWeather,
  fetchAirPollution,
  fetchForecast,
  debouncedAutoComplete,
} = weatherStore;

const { currentTheme } = storeToRefs(themeStore);
const { handleColorTheme } = themeStore;

const searchQuery = ref<string>();

const handleSearchInput = () => {
  debouncedAutoComplete(searchQuery.value as string);
};

const handleItemClick = (location: LocationDataResponse) => {
  searchQuery.value = '';
  autocompleteData.value = undefined;

  fetchWeather(location.lat, location.lon);
  fetchAirPollution(location.lat, location.lon);
  fetchForecast(location.lat, location.lon);
};
</script>
<template>
  <div class="mb-7 flex items-center justify-between">
    <div>
      <div
        class="w-50 flex h-12 items-center rounded-lg bg-stone-100 px-2 shadow-lg duration-500 dark:bg-zinc-800 md:w-80"
      >
        <svg
          class="h-6 fill-zinc-800 duration-500 dark:fill-stone-50 md:w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
            ></path>
          </g>
        </svg>
        <input
          class="ml-1 h-6 w-full border-t-transparent bg-transparent text-lg font-medium text-zinc-800 outline-none outline duration-500 dark:text-yellow-50"
          @input="handleSearchInput"
          v-model="searchQuery"
          name="search"
          autocomplete="off"
          placeholder="Поиск"
        />
        <div :class="isLoading ? 'block' : 'hidden'">
          <div
            class="float-right inline-block h-2 w-2 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-zinc-800 motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-yellow-50"
            role="status"
          >
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >
            </span>
          </div>
        </div>
      </div>

      <div
        class="absolute top-20 z-10 w-1/2 rounded-2xl bg-stone-100 shadow-lg duration-500 dark:bg-zinc-800 md:w-80"
        v-if="autocompleteData"
      >
        <ul class="grid flex-col items-center p-2">
          <a
            v-for="(location, index) in autocompleteData"
            @click="handleItemClick(location)"
            :key="index"
            class="my-2 flex cursor-pointer items-center rounded-lg p-1 duration-150 hover:bg-stone-200/50 dark:hover:bg-zinc-700/50"
          >
            <div class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                class="fill-zinc-800 duration-500 dark:fill-stone-50"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"
                />
              </svg>
            </div>
            <div>
              <p class="text-lg text-zinc-800 duration-500 dark:text-stone-100">
                {{ location?.local_names?.ru ?? location?.name }}
              </p>
              <p class="text-zinc-500">
                {{ location?.state ?? '' }} {{ location?.country }}
              </p>
            </div>
          </a>
        </ul>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <button
        @click="handleColorTheme"
        :class="[
          currentTheme === 'light' ? 'bg-zinc-600' : 'bg-orange-300',
          currentTheme === 'light'
            ? 'hover:bg-zinc-700'
            : 'hover:bg-orange-400',
          'shadow-3xl',
          'flex',
          'h-12',
          'w-12',
          'cursor-pointer',
          'items-center',
          'justify-center',
          'rounded-lg',
          'duration-300',
        ]"
        :aria-label="
          currentTheme === 'light'
            ? 'Switch to Dark Theme'
            : 'Switch to Light Theme'
        "
      >
        <svg
          :class="[
            'h-8',
            'h-8',
            'w-8',
            'fill-yellow-50',
            'duration-500',
            currentTheme === 'dark' && 'dark:fill-zinc-900',
          ]"
          :viewBox="currentTheme === 'dark' ? '-5.5 0 32 32' : '0 0 24 24'"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              v-if="currentTheme === 'light'"
              d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              v-if="currentTheme === 'dark'"
              d="M11.875 6v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.813 0.375-1.219 1.156-1.219s1.156 0.406 1.156 1.219zM14.219 9.25l1.438-2.031c0.469-0.625 1.063-0.75 1.656-0.313s0.656 1 0.188 1.688l-1.438 2c-0.469 0.688-1.031 0.75-1.656 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM5.781 7.25l1.469 2c0.469 0.688 0.406 1.219-0.219 1.656-0.594 0.469-1.156 0.375-1.625-0.313l-1.469-2c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.469 1.156-0.375 1.625 0.313zM10.719 11.125c2.688 0 4.875 2.188 4.875 4.875 0 2.656-2.188 4.813-4.875 4.813s-4.875-2.156-4.875-4.813c0-2.688 2.188-4.875 4.875-4.875zM1.594 11.813l2.375 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.75 0.969-1.563 0.719l-2.313-0.75c-0.781-0.25-1.063-0.75-0.844-1.5 0.25-0.719 0.75-0.938 1.531-0.688zM17.5 12.563l2.344-0.75c0.813-0.25 1.313-0.031 1.531 0.688 0.25 0.75-0.031 1.25-0.844 1.469l-2.313 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.031-1.219 0.813-1.469zM10.719 18.688c1.5 0 2.719-1.219 2.719-2.688 0-1.5-1.219-2.719-2.719-2.719s-2.688 1.219-2.688 2.719c0 1.469 1.188 2.688 2.688 2.688zM0.906 17.969l2.344-0.75c0.781-0.25 1.313-0.063 1.531 0.688 0.25 0.75-0.031 1.219-0.813 1.469l-2.375 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.063-1.219 0.844-1.469zM18.219 17.219l2.344 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.719 0.969-1.531 0.719l-2.344-0.781c-0.813-0.25-1.031-0.719-0.813-1.469 0.25-0.75 0.75-0.938 1.531-0.688zM3.938 23.344l1.469-1.969c0.469-0.688 1.031-0.781 1.625-0.313 0.625 0.438 0.688 0.969 0.219 1.656l-1.469 1.969c-0.469 0.688-1.031 0.813-1.656 0.375-0.594-0.438-0.656-1.031-0.188-1.719zM16.063 21.375l1.438 1.969c0.469 0.688 0.406 1.281-0.188 1.719s-1.188 0.281-1.656-0.344l-1.438-2c-0.469-0.688-0.406-1.219 0.188-1.656 0.625-0.438 1.188-0.375 1.656 0.313zM11.875 23.469v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.844 0.375-1.25 1.156-1.25s1.156 0.406 1.156 1.25z"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>
