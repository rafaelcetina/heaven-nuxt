<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
  buttons?: {
    text: string;
    action?: string;
    href?: string;
    props?: Record<string, any>;
  }[];
  theme?: string;
}>();
</script>

<template>
  <section
    id="hero"
    :class="`bg-local bg-skin-fill text-white grid place-items-center sm:h-[45rem] h-[40rem] sm:mt-0 bg-cover bg-center hero-${theme}`"
    :style="`background-image: url(${image})`"
  >
    <div
      class="container mx-auto px-4 xl:px-0 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-20 py-6 sm:py-20"
    >
      <div class="w-full sm:w-6/12">
        <h1
          class="text-4xl sm:text-6xl font-bold xl:leading-[4rem] text-skin-base text-hero-full"
        >
          {{ title }}
        </h1>
        <p class="text-xl mt-4 mb-14 text-skin-muted" v-html="description" />
        <div v-if="buttons" class="space-x-4">
          <Button
            v-for="button in buttons"
            :key="button.text"
            :href="button.href"
            v-bind="button.props"
          >
            {{ button.text }}
          </Button>
        </div>
      </div>
      <!--<div class="w-full sm:w-6/12 flex justify-end p-6 sm:p-0">
        <img
          loading="lazy"
          :src="image"
          alt=""
          class="w-auto max-w-full rounded-lg"
        />
      </div>-->
    </div>
  </section>
</template>

<style scoped>
.hero-default {
  --color-text-base: #191919;
  --color-text-muted: #363636;
  --color-fill: #ffffff;
}
.text-hero-full {
  color: white;
  text-shadow: 2px 2px 5px #191919;
}
</style>
