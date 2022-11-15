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

const { data } = await useFetch("/api/home", {});

const modules = [Navigation, Pagination, A11y, Autoplay];

const { data: posts } = await useFetch("/api/articles", {});
</script>

<template>
  <div>
    <swiper
      :modules="modules"
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
          :buttons="[{ text: 'Contactar', action: '#', props: buttonProps }]"
        />
      </swiper-slide>
    </swiper>

    <HeroSection v-bind="data.hero" />

    <HomeAbout v-bind="data.about" />

    <SectionHeader v-bind="data.feature" id="feature" />

    <HomeFeatures :features="data.features" />
    <!--
    <HomeQuote v-bind="data.quote" />
    -->
    <ContactForm v-bind="data.contact" id="contact" />
  </div>
</template>
