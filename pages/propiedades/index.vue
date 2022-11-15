<script setup lang="ts">
import type { Post } from "~/types";

const { data: posts } = await useFetch("/api/articles", {});
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
