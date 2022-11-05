<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
const isOpen = ref(false);
const windowTop = ref(0);

const menus = ref([
  {
    text: "menu_home",
    to: "/",
  },
  {
    text: "menu_store",
    to: "/store",
  },
  {
    text: "menu_swiper",
    to: "/swiper",
  },
  {
    text: "menu_dashboard",
    to: "/dashboard",
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
  "!text-white": windowTop.value > 100,
}));

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
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
        {{ $t("app_name") }}
      </NuxtLink>
      <button
        class="appearance-none px-2 py-2 rounded sm:hidden"
        type="button"
        aria-label="Menu"
        @click="isOpen = !isOpen"
      >
        <Icon name="ri:menu-line" class="w-6 h-6" />
      </button>
      <div
        :class="
          isOpen
            ? 'fixed sm:relative top-16 shadow sm:shadow-none left-4 right-4 rounded-lg overflow-hidden bg-white sm:bg-transparent py-2'
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
            "
            :class="navbarLinkClasses"
            exact-active-class="bg-skin-fill-active text-skin-active"
          >
            {{ $t(menu.text) }}
          </NuxtLink>

          <div>
            <AppLangSwitcher
              class="
                text-skin-base
                hover:bg-skin-fill-hover
                hover:text-skin-hover
              "
            />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar-default {
  --color-text-base: #1d4ed8;
  --color-text-active: #ffffff;
  --color-text-hover: #ffffff;
  --color-text-muted: #1d4ed8;
  --color-fill-hover: #1d4ed8;
  --color-fill-active: #1d4ed8;
}
.navbar-fixed {
  position: fixed;
  z-index: 2;
  width: 100%;
}
</style>
