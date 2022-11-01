<script setup lang="ts">
/* 
type Props = {
  title: string;
  subtitle?: string;
};

defineProps<Props>();
*/
</script>
<template>
  <div id="app">
    <div class="relative slide">
      <div
        class="
          carousel-indicators
          absolute
          bottom-0
          flex
          bg-yellow-100
          h-24
          w-full
          justify-center
          items-center
        "
      >
        <ol class="z-50 flex w-4/12 justify-center">
          <li
            v-for="(img, i) in images"
            :key="i"
            class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2"
          ></li>
        </ol>
      </div>
      <div class="carousel-inner relative overflow-hidden w-full">
        <div
          v-for="(img, i) in images"
          :id="`slide-${i}`"
          :key="i"
          :class="`${active === i ? 'active' : 'left-full'}`"
          class="
            carousel-item
            inset-0
            relative
            w-full
            transform
            transition-all
            duration-500
            ease-in-out
          "
        >
          <img class="block w-full" :src="img" alt="First slide" />
        </div>
      </div>
    </div>
  </div>
</template>
