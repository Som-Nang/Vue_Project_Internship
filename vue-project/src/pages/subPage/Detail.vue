<script setup>
import { ref } from "vue";

import { Burger } from "@element-plus/icons-vue";
import { HotWater } from "@element-plus/icons-vue";
import { KnifeFork } from "@element-plus/icons-vue";
import { Guide } from "@element-plus/icons-vue";
import { Camera } from "@element-plus/icons-vue";


const isShow = ref(false);
const showMore = () =>{
    isShow.value =! isShow.value;
}
const rate = ref(5);


</script>
<template>
    <div class="">
        <div class="grid grid-cols-2 gap-3 px-16 pb-8" >
            <el-carousel :interval="5000" arrow="always" height="100%">
                <el-carousel-item v-for="item in 2" :key="item">
                </el-carousel-item>
            </el-carousel>

            <div class="flex flex-col px-4 space-y-2">
                <h1 class="text-2xl text-gray-700 font-semibold">Oneders Hostel Siem Reap</h1>
                <el-rate v-model="rate" disabled/>
                <p class="text-sm text-gray-500 text-justify">
                    Stay in the heart of Siem Reap at Mad Monkey. Easy access to top attractions and nightlife.
                    Mad Monkey Backpackers Resort Siem Reap, official website, book direct for best deals.
                    Stay in the heart of Siem Reap at Mad Monkey. Easy access to top attractions and nightlife.
                    Mad Monkey Backpackers Resort Siem Reap, official website, book direct for best deals.
                </p>
                <div class="flex space-x-2 py-2">
                    <Guide class="w-6"/>
                <Burger class="w-6"/>
                <HotWater class="w-6"/>
                <KnifeFork class="w-6"/>
                <Camera class="w-6"/>
                </div>
            </div>
            
        </div>
        <div class="flex justify-center pb-6">
            <p @click="showMore" class="p-3 ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer hover:bg-blue-700 hover:text-white">
                <span v-if="isShow" >SHOW LESS DETAIL</span>
                <span v-else >SHOW ALL DETAIL</span>
            </p>
        </div>
    </div>
</template>


<style scoped>



.el-carousel__item:nth-child(2n) {
  background-image: url('../src/assets/bg.jpg');
  background-size: cover;

}

.el-carousel__item:nth-child(2n + 1) {
  background-image: url('../src/assets/pp2.jpg');
  background-size: cover;
}

.el-rate {
    --el-rate-icon-size: 24px;
}
</style>