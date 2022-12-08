<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroFull from "../components/HeroFull/HeroFull.vue";
import type { Post } from "~/types";
// @ts-ignore
// import type { Strapi4Response } from "@nuxtjs/strapi";

definePageMeta({
  fullWidth: true,
});

const buttonProps = {
  color: "primary",
  size: "xl",
};

const buttonPropiedades = {
  text: "Ver propiedades",
  href: "/propiedades",
  props: { color: "primary", size: "xl" },
};

const { data } = await useFetch("/api/home", {});

const modules = [Navigation, Pagination, A11y, Autoplay];

const { data: posts } = await useFetch("/api/articles", {});

const someReactiveRef = ref(null);
const limit = 5;
const computedPosts = computed(() => {
  return limit ? posts.value.slice(0, limit) : posts;
});
</script>

<template>
  <div>
    <swiper
      :modules="modules"
      navigation
      :centeredSlides="true"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: true,
      }"
      :pagination="{
        clickable: true,
      }"
      class="relative"
    >
      <swiper-slide v-for="post in posts" :key="post.id">
        <HeroFull
          :theme="default"
          :title="`${post.attributes.title}`"
          :description="post.attributes.body"
          :image="getStrapiUrl(post.attributes.image)"
          :buttons="[
            {
              text: 'Más detalles',
              href: `propiedades/posts/${post.id}`,
              props: buttonProps,
            },
          ]"
        />
      </swiper-slide>
    </swiper>

    <HeroSection v-bind="data.hero" />

    <HomeAbout v-bind="data.about" />

    <SectionHeader v-bind="data.feature" id="feature" />
    <div v-for="post in posts" :key="post.id">
      <HomeFeatures :features="post.features" />
    </div>
    <div class="mx-auto py-2 mt-1">
      <div class="text-center mb-1">
        <Button
          class="mt-0 text-center"
          :href="buttonPropiedades.href"
          v-bind="buttonProps"
        >
          {{ buttonPropiedades.text }}
        </Button>
      </div>
    </div>

    <!--
    <HomeQuote v-bind="data.quote" />
    -->
    <ContactForm v-bind="data.contact" id="contact" />
  </div>
</template>
