<script setup lang="ts">
import type { Post } from "~/types";
// import type { Strapi4Response } from "@nuxtjs/strapi";

// const { find } = useStrapi4();

const posts = ref<Post[]>([]);
try {
  /*
  const response = await find<Strapi4Response<Post>>("articles", {
    sort: "publishedAt",
    populate: ["image", "author"],
  });
  */
  const response = await useFetch("/api/articles", {});
  // @ts-ignore
  posts.value = response.data.data;
} catch (e) {
  console.log(e);
}
</script>

<template>
  <div class="mt-10">
    <h1 class="text-3xl mb-2 mt-2 font-semibold">Propiedades</h1>
    <h2 class="text-lg mb-8 font-normal text-gray-600 dark:text-gray-400">
      Últimas publicaciones
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <BlogPostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
