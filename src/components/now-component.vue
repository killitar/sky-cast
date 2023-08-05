<script setup lang="ts"></script>
<template>
  <div
    class="bg-stone-100 dark:bg-zinc-800 rounded-2xl shadow-md p-6 w-full lg:w-3/4 duration-500"
  >
    <h2 class="text-zinc-800 dark:text-stone-100 text-xl duration-500">
      Сегодня
    </h2>
    <div class="highlight-list grid grid-rows-1 grid-cols-2 gap-3">
      <div
        class="hightlight-card one mt-5 bg-stone-200 dark:bg-zinc-900 shadow-lg p-5 rounded-xl duration-500"
      >
        <h3 class="card-title text-zinc-700 text-xl mb-10">Качество воздуха</h3>
        <div class="wrapper flex">
          <svg
            class="h-12 w-12 mr-7 fill-zinc-800 dark:fill-yellow-50 duration-500"
            viewBox="0 -1 28 28"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>wind</title>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill-rule="evenodd"
                sketch:type="MSPage"
              >
                <g
                  id="Icon-Set"
                  sketch:type="MSLayerGroup"
                  transform="translate(-466.000000, -830.000000)"
                >
                  <path
                    d="M488,844 L467,844 C466.447,844 466,844.447 466,845 C466,845.553 466.447,846 467,846 L486.833,846 C489.687,846 492,847.791 492,850 C492,852.209 490.291,854 486,854 L486,856 L488,856 C491.313,856 494,853.313 494,850 C494,846.687 491.313,844 488,844 L488,844 Z M480.002,848 L480,848 L472,848 C471.447,848 471,848.448 471,849 C471,849.553 471.447,850 472,850 L480,850 C481.104,850 482,850.896 482,852 C482,853.104 481.104,854 480,854 L480,856 C482.209,856 484,854.209 484,852 C484,849.792 482.21,848.002 480.002,848 L480.002,848 Z M475,838 L487,838 C487.553,838 488,837.553 488,837 C488,836.448 487.553,836 487,836 L475,836 C474.447,836 474,836.448 474,837 C474,837.553 474.447,838 475,838 L475,838 Z M470,842 L488,842 C491.313,842 494,839.313 494,836 C494,832.687 491.313,830 488,830 L488,832 C490.822,832.531 492,833.791 492,836 C492,838.209 489.687,840 486.833,840 L470,840 C469.447,840 469,840.448 469,841 C469,841.553 469.447,842 470,842 L470,842 Z"
                    id="wind"
                    sketch:type="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <ul class="card-list flex">
            <li class="card-item mr-6">
              <p class="text-zinc-700 font-normal text-xs duration-500">
                PM <sub>2.5</sub>
              </p>
              <p
                class="text-zinc-800 dark:text-yellow-50 font-normal text-3xl duration-500"
              >
                2
              </p>
            </li>
            <li class="card-item mr-6">
              <p class="text-zinc-700 font-normal text-xs duration-500">
                SO <sub>2</sub>
              </p>
              <p
                class="text-zinc-800 dark:text-yellow-50 font-normal text-3xl duration-500"
              >
                2
              </p>
            </li>
            <li class="card-item mr-6">
              <p class="text-zinc-700 font-normal text-xs">NO <sub>2</sub></p>
              <p
                class="text-zinc-800 dark:text-yellow-50 font-normal text-3xl duration-500"
              >
                2
              </p>
            </li>
            <li class="card-item">
              <p class="text-zinc-700 font-normal text-xs">O <sub>3</sub></p>
              <p
                class="text-zinc-800 dark:text-yellow-50 font-normal text-3xl duration-500"
              >
                2
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="hightlight-card mt-5 bg-stone-200 dark:bg-zinc-900 shadow-lg p-5 rounded-xl duration-500"
      >
        <h3 class="card-title text-zinc-700 text-xl mb-10">Восход, Закат</h3>
        <div class="cark-list flex justify-between">
          <div class="card-item flex items-center mb-8 md:mb-0 md:mr-12">
            <svg
              class="h-12 w-12 mr-3 stroke-zinc-800 dark:stroke-yellow-50 duration-500"
              viewBox="0 0 24 24"
              fill="none"
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
                  d="M12 10V3M12 3L9 6M12 3L15 6M6 12L5 11M18 12L19 11M3 18H21M5 21H19M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <div>
              <p class="text-zinc-700 font-normal text-xs">Восход</p>
              <p
                class="text-zinc-800 dark:text-yellow-50 font-normal text-3xl duration-500"
              >
                2
              </p>
            </div>
          </div>

          <div class="card-item flex items-center">
            <svg
              class="h-12 w-12 mr-3 stroke-zinc-800 dark:stroke-yellow-50 duration-500"
              viewBox="0 0 24 24"
              fill="none"
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
                  d="M6 12L5 11M18 12L19 11M3 18H21M5 21H19M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18M12 3V10M12 10L15 7M12 10L9 7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <div>
              <p class="text-zinc-700 font-normal text-xs">Закат</p>
              <p
                class="text-zinc-800 dark:text-yellow-50 font-normal text-3xl duration-500"
              >
                2
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div
          class="hightlight-card w-1/2 mr-2 mt-5 bg-stone-200 dark:bg-zinc-900 shadow-lg p-5 rounded-xl h-40 duration-500"
        >
          <h3 class="card-title text-zinc-700 text-xl mb-10">Видимость</h3>

          <div class="card-list">
            <div class="card-item flex justify-between items-center">
              <svg
                class="h-12 w-12 mr-3 fill-zinc-800 dark:fill-yellow-50 duration-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                  ></path>
                </g>
              </svg>
              <p
                class="text-zinc-800 dark:text-yellow-50 font-normal text-3xl duration-500"
              >
                2 <sub>km</sub>
              </p>
            </div>
          </div>
        </div>
        <div
          class="hightlight-card w-1/2 mt-5 bg-stone-200 dark:bg-zinc-900 shadow-lg p-5 rounded-xl h-40 duration-500"
        >
          <h3 class="card-title text-zinc-700 text-xl mb-10">Ощущается как</h3>

          <div class="card-list">
            <div class="card-item flex justify-between items-center">
              <svg
                class="h-12 w-12 mr-3 stroke-zinc-800 dark:stroke-yellow-50 duration-500"
                viewBox="0 0 24 24"
                fill="none"
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
                    d="M15 4H20M15 8H20M17 12H20M8 15.9998C7.44772 15.9998 7 16.4475 7 16.9998C7 17.5521 7.44772 17.9998 8 17.9998C8.55228 17.9998 9 17.5521 9 16.9998C9 16.4475 8.55228 15.9998 8 15.9998ZM8 15.9998V9M8 16.9998L8.00707 17.0069M12 16.9998C12 19.209 10.2091 20.9998 8 20.9998C5.79086 20.9998 4 19.209 4 16.9998C4 15.9854 4.37764 15.0591 5 14.354L5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V14.354C11.6224 15.0591 12 15.9854 12 16.9998Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <p
                class="text-zinc-800 dark:text-yellow-50 font-normal text-3xl duration-500"
              >
                2&deg;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div
          class="hightlight-card mr-2 mt-5 w-1/2 bg-stone-200 dark:bg-zinc-900 shadow-lg p-5 rounded-xl h-40 duration-500"
        >
          <h3 class="card-title text-zinc-700 text-xl mb-10">Влажность</h3>

          <div class="card-list">
            <div class="card-item flex justify-between items-center">
              <svg
                class="h-12 w-12 mr-2 stroke-zinc-800 dark:stroke-yellow-50 duration-500"
                viewBox="0 0 24 24"
                fill="none"
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
                    d="M20 14.5714C20 18.7526 16.3364 22 12 22C7.66359 22 4 18.7526 4 14.5714C4 12 5.30472 9.45232 6.71637 7.42349C8.1468 5.36767 9.79177 3.69743 10.6777 2.85537M20 14.5714L10.6777 2.85537M20 14.5714C20 12 18.6953 9.45232 17.2836 7.42349C15.8532 5.36767 14.2082 3.69743 13.3223 2.85537C12.5778 2.14778 11.4222 2.14778 10.6777 2.85537M20 14.5714L10.6777 2.85537"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M12 18C11.4747 18 10.9546 17.8965 10.4693 17.6955C9.98396 17.4945 9.54301 17.1999 9.17157 16.8284C8.80014 16.457 8.5055 16.016 8.30448 15.5307C8.10346 15.0454 8 14.5253 8 14"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </g>
              </svg>
              <p
                class="text-zinc-800 dark:text-yellow-50 font-normal text-3xl duration-500"
              >
                2 <sup>%</sup>
              </p>
            </div>
          </div>
        </div>
        <div
          class="hightlight-card w-1/2 mt-5 bg-stone-200 dark:bg-zinc-900 shadow-lg p-5 rounded-xl h-40 duration-500"
        >
          <h3 class="card-title text-zinc-700 text-xl mb-10">Давление</h3>

          <div class="card-list">
            <div class="card-item flex justify-between items-center">
              <svg
                class="h-12 w-12 mr-2 stroke-zinc-800 dark:stroke-yellow-50 duration-500"
                viewBox="0 0 24 24"
                fill="none"
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
                    d="M21 18C21 18 19.8096 17.5305 19 17.3021C13.8797 15.8574 10.1203 20.1426 5 18.6979C4.19041 18.4695 3 18 3 18M21 12C21 12 19.8096 11.5305 19 11.3021C13.8797 9.85739 10.1203 14.1426 5 12.6979C4.19041 12.4695 3 12 3 12M21 6C21 6 19.8096 5.53048 19 5.30206C13.8797 3.85739 10.1203 8.14261 5 6.69794C4.19041 6.46952 3 6 3 6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <p
                class="text-zinc-800 dark:text-yellow-50 font-normal text-3xl duration-500"
              >
                2 <sup>hPa</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
