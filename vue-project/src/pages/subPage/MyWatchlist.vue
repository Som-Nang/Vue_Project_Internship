<script setup>
import { LocationInformation } from "@element-plus/icons-vue";
import { ArrowDownBold } from "@element-plus/icons-vue";
import data from "../../data/countries.json";

import { ref } from "vue";
const items = ref(data);



const Cardrate = ref([5]);
</script>
<template>
   <el-container class="px-16">
    <el-main>
        <div class="flex justify-between py-4">
            <h1 class="font-bold text-gray-800 text-2xl ">My Watchlist</h1>
        </div>
       <!-- Card -->
       <div
            class="py-4 relative"
            v-for="item in items.items"
            :key="item.id"
        >
            <div
                class="flex flex-col  w-full h-full bg-white relative"
            >
                <div class="flex  items-center">
                  <!-- right -->
                    <div class="w-full fex flex-col p-4 bg-white space-y-2">
                       
                        <div class="flex w-full ">
                            <div class="w-full p-2 ">
                                <img src="../../assets/room.jpg" alt="" class="h-full bg-cover ">
                            </div>
                           
                            <div class="flex flex-col p-2 space-y-2 w-full">
                                <h2 class="text-gray-800 text-xl font-semibold">{{ item.name }}</h2>
                                    <el-rate v-model="Cardrate" class="h-4" disabled/>
                                <div class="flex space-x-2">
                                    <LocationInformation class="w-5" color="rgb(156 163 175)"/>
                                    <p class="text-gray-500 text-sm">No.134, Stree.51, Beoung Keng Kang I, Chamkar Mon, Phnom Penh, Cambodia</p>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <p class="py-1 px-5 bg-green-500 text-white text-xl font-bold ring-1 ring-green-400">
                                        7.5
                                    </p>
                                    <p class="text-green-500 font-bold text-xl">Good</p>
                                    <span class="border-l border-gray-700 h-4 opacity-40"></span>
                                    <p class="text-gray-500 text-[14px] opacity-70">from 912 reviews </p>
                                </div>
                            </div>  
                        </div>
                    </div>
        
                    <!-- left -->
                    <div class="w-full items-right flex-col p-4 pr-4 space-y-3">
                        <p class="text-gray-600 underline text-sm text-right cursor-pointer">Remove from watchlist</p>
                        <div class="flex  justify-end items-center">
                            <el-button type="primary" plain color="rgb(30 64 175)" class="rounded-full w-32 py-5">SHARE</el-button>
                        </div>
                        <div class="flex  justify-end items-center">
                            <el-button type="primary" plain color="rgb(30 64 175)" class="rounded-full w-32 py-5">BOKKING</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </el-main>
   </el-container>  
</template>

<style>

</style>