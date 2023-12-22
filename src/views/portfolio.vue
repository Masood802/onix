<template>
  <div
    id="portfolio"
    class="w-full h-screen pt-40 flex justify-between relative"
  >
    <div class="absolute left-[10%] top-30">
      <img src="../../public/portfolio-left-dec.png" alt="" class="w-full" />
    </div>
    <div class="w-full relative">
      <h1 class="text-5xl text-center font-bold text-gray-900 leading-normal">
        Our Recent <span class="text-sky-500">Projects</span> & Case<br />
        Studies <span class="text-red-500">For Clients</span>
      </h1>
      <h2 class="text-center text-4xl font-bold text-red-200">OUR PORTFOLIO</h2>
      <div
        class="w-11/12 flex justify-between items-center absolute left-28 top-52"
      >
        <img
          src="../../public/portfolio-01.jpg"
          alt=""
          class="mr-10 rounded-xl"
        />
        <img
          src="../../public/portfolio-02.jpg"
          alt=""
          class="mr-10 rounded-xl"
        />
        <img
          src="../../public/portfolio-03.jpg"
          alt=""
          class="mr-10 rounded-xl"
        />
        <img
          src="../../public/portfolio-04.jpg"
          alt=""
          class="mr-10 rounded-xl"
        />
      </div>
    </div>
  </div>
  <div class="w-full relative bg-slate-50 h-screen">
    <h1 class="text-5xl text-center font-bold text-gray-900 leading-normal">
      Select A Suitable <span class="text-sky-500">Plan</span> for Your<br />
      Next <span class="text-red-500">Projects</span>
    </h1>
    <h2 class="text-center text-4xl font-bold text-red-200">OUR PLANS</h2>
    <img
      src="../../public/tables-left-dec.png"
      alt=""
      class="absolute top-2 left-0"
    />
    <img
      src="../../public/tables-right-dec.png"
      alt=""
      class="absolute top-0 right-0"
    />
    <div class="w-3/5 mx-auto ">
      <div class=" w-1/3 rounded-xl h-[28rem] bg-[url('first-plan-bg.png')] shadow-lg bg-cover bg-center flex flex-col items-center justify-start">
        <h1 class="text-xl font-bold mt-8">Starter Plan</h1>
        <p class="text-red-500 mt-4 line-through">$160 mo</p>
        <h2 class="text-4xl font-bold text-red-500">$140</h2>
        <h2 class="my-5 text-gray-500">10 Projects</h2>
        <h2 class="text-gray-500">100 GB Space</h2>
        <h2 class="my-6 text-gray-500">20 SEO Checkups</h2>
        <h2 class="text-gray-500 mb-4">Bacic Support</h2>
        <button class="bg-sky-500 w-32 h-12 rounded-full text-slate-50 font-semibold">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
