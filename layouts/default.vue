<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

useHead({
  title: "Jebem Bienes raices",
  meta: [
    {
      htmlAttrs: {
        lang: "es",
      },
    },
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "Compra venta y renta de bienes raices en Calakmul",
      name: "Jebem bienes raices",
      content: "Compra venta y renta de bienes raices en Calakmul",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});

const route = useRoute();
const isFullWidth = computed(
  () => route.name === "index" || route.meta.fullWidth
);
</script>

<template>
  <div>
    <AppHeader />

    <div :class="isFullWidth ? '' : 'container mt-8 mx-auto px-4 sm:px-0 py-4'">
      <NuxtPage />
    </div>

    <AppFooter />
  </div>
</template>
