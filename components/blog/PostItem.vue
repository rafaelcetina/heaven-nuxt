<script setup lang="ts">
import { Post } from "~/types";

defineProps<{
  post: Post;
}>();
</script>

<template>
  <NuxtLink
    v-if="post.attributes"
    class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
    :to="`/propiedades/posts/${post.id}`"
  >
    <BlogPostImage :image="post.attributes.image" />
    <div class="px-4 py-4">
      <span class="font-semibold text-blue-600 text-sm">Propiedad</span>
      <h3 class="font-semibold text-lg mt-2 text-gray-800">
        {{ post.attributes.title }}
      </h3>
      <p class="text-gray-500 text-sm mt-2">
        {{ post.attributes.excerpt || post.attributes.body.substr(0, 150) }}
      </p>
      <div class="flex gap-2 items-center mt-6">
        <img
          alt="logo"
          loading="lazy"
          src="https://qzxcfcpyemrhuakuymvj.supabase.co/storage/v1/object/public/jebem/logo.jpeg"
          class="max-w-full rounded-full"
          width="40"
          height="40"
        />
        <div class="space-y-0.5">
          <div class="font-medium text-sm">Jebem bienes raices</div>
          <div class="text-xs text-gray-500">
            {{
              new Date(post.attributes.publishedAt).toLocaleDateString(
                "es-MX",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )
            }}
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
