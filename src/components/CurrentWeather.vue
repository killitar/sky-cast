<script setup lang="ts">
const props = defineProps<{
  name?: string;
  country?: string;
  temperature?: number;
  condition_text?: string;

  date?: string;
  icon?: string;
}>();
</script>
<template>
  <div
    class="mb-8 rounded-2xl bg-stone-100 p-6 shadow-md duration-500 dark:bg-zinc-800"
  >
    <h2
      class="mb-4 text-xl font-medium text-zinc-800 duration-500 dark:text-yellow-50"
    >
      Сейчас
    </h2>
    <div class="mb-4 flex items-center justify-start">
      <p
        class="mr-6 text-5xl font-bold text-zinc-700 duration-500 dark:text-stone-50 lg:text-3xl xl:text-4xl"
      >
        {{ temperature }}&deg;<sup>C</sup>
      </p>
      <img
        :src="`./weatherIcon/${props.icon}.svg`"
        :alt="condition_text"
        class="w-32 lg:w-20 xl:w-32"
      />
    </div>
    <p class="mb-4 text-sm text-zinc-800 duration-500 dark:text-yellow-50">
      {{ condition_text }}
    </p>
    <hr class="mb-3 w-full border-zinc-500 duration-500" />
    <ul>
      <li class="flex items-center">
        <span>
          <svg
            class="h-4 w-4 fill-zinc-600 duration-500 dark:fill-yellow-50"
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path
                  d="M11,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C10,53.553,10.447,54,11,54 z M12,49h4v3h-4V49z"
                ></path>
                <path
                  d="M23,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C22,53.553,22.447,54,23,54 z M24,49h4v3h-4V49z"
                ></path>
                <path
                  d="M35,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C34,53.553,34.447,54,35,54 z M36,49h4v3h-4V49z"
                ></path>
                <path
                  d="M11,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C10,42.553,10.447,43,11,43 z M12,38h4v3h-4V38z"
                ></path>
                <path
                  d="M23,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C22,42.553,22.447,43,23,43 z M24,38h4v3h-4V38z"
                ></path>
                <path
                  d="M35,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C34,42.553,34.447,43,35,43 z M36,38h4v3h-4V38z"
                ></path>
                <path
                  d="M47,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C46,42.553,46.447,43,47,43 z M48,38h4v3h-4V38z"
                ></path>
                <path
                  d="M11,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C10,31.553,10.447,32,11,32 z M12,27h4v3h-4V27z"
                ></path>
                <path
                  d="M23,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C22,31.553,22.447,32,23,32 z M24,27h4v3h-4V27z"
                ></path>
                <path
                  d="M35,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C34,31.553,34.447,32,35,32 z M36,27h4v3h-4V27z"
                ></path>
                <path
                  d="M47,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C46,31.553,46.447,32,47,32 z M48,27h4v3h-4V27z"
                ></path>
                <path
                  d="M60,4h-7V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H17V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H4 C1.789,4,0,5.789,0,8v52c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V8C64,5.789,62.211,4,60,4z M49,3c0-0.553,0.447-1,1-1 s1,0.447,1,1v3v4c0,0.553-0.447,1-1,1s-1-0.447-1-1V6V3z M13,3c0-0.553,0.447-1,1-1s1,0.447,1,1v3v4c0,0.553-0.447,1-1,1 s-1-0.447-1-1V6V3z M62,60c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V17h60V60z M62,15H2V8c0-1.104,0.896-2,2-2h7v4 c0,1.657,1.343,3,3,3s3-1.343,3-3V6h30v4c0,1.657,1.343,3,3,3s3-1.343,3-3V6h7c1.104,0,2,0.896,2,2V15z"
                ></path>
              </g>
            </g>
          </svg>
        </span>

        <p class="ml-2 text-sm font-normal text-zinc-500">{{ date }}</p>
      </li>
      <li class="mt-2 flex items-center">
        <span>
          <svg
            class="h-4 w-4 fill-zinc-600 duration-500 dark:fill-yellow-50"
            viewBox="0 0 32 32"
            version="1.1"
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
                d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"
              ></path>
            </g>
          </svg>
        </span>
        <p class="ml-2 text-zinc-500">{{ name }},{{ country }}</p>
      </li>
    </ul>
  </div>
</template>
