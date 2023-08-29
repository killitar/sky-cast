<script setup lang="ts"></script>
<template>
  <div>
    <h2 class="mb-4 text-xl text-zinc-800 duration-500 dark:text-white">
      Сегодня в
    </h2>
    <div class="slider-container">
      <ul
        class="container-snap flex touch-auto gap-3 overflow-auto scroll-smooth duration-500"
      >
        <li
          class="flex flex-col items-center rounded-xl bg-stone-100 px-6 py-4 shadow-md duration-500 dark:bg-zinc-800"
        >
          <p
            class="mb-6 text-center text-zinc-700 duration-500 dark:text-stone-100"
          >
            1:00
          </p>
          <i
            alt="cloudy"
            class="owf owf-800 owf-4x h-20 w-20 text-center text-zinc-700 duration-500 dark:text-yellow-100"
          ></i>
          <p class="text-center text-zinc-700 duration-500 dark:text-yellow-50">
            20&deg;
          </p>
        </li>
        <li
          class="flex flex-col items-center rounded-xl bg-stone-100 px-6 py-4 shadow-md duration-500 dark:bg-zinc-800"
        >
          <p
            class="mb-6 text-center text-zinc-700 duration-500 dark:text-stone-100"
          >
            1:00
          </p>
          <i
            alt="cloudy"
            class="owf owf-800 owf-4x h-20 w-20 text-center text-zinc-700 duration-500 dark:text-yellow-100"
          ></i>
          <p class="text-center text-zinc-700 duration-500 dark:text-yellow-50">
            20&deg;
          </p>
        </li>
        <li
          class="flex flex-col items-center rounded-xl bg-stone-100 px-6 py-4 shadow-md duration-500 dark:bg-zinc-800"
        >
          <p
            class="mb-6 text-center text-zinc-700 duration-500 dark:text-stone-100"
          >
            1:00
          </p>
          <i
            alt="cloudy"
            class="owf owf-800 owf-4x h-20 w-20 text-center text-zinc-700 duration-500 dark:text-yellow-100"
          ></i>
          <p class="text-center text-zinc-700 duration-500 dark:text-yellow-50">
            20&deg;
          </p>
        </li>
        <li
          class="flex flex-col items-center rounded-xl bg-stone-100 px-6 py-4 shadow-md duration-500 dark:bg-zinc-800"
        >
          <p
            class="mb-6 text-center text-zinc-700 duration-500 dark:text-stone-100"
          >
            1:00
          </p>
          <i
            alt="cloudy"
            class="owf owf-800 owf-4x h-20 w-20 text-center text-zinc-700 duration-500 dark:text-yellow-100"
          ></i>
          <p class="text-center text-zinc-700 duration-500 dark:text-yellow-50">
            20&deg;
          </p>
        </li>
        <li
          class="flex flex-col items-center rounded-xl bg-stone-100 px-6 py-4 shadow-md duration-500 dark:bg-zinc-800"
        >
          <p
            class="mb-6 text-center text-zinc-700 duration-500 dark:text-stone-100"
          >
            1:00
          </p>
          <i
            alt="cloudy"
            class="owf owf-800 owf-4x h-20 w-20 text-center text-zinc-700 duration-500 dark:text-yellow-100"
          ></i>
          <p class="text-center text-zinc-700 duration-500 dark:text-yellow-50">
            20&deg;
          </p>
        </li>
        <li
          class="flex flex-col items-center rounded-xl bg-stone-100 px-6 py-4 shadow-md duration-500 dark:bg-zinc-800"
        >
          <p
            class="mb-6 text-center text-zinc-700 duration-500 dark:text-stone-100"
          >
            1:00
          </p>
          <i
            alt="cloudy"
            class="owf owf-800 owf-4x h-20 w-20 text-center text-zinc-700 duration-500 dark:text-yellow-100"
          ></i>
          <p class="text-center text-zinc-700 duration-500 dark:text-yellow-50">
            20&deg;
          </p>
        </li>
        <li
          class="flex flex-col items-center rounded-xl bg-stone-100 px-6 py-4 shadow-md duration-500 dark:bg-zinc-800"
        >
          <p
            class="mb-6 text-center text-zinc-700 duration-500 dark:text-stone-100"
          >
            1:00
          </p>
          <i
            alt="cloudy"
            class="owf owf-800 owf-4x h-20 w-20 text-center text-zinc-700 duration-500 dark:text-yellow-100"
          ></i>
          <p class="text-center text-zinc-700 duration-500 dark:text-yellow-50">
            20&deg;
          </p>
        </li>
        <li
          class="flex flex-col items-center rounded-xl bg-stone-100 px-6 py-4 shadow-md duration-500 dark:bg-zinc-800"
        >
          <p
            class="mb-6 text-center text-zinc-700 duration-500 dark:text-stone-100"
          >
            1:00
          </p>
          <i
            alt="cloudy"
            class="owf owf-800 owf-4x h-20 w-20 text-center text-zinc-700 duration-500 dark:text-yellow-100"
          ></i>
          <p class="text-center text-zinc-700 duration-500 dark:text-yellow-50">
            20&deg;
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container-snap::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container-snap {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
