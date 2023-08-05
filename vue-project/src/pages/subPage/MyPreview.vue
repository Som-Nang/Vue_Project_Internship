<script setup>
import { ChatLineRound } from "@element-plus/icons-vue";
import { ChatRound} from "@element-plus/icons-vue";
import data from "../../data/countries.json";

import { ref } from "vue";
const items = ref(data);
const format = (percentage) => (percentage / 10)


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
            class="py-2"
            v-for="item in items.items"
            :key="item.id"
        >
          
            <div class="flex  bg-white">
                <!-- right -->
                <div class="fex flex-col p-4 bg-white space-y-2 items-center">
                    <div class="flex ">
                        <div class="w-48 p-1 ">
                            <img src="../../assets/room.jpg" alt="" class="h-full bg-cover ">
                        </div>
                        <div class="flex flex-col p-1 space-y-1 w-full">
                            <h2 class="text-gray-700 text-[14px] font-semibold">{{ item.name }}</h2>
                            <el-rate v-model="Cardrate" class="h-4" disabled/>
                            <p class="text-sm text-gray-500">Review on 12 February 2023</p>
                        </div>
                            <p class="border border-blue-700 px-4 h-fit rounded-full text-blue-700 text-right top-0">8.3</p>
                    </div>
                    <p class="text-gray-800 text-[15px] m-0">Nice short stay in heart of Phnom Penh</p> 
                    <p class="text-blue-700 underline text-sm m-0">View attach file</p>
                    <div class="flex space-x-2">
                        <ChatRound class="w-5 text-center" color="rgb(239 68 68)"/>
                        <p class="text-sm text-gray-500">The property look bit run down. shower curtain of bamboo look old and could be cleaner, window and swimming pool could be cleaner, but still an overal night stay. I may stay there again on a more reasonable princes.</p>
                    </div>
                    <div class="flex space-x-2">
                        <ChatLineRound class="w-5 " color="rgb(34 197 94)"/>
                        <p class="text-sm text-gray-500">Wonderfull location and spacious room, simple but nice breakfask, attentie and welcome staff who allowed me to check out one hour later than required, much appreaciated. Also lot of drinking water provide in room, lovely!</p>
                    </div>
                </div>
    
                <!-- left -->
                <div class="demo-progress items-right flex-col p-8 space-y-3 bg-blue-100 items-center justify-center h-99 ">
                    
                        <div class="flex justify-between">
                            <p class="text-blue-700 px-4">Cleanliness</p> 
                            <el-progress max="10" :percentage="83" :format="format" />
                        </div>
                        <div class="flex justify-between">
                            <p class="text-blue-700 px-4">Comfort</p> 
                            <el-progress  :percentage="83"  :format="format"/>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-blue-700 px-4">Location</p> 
                            <el-progress  :percentage="76"  :format="format"/>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-blue-700 px-4">Facilities</p> 
                            <el-progress  :percentage="63"  :format="format"/>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-blue-700 px-4">Staff</p> 
                            <el-progress  :percentage="93"  :format="format"/>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-blue-700 text-sm ">Value for money</p> 
                            <el-progress  :percentage="43"  :format="format"/>
                        </div>
                    </div>
                
            </div>
                
           
        </div>  
    </el-main>
   </el-container>  
</template>

<style>

</style>