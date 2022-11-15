<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
// @ts-ignore
import type { Strapi4Response } from "@nuxtjs/strapi";
const { find } = useStrapi4();

const isOpen = ref(false);
const windowTop = ref(0);

const menus = ref([
  {
    text: "menu_home",
    to: "/",
  },
  {
    text: "menu_blog",
    to: "/propiedades",
  },
]);

function onScroll(e) {
  windowTop.value =
    window.top.scrollY; /* or: e.target.documentElement.scrollTop */
}

const navbarClasses = computed(() => ({
  "backdrop-blur bg-slate-900/75": windowTop.value > 100,
  "bg-transparent": windowTop.value <= 100,
}));

const navbarLinkClasses = computed(() => ({
  "!sm:text-white": windowTop.value > 100,
}));

const navbarLinkClassesIcon = computed(() => ({
  "!text-white": windowTop.value > 100,
  "!bg-[#429fd8]": windowTop.value < 100,
}));

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

const homePage = ref<any[]>([]);
try {
  /*
  const response = await find<Strapi4Response<any>>("home", {
    populate: ["logo"],
  });
  */
  const response = await useFetch("/api/header", {});

  console.log("Response", response.data);
  // @ts-ignore
  homePage.value = response.data.attributes;
} catch (e) {
  console.log(e);
}
</script>

<template>
  <header
    class="
      navbar-default navbar-fixed
      text-skin-base
      py-3
      sticky
      transition-colors
      duration-500
      top-0
    "
    :class="navbarClasses"
  >
    <div
      class="
        container
        mx-auto
        pl-4
        pr-2
        sm:px-0
        flex flex-row
        items-center
        gap-4
        justify-between
      "
    >
      <NuxtLink
        to="/"
        class="font-bold text-skin-muted text-lg"
        :class="navbarLinkClasses"
      >
        <img
          src="https://qzxcfcpyemrhuakuymvj.supabase.co/storage/v1/object/public/jebem/logo.jpeg"
          width="60"
          alt=""
        />
      </NuxtLink>

      <button
        class="appearance-none px-2 py-2 rounded sm:hidden"
        type="button"
        aria-label="Menu"
        @click="isOpen = !isOpen"
        :class="navbarLinkClassesIcon"
      >
        <Icon name="ri:menu-line" class="w-6 h-6" />
        <!--Menu-->
      </button>
      <div
        :class="
          isOpen
            ? 'fixed sm:relative top-[4.7rem] shadow sm:shadow-none left-4 right-4 rounded-lg overflow-hidden bg-transparent sm:bg-transparent py-2'
            : 'hidden sm:flex sm:w-6/12'
        "
      >
        <nav
          class="
            flex flex-col
            sm:relative
            w-full
            items-start
            sm:flex-row
            sm:justify-end
            sm:gap-1
            sm:items-center
          "
        >
          <NuxtLink
            v-for="menu in menus"
            :key="menu.text"
            :to="menu.to"
            class="
              px-4
              py-2
              rounded-full
              w-full
              sm:w-auto
              text-skin-base
              hover:text-skin-hover
              hover:bg-skin-fill-hover
              transition
              duration-200
              font-bold
              backdrop-blur
              bg-slate-900/30
            "
            :class="navbarLinkClasses"
            exact-active-class="!bg-skin-fill-active text-skin-active"
          >
            {{ $t(menu.text) }}
          </NuxtLink>

          <div>
            <AppLangSwitcher
              class="
                text-skin-base
                hover:bg-skin-fill-hover
                hover:text-skin-hover
                backdrop-blur
                bg-slate-900/30
              "
              :class="navbarLinkClasses"
            />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar-default {
  --color-text-base: #ffffff;
  --color-text-active: #429fd8;
  --color-text-hover: #1d4ed8;
  --color-text-muted: #429fd8;
  --color-fill-hover: #429fd8;
  --color-fill-active: #ffffff;
}
.navbar-fixed {
  position: fixed;
  z-index: 2;
  width: 100%;
}
</style>
