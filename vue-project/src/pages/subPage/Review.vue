<script setup>
const format = (percentage) => (percentage / 10)

import { ref } from "vue";
const isShow = ref(false);
const showMore = () =>{
    isShow.value =! isShow.value;
}
</script>
<template>

        <div class="flex flex-col items-center justify-center space-y-5">
            <div class="flex items-center justify-center space-x-5">
                <p
                class="py-1 px-5 bg-green-500 text-white text-xl font-bold ring-1 ring-green-400"
                >
                7.5
                </p>
                <p class="text-green-500 font-bold text-xl">Good</p>
            </div>
            <div class="demo-progress grid grid-cols-1 gap-1 items-center">
                <div class="flex justify-center">
                    <p class="text-blue-700 px-4 w-48 text-right">Cleanliness</p> 
                    <el-progress max="10" :percentage="83" :format="format" />
                </div>
                <div class="flex justify-center">
                    <p class="text-blue-700 px-4 w-48 text-right">Comfort</p> 
                    <el-progress  :percentage="83"  :format="format"/>
                </div>
                <div class="flex justify-center">
                    <p class="text-blue-700 px-4 w-48 text-right">Location</p> 
                    <el-progress  :percentage="76"  :format="format"/>
                </div>
                <div class="flex justify-center">
                    <p class="text-blue-700 px-4 w-48 text-right">Facilities</p> 
                    <el-progress  :percentage="63"  :format="format"/>
                </div>
                <div class="flex justify-center">
                    <p class="text-blue-700 px-4 w-48 text-right">Staff</p> 
                    <el-progress  :percentage="93"  :format="format"/>
                </div>
                <div class="flex justify-center">
                    <p class="text-blue-700 px-4 w-48 text-right">Value for money</p> 
                    <el-progress  :percentage="43"  :format="format"/>
                </div>
                
            </div>

            <div class="grid grid-cols-2 gap-8 px-16 p-2 pb-4" >
                <div class="bg-white flex flex-col p-6 space-y-3">
                    <h1 class="text-xl font-bold text-gray-800">Good Choice at Phnom Penh</h1>
                    <div class="flex space-x-2">
                        <img class="py-2 pr-3 w-auto h-8 flex" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/125px-Flag_of_Cambodia.svg.png" alt="">
                        <p class="text-justify text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati optio distinctio corporis atque! Animi illum dignissimos ab accusamus quo blanditiis reiciendis eaque, nulla vero obcaecati fugit soluta!</p>
                    </div>
                </div>
                <div class="bg-white flex flex-col p-6 space-y-3 h-auto">
                    <h1 class="text-xl font-bold text-gray-800">Good Choice at Phnom Penh</h1>
                    <div class="flex space-x-2">
                        <img class="py-2 pr-3 w-auto h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/125px-Flag_of_Cambodia.svg.png" alt="">
                        <p class="text-justify text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati optio distinctio corporis atque! Animi illum dignissimos ab accusamus quo blanditiis reiciendis eaque, nulla vero obcaecati fugit soluta! </p>
                    </div>
                </div>
                <div class="bg-white flex flex-col p-6 space-y-3 m-0">
                    <h1 class="text-xl font-bold text-gray-800">Good Choice at Phnom Penh</h1>
                    <div class="flex space-x-2">
                        <img class="py-2 pr-3 w-auto h-8 flex" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/125px-Flag_of_Cambodia.svg.png" alt="">
                        <p class="text-justify text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati optio distinctio corporis atque! Animi illum dignissimos ab accusamus quo blanditiis reiciendis eaque, nulla vero obcaecati fugit soluta!</p>
                    </div>
                </div>
                <div class="bg-white flex flex-col p-6 space-y-3">
                    <h1 class="text-xl font-bold text-gray-800">Good Choice at Phnom Penh</h1>
                    <div class="flex space-x-2">
                        <img class="py-2 pr-3 w-auto h-8 flex" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/125px-Flag_of_Cambodia.svg.png" alt="">
                        <p class="text-justify text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati optio distinctio corporis atque! Animi illum dignissimos ab accusamus quo blanditiis reiciendis eaque, nulla vero obcaecati fugit soluta!</p>
                    </div>
                </div>

             <!-- ///////////////showMore -->
                <div class="" v-if="isShow">
                    <div class="bg-white flex flex-col p-6 space-y-3">
                        <h1 class="text-xl font-bold text-gray-800">Good Choice at Cambodia</h1>
                        <div class="flex space-x-2">
                            <img class="py-2 pr-3 w-auto h-8 flex" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/125px-Flag_of_Cambodia.svg.png" alt="">
                            <p class="text-justify text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati optio distinctio corporis atque! Animi illum dignissimos ab accusamus quo blanditiis reiciendis eaque, nulla vero obcaecati fugit soluta!</p>
                    </div>
                </div>

                </div>
            </div>
            <div class="flex justify-center pb-6">
                <p @click="showMore" class="p-3 ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer hover:bg-blue-700 hover:text-white">
                    <span v-if="isShow" >SHOW LESS REVIEW</span>
                    <span v-else >SHOW ALL REVIEW</span>
                </p>
            </div>
            
        </div>
</template>

<style>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.el-progress-bar__inner {
    background-color: rgb(29 78 216);
}
.demo-progress .el-progress--line {
    margin: 0;
}
</style>