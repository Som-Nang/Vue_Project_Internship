<script setup>

import GoogleMap from '../../components/GoogleMap.vue'
import { ref } from "vue";
const isShow = ref(false);
const showMore = () =>{
    isShow.value =! isShow.value;
}
</script>

<template>
    <div class="flex flex-col justify-center px-16 space-y-5 pb-4">
        <GoogleMap/>
        <div class="text-red">
            <h1 class="text-gray-800 font-semibold text-xl">Nearby Popular Landmarks:</h1>
            <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col w-full py-4 space-y-5 pr-4">
                    <div class="flex flex-row justify-between">
                        <h2 class="text-gray-800">Wat Lanka</h2>
                        <h2 class="text-gray-500">0.2 KM</h2>
                    </div>
                    <div class="flex flex-row justify-between">
                        <h2 class="text-gray-800">Cambodia Independense Monument</h2>
                        <h2 class="text-gray-500">0.2 KM</h2>
                    </div>
                    <div class="flex flex-row justify-between">
                        <h2 class="text-gray-800">Status of King Father  Norodom Sihaknouk</h2>
                        <h2 class="text-gray-500">0.2 KM</h2>
                    </div>
                    <div class="flex flex-row justify-between">
                        <h2 class="text-gray-800">Mekong river River</h2>
                        <h2 class="text-gray-500">0.2 KM</h2>
                    </div>
                    
                </div>

                <div class="flex flex-col w-full py-4 space-y-5 pl-4">
                    <div class="flex flex-row justify-between">
                        <h2 class="text-gray-800">Wat Botum Park</h2>
                        <h2 class="text-gray-500">0.2 KM</h2>
                    </div>
                    <div class="flex flex-row justify-between">
                        <h2 class="text-gray-800">AEON Mall</h2>
                        <h2 class="text-gray-500">0.2 KM</h2>
                    </div>
                    <div class="flex flex-row justify-between">
                        <h2 class="text-gray-800">Royal Palace Phnom Penh</h2>
                        <h2 class="text-gray-500">0.2 KM</h2>
                    </div>
                    <div class="flex flex-row justify-between">
                        <h2 class="text-gray-800">Wat Phnom</h2>
                        <h2 class="text-gray-500">0.2 KM</h2>
                    </div>
                </div>
            </div>
        </div>

         <!-- /////Show showMore -->
         <div v-if="isShow"></div>
         <!-- /////Show showMore -->

        <div class="flex justify-center pb-2">
           <p @click="showMore" class="p-3 ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer hover:bg-blue-700 hover:text-white">
            <span v-if="isShow" >SHOW SURROUNDING</span>
            <span v-else >SHOW MORE SURROUNDING</span>
            </p>
        </div>
    </div>
    
</template>
<style scoped>
/* .place-card .place-card-medium{
    display: none;
    border: 3px solid red;
    visibility: hidden;
} */
.ctfGoogleMap .i4ewOd-UzWXSb .i4ewOd-pzNkMb-haAclf{
    display: none !important;
    left: 0!important;
    right: 0!important;
    z-index: 9!important;
    overflow: hidden;
    color: #000;
    position: absolute;
    -webkit-transition: background-color .25s;
    transition: background-color .25s;
    background-color: blue;
}
</style>
