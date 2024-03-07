import { fetch } from '@tauri-apps/api/http';

// import WeatherDataResponse from '../interfaces/WeatherData';
// import { AirPollutionDataResponse } from '../interfaces/AirPollutionData';
// import ForecastDataResponse from '../interfaces/ForecastResponse';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

export async function fetchData(
  lat: number,
  lon: number,
  type: 'weather' | 'air_pollution' | 'forecast'
) {
  try {
    const url = `${baseUrl}/data/2.5/${type}?appid=${apiKey}&lat=${lat}&lon=${lon}&lang=ru&units=metric`;
    const res = await fetch(url);

    return res.data;
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  }
}
