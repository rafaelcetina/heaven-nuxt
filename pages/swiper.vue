<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroFull from "../components/HeroFull/HeroFull.vue";

definePageMeta({
  fullWidth: true,
});

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};

const buttonProps = {
  color: "primary",
  size: "xl",
};

const modules = [Navigation, Pagination, A11y, Autoplay];
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
      :pagination="{
        clickable: true,
      }"
      class="relative"
    >
      <swiper-slide v-for="i in 5" :key="i">
        <HeroFull
          :theme="default"
          :title="`Slide ${i}`"
          description="Lorem ipsum"
          :image="`https://picsum.photos/1920/1080?random=${i}`"
          :buttons="[{ text: 'Get Started', action: '#', props: buttonProps }]"
        />
      </swiper-slide>
    </swiper>

    <hr class="my-5" />

    <swiper
      :modules="modules"
      navigation
      :pagination="{ clickable: true }"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="i in 5" :key="i">
        <HomeQuote
          class="text-center"
          :title="`Quote ${i}`"
          description="Lorem ipsum"
        />
      </swiper-slide>
    </swiper>

    <div class="custom-swiper relative mt-10 bg-blue-50">
      <button
        class="
          swiper-btn-prev
          btn btn-primary
          rounded-full
          z-10
          absolute
          top-1/2
          left-2
          transform
          -translate-y-1/2
        "
      >
        Prev
      </button>
      <button
        class="
          swiper-btn-next
          btn btn-primary
          rounded-full
          z-10
          absolute
          top-1/2
          right-2
          transform
          -translate-y-1/2
        "
      >
        Next
      </button>

      <swiper
        :modules="modules"
        :navigation="{
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev',
        }"
        :pagination="{ clickable: true }"
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="i in 5" :key="i">
          <HomeQuote
            class="text-center"
            :title="`Quote ${i}`"
            description="Lorem ipsum"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
