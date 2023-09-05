import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'white';

  const currentTheme = ref<string>(theme);

  const toggleColorTheme = () => {
    if (currentTheme.value === 'white') {
      currentTheme.value = 'dark';
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('white');
    } else {
      currentTheme.value = 'white';
      document.documentElement.classList.add('white');
      document.documentElement.classList.remove('dark');
    }
  };

  const checkTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  onMounted(() => {
    checkTheme();
  });

  return {
    currentTheme,
    toggleColorTheme,
  };
});
