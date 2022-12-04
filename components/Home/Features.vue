<script setup lang="ts">
defineProps<{
  features: {
    id: string;
    name: string;
    description: string;
    image: string;
    imagePosition: string;
    imageAlt: string;
    items: {
      title: string;
      description: string;
    }[];
    theme?: string;
  };
}>();
const url = `https://jebembienesraices.com/propiedades/posts/`;
const button = {
  href: `https://wa.me/529833321375?text=Hola%2C%20vi%20esta%20publicaci%C3%B3n%20en%20tu%20p%C3%A1gina%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20la%20propiedad.%0A${url}`,
  text: "Contáctar",
  props: {
    color: "primary",
    size: "xl",
  },
};
</script>

<template>
  <section
    :key="features.name"
    class="px-4 xl:px-0 py-5 sm:py-20 bg-skin-fill text-skin-base"
    :class="features.theme"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20">
        <div
          :class="
            features.imagePosition === 'right'
              ? 'order-2 sm:order-1'
              : 'order-1 sm:order-2'
          "
        >
          <h2 class="text-3xl font-semibold">
            {{ features.name }}
          </h2>
          <p class="mt-1 text-lg">
            {{ features.description }}
          </p>
          <div class="mt-8">
            <div class="space-y-6">
              <div
                v-for="item in features.items"
                :key="item.title"
                class="flex items-start gap-4"
              >
                <div
                  class="grid h-10 w-10 flex-shrink-0 place-items-center rounded bg-skin-icon-fill text-skin-icon"
                >
                  <!-- Heroicon name: outline/globe-alt -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="-mt-1.5 text-lg font-semibold">
                    {{ item.title }}
                  </h3>
                  <p class="">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="
            features.imagePosition === 'left'
              ? 'order-2 sm:order-1'
              : 'order-1 sm:order-2'
          "
        >
          <img
            loading="lazy"
            :src="features.image"
            :alt="features.imageAlt"
            class="max-w-full lg:max-w-md mx-auto rounded-lg border"
          />
        </div>
      </div>
      <Button
        class="mt-5"
        target="_blank"
        :href="button.href + features.id"
        v-bind="button.props"
      >
        {{ button.text }}
      </Button>
    </div>
  </section>
</template>

<style scoped></style>
