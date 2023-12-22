<script setup>
import Navbar from "@/components/navbar.vue";
import phone from "../components/Phone.vue";
</script>

<template>
  <div class="w-full fixed z-50" >
    <Navbar />
  </div>
  <div class="w-full  flex justify-between items-center" id="home">
    <div class="w-2/10 h-full">
      <img src="../../public/baner-dec-left.png" alt="" />
    </div>
    <div class="w-5/10 h-96">
      <p class="uppercase font-bold text-lg text-red-500">
        Welcome to Onix Digital
      </p>
      <h2 class="text-5xl font-extrabold font-sans leading-relaxed">
        Build <span class="text-sky-500">your website</span> the <br />best in
        <span class="text-red-500">SEO</span>
      </h2>
      <p class="leading-relaxed">
        This is a professional looking HTML Bootstrap 5 website template brought
        <br />to you by TemplateMo website.
      </p>
      <div class="flex justify-strat items-center">
        <button
          class="w-48 h-12 rounded-full bg-sky-500 my-10 text-slate-50 font-bold mr-10 hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500 transition-all duration-700 ease-linear"
        >
          Message Us Now
        </button>
        <div class="flex justify-center items-center font-bold text-lg"><phone class="w-12 h-12 flex justify-center items-center bg-gradient-to-r from-red-500 to-orange-600  rounded-full text-slate-50  "></phone>&nbsp;<p class="text-red-500">0310-1234568</p></div>
      </div>
    </div>
    <div class="5/10 h-full">
      <img src="../../public/banner-right-image.png" alt="" />
    </div>
  </div>
</template>
