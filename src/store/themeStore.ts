import { ref, onMounted, onUnmounted, Ref } from 'vue';
import { defineStore, Store } from 'pinia';

interface ThemeStore extends Store {
  currentTheme: Ref<string>;
  toggleColorTheme: () => void;
}

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref<string>('light');

  const toggleColorTheme = () => {
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
      toggleColorTheme();
    }
  };

  onMounted(() => {
    detectSystemTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => detectSystemTheme();

    mediaQuery.addEventListener('change', listener);

    onUnmounted(() => {
      mediaQuery.removeEventListener('change', listener);
    });
  });

  return {
    currentTheme,
    toggleColorTheme,
  } as ThemeStore;
});
