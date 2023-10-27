import { ref, onMounted, onUnmounted } from 'vue';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref<string>('light');

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const handleColorTheme = () => {
    const newTheme: string = currentTheme.value === 'light' ? 'dark' : 'light';
    document.documentElement.classList.remove(currentTheme.value);
    document.documentElement.classList.add(newTheme);
    currentTheme.value = newTheme;
  };

  const detectSystemTheme = () => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (prefersDarkMode !== (currentTheme.value === 'dark')) {
      handleColorTheme();
    }
  };

  const listener = () => detectSystemTheme();

  onMounted(() => {
    detectSystemTheme();

    mediaQuery.addEventListener('change', listener);
  });
  onUnmounted(() => {
    mediaQuery.removeEventListener('change', listener);
  });

  return {
    currentTheme,
    handleColorTheme,
  };
});
