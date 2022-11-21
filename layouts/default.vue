<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

useHead({
  htmlAttrs: { lang: "es" },
  title: "Jebem Bienes raices",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "Compra venta y renta de bienes raices en Calakmul",
    },
    {
      hid: "keywords",
      name: "keywords",
      content: "Bienes, Raices, Calakmul, compra, renta, venta, propiedades",
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
