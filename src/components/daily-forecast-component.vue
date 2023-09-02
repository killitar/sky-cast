<script setup lang="ts"></script>
<template>
  <div class="mb-8 lg:mb-4">
    <h2 class="mb-4 text-xl text-zinc-800 duration-500 dark:text-white">
      Прогноз на 5 дней
    </h2>
    <div
      class="rounded-2xl bg-stone-100 p-6 shadow-md duration-500 dark:bg-zinc-800"
    >
      <div class="mb-4">
        <ul v-for="n in 5" class="my-5 flex items-center justify-between">
          <div class="flex items-center">
            <i
              alt="{descption}"
              class="owf owf-800 owf-2x text-zinc-700 duration-500 dark:text-stone-50"
            ></i>
            <span>
              <p
                class="ml-2 text-xl text-zinc-700 duration-500 dark:text-stone-50"
              >
                12 &deg
              </p>
            </span>
          </div>
          <p class="text-zinc-500">12, июнь</p>
          <p class="text-zinc-500">Сб</p>
        </ul>
      </div>
    </div>
  </div>
</template>
