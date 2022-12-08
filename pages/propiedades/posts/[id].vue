<script setup lang="ts">
import type { Post } from "~/types";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const route = useRoute();
const id = String(route.params.id);

const { data: posts } = await useFetch(`/api/articles/`, {});

const post = await posts.value.filter((item) => {
  return item.id === Number(id);
})[0];

const modules = [Navigation, Pagination, A11y, Autoplay];
const url = `https://jebembienesraices.com` + route.path;
const button = {
  href: `https://wa.me/529833321375?text=Hola%2C%20vi%20esta%20publicaci%C3%B3n%20en%20tu%20p%C3%A1gina%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20la%20propiedad.%0A${url}`,
  text: "Contáctar",
  props: {
    color: "primary",
    size: "xl",
  },
};

definePageMeta({
  fullWidth: true,
});
// @ts-ignore
useHead({
  title: post.attributes.title,
  meta: [
    {
      name: "description",
      content: post.attributes.body.substr(300),
    },
    {
      name: "og:image",
      // @ts-ignore
      content: getStrapiUrl(post.attributes.image),
    },
  ],
});
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
      navigation
      :pagination="{
        clickable: true,
      }"
      class="relative"
    >
      <swiper-slide v-for="image in post.gallery" :key="image.id">
        <HeroFull
          :theme="default"
          :title="``"
          description=""
          :image="getStrapiUrl(image)"
          :buttons="[]"
        />
      </swiper-slide>
    </swiper>
    <div class="mx-auto py-4 mt-10">
      <div class="text-center mb-10">
        <h1 class="text-4xl text-blue-600 font-bold mb-3">
          {{ post.attributes.title }}
        </h1>
        <div class="text-sm dark:text-gray-500 text-gray-500">
          <span class="font-semibold"> Jebem bienes raices </span>
          &middot;
          {{
            new Date(post.attributes.publishedAt).toLocaleDateString("es-MX", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </div>
        <Button
          class="mt-5"
          target="_blank"
          :href="button.href"
          v-bind="button.props"
        >
          {{ button.text }}
        </Button>
      </div>

      <!--BlogPostImage
        :image="post.attributes.image"
        :alt="post.attributes.title"
        class="rounded mb-8"
      /-->

      <article class="prose prose-blue dark:prose-invert max-w-full"></article>
      <HomeFeatures class="mx-20" :features="post.features" />
    </div>
  </div>
</template>
