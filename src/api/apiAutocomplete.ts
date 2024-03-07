import { fetch } from '@tauri-apps/api/http';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

export const fetchAutoCompleteData = async (input: string) => {
  try {
    const res = await fetch(
      `${baseUrl}/geo/1.0/direct?appid=${apiKey}&q=${input}&limit=3`
    );
    return res.data;
  } catch (error) {
    console.error('Ошибка при получении данных автозаполнения:', error);
  }
};
