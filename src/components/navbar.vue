<script setup>
import { RouterLink, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
let router = useRouter();
let scrollPostioon = ref(null);
function updateScroll() {
  scrollPostioon.value = window.scrollY;
}
function handleScroll(id) {
  (document.documentElement.style.scrollBehavior = "smooth"),
    document.getElementById(id).scrollIntoView();
}
onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
</script>

<template>
  <div
    class="w-full fixed flex justify-center items-center bg-slate-50 h-24 z-50"
    :class="{ change_bg: scrollPostioon > 550 }"
  >
    <div class="w-3/5 flex justify-center items-center">
      <div class="basis-1/4 ml-2 flex-none">
        <img src="../../public/logo.png" alt="" />
      </div>
      <div
        class="font-bold basis-1/2 flex items-center justify-center flex-auto"
      >
        <router-link
          @click="handleScroll('home')"
          to="/"
          class="px-3 hover:text-red-700 transition-all duration-500 ease-linear"
          >Home
        </router-link>
        <router-link
          @click="handleScroll('services')"
          to="/services"
          class="px-3 hover:text-red-700 transition-all duration-500 ease-linear"
          >Services
        </router-link>
        <router-link
          @click="handleScroll('about')"
          to="/about"
          class="px-3 hover:text-red-700 transition-all duration-500 ease-linear"
          >About
        </router-link>
        <router-link
         @click="handleScroll('portfolio')"
          to="/portfolio"
          class="px-3 hover:text-red-700 transition-all duration-500 ease-linear"
          >Portfolio
        </router-link>
        <router-link
          to="/contact"
          class="px-3 hover:text-red-700 transition-all duration-500 ease-linear"
          >Vidoes
        </router-link>
        <router-link
          to="/contact"
          class="px-3 hover:text-red-700 transition-all duration-500 ease-linear"
          >Contact Us
        </router-link>
        <button
          class="w-1/5 h-10 bg-red-500 font-semibold text-sm rounded-full text-white ml-8 hover:bg-sky-500 transition-all duration-500 ease-in-out"
        >
          Contact Us Now
        </button>
      </div>
    </div>
  </div>
</template>
