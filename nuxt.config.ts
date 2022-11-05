export default defineNuxtConfig({
  buildModules: ["@vueuse/nuxt", "@nuxtjs/strapi"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxtjs/i18n",
  ],
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    vueI18n: {
      legacy: false,
      locale: "es",
      messages: {
        es: {
          app_name: "JeBem Bienes Raices",
          app_description: "Sitio web para compra y venta de bienes raices",
          menu_home: "Inicio",
          menu_store: "Store",
          menu_blog: "Blog",
          menu_dashboard: "Dashboard",
          menu_swiper: "Swiper",
        },
        en: {
          app_name: "JeBem Bienes Raices",
          app_description: "Sitio web para compra y venta de bienes raices",
          menu_home: "Home",
          menu_store: "Store",
          menu_blog: "Blog",
          menu_dashboard: "Dashboard",
          menu_swiper: "Swiper",
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      gaId: "",
    },
  },
  transpile: ["unist-builder"],
});
