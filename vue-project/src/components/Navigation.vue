<template>
<nav class="backdrop-blur-sm bg-black/50 w-full">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center space-x-2 sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <!-- <span class="sr-only"></span> -->
          <!--
            Icon when menu is closed.
          -->
          <svg @click="toggle" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <h3 class="block lg:hidden text-white text-[ppx] font-semibold shadow-xl">COTAF<span class="text-red-500">E</span>R</h3>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <h3 class="hidden text-white text-xl font-semibold shadow-xl lg:block">COTAF<span class="text-red-500">E</span>R</h3>
        </div>
        
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div class="hidden sm:ml-6 sm:block ">
          <div class="flex space-x-2" id="nav">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> 
            <router-link to="/hotel" class="text-white hover:bg-black/20 hover:text-white rounded-md px-3 py-2 h-full text-sm font-medium">HOTELS</router-link>
            <a href="#" class="text-white hover:bg-black/20 hover:text-white rounded-md px-3 py-2 text-sm font-medium">HOST</a>
            <a href="#" class="text-white hover:bg-black/20 hover:text-white rounded-md px-3 py-2 text-sm font-medium">TRAVEL</a>
            <a href="#" class="text-white hover:bg-black/20 hover:text-white rounded-md px-3 py-2 text-sm font-medium">CHARITY</a>
            <a href="#" class="text-white hover:bg-black/20 hover:text-white rounded-md px-3 py-2 text-sm font-medium">EVENT</a>
            <img class=" py-2 px-3 w-12 h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/125px-Flag_of_Cambodia.svg.png"/>
            <a href="#" class="text-white rounded-md px-3 py-2 text-sm font-medium">US$</a>
          </div>
        </div>
         <!-- Bell Icon -->
        <button type="button"  class="rounded-full bg-gray-800 p-1 mx-4 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <!-- <span class="sr-only">View notifications</span> -->
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

        <!-- Profile -->
        <div class="relative ml-3">
          <router-link to="/profile" class="flex items-center" id="nav">
            <span class="pr-2 text-white italic">Anonymous</span>
            <button type="button" class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="">
            </button>
          </router-link>
          
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div  :class="isShow ? 'flex' : 'hidden'" class="sm:hidden bg-black/50" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2 divide-y divide-slate-200">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="text-gray-300 hover:bg-black/20 hover:text-white block  px-3 py-2 w-screen text-base font-medium activeRounter">HOTEL</a>
      <a href="#" class="text-gray-300 hover:bg-black/20 hover:text-white block  px-3 py-2 text-base font-medium">HOST</a>
      <a href="#" class="text-gray-300 hover:bg-black/20 hover:text-white block  px-3 py-2 text-base font-medium">TRAVEL</a>
      <a href="#" class="text-gray-300 hover:bg-black/20 hover:text-white block  px-3 py-2 text-base font-medium">CHARITY</a>
    </div>
  </div>
</nav>

</template>
<script setup>

import {ref} from 'vue';

const isShow = ref(false);
const toggle = () =>{
  isShow.value =!isShow.value
  return(toggle, isShow)
};
</script>

<style scoped>


</style>