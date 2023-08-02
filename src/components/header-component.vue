<script setup lang="ts"></script>
<template>
  <div class="flex items-center justify-between">
    <div class="search">
      <div
        class="flex bg-softblack w-40 h-12 rounded-lg shadow-lg items-center justify-center px-2 md:w-80"
      >
        <svg
          width="24px"
          height="24px"
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
              fill="#ffffff"
              fill-rule="evenodd"
              d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
            ></path>
          </g>
        </svg>
        <input
          class="w-full font-medium ml-1 text-lg text-white h-6 border-t-transparent bg-transparent outline outline-none"
          name="search"
          autocomplete="off"
          placeholder="Поиск"
        />
        <div class="spin-search hidden">
          <div
            class="float-right text-white text inline-block h-2 w-2 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            ></span>
          </div>
        </div>
      </div>

      <div
        class="search-result bg-darkerblack rounded-b-3xl shadow-lg absolute w-40 z-10 transition duration-150 ease-in-out hidden md:w-80"
      >
        <hr class="" />
      </div>
    </div>

    <div
      class="current-location flex justify-center items-center bg-purple-600 w-12 h-12 rounded-lg cursor-pointer shadow-lg hover:bg-purple-700"
    >
      <button href="" class="current-location-btn">
        <svg
          width="32px"
          height="32px"
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
              d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z"
              stroke="#323232"
              stroke-width="2"
            ></path>
            <path
              d="M19 12H21"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 12H5"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 19L12 21"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 3L12 5"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              stroke="#323232"
              stroke-width="2"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>
