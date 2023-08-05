<script setup>
import { ArrowDownBold } from "@element-plus/icons-vue";
import { DeleteFilled } from "@element-plus/icons-vue";
import StepRating from '../../components/StepRating.vue';

</script>
<template>
    <el-container class="px-16">
        <el-main>
            <div class="flex justify-between py-4">
                <h1 class="font-bold text-gray-800 text-2xl ">Review Stay</h1>
                <el-button type="primary" plain color="rgb(30 64 175)" class="">
                    <span class="flex"
                    >ALL STATUS<ArrowDownBold class="w-4 ml-4" />
                    </span>
                </el-button>
            </div>
            
            <div class="flex flex-col bg-white p-8 space-y-8">
                <div class="flex flex-col w-1/2  border border-gray-300 justify-center p-2">
                    <p class="text-sm text-gray-500">REVIEW TITLE</p>
                    <p class="text-[16px] text-gray-700">Good hotel to stay in Cambodia</p>
                </div>
                <p class="text-[16px] text-blue-800">Please rate the properties on the following categories</p>
                <div class="flex flex-col items-center text-red-500 w-full">
                    <p class="text-sm">PROPERTIES REVIEW SCORE</p>
                    <h1 class="font-bold text-6xl">7.2</h1>
                </div>
                <div class="flex flex-col items-center justify-center space-y-10">

                    <div class="flex top-0 space-x- w-full justify-center">
                        <p class="top-0 text-[16px] ml-10 text-gray-800">Staff</p>
                        <StepRating class="w-full"/>
                    </div>

                </div>

                <p class="text-[16px] text-blue-800">Please tell us your experiences</p>
                <div class="flex justify-between space-x-5">
                    <div class="flex flex-col w-full space-y-2">
                        <p class="text-gray-500">What did you like durring your stay?</p>
                        <textarea name="" id="" cols="30" rows="8" class="focus:outline-none border p-5" placeholder="Text Here..."></textarea>
                    </div>
                    <div class="flex flex-col w-full space-y-2">
                        <p class="text-gray-500">What can be improve?</p>
                        <textarea name="" id="" cols="30" rows="8" class="focus:outline-none border p-5" placeholder="Text Here..."></textarea>
                    </div>
                </div>

                <p class="text-[16px] text-gray-600">Add attach photo - Max 3 attach photos</p>
                <p class="pl-5 pr-24 py-2 bg-gray-200 text-gray-600 w-fit hover:bg-gray-300 cursor-pointer">Browse...</p>

                <div class="flex space-x-5">
                    <div class="w-80  relative">
                        <img src="../../assets/room.jpg" alt="" class="bg-cover h-64">
                        <DeleteFilled class="absolute  top-0 right-0 px-3 py-3 text-sm text-white w-12 bg-red-500"/>
                    </div>
                        <div class="w-80  relative">
                        <img src="../../assets/room.jpg" alt="" class="bg-cover h-64">
                        <DeleteFilled class="absolute  top-0 right-0 px-3 py-3 text-sm text-white w-12 bg-red-500"/>
                    </div>
                    <div class="w-80  relative">
                        <img src="../../assets/room.jpg" alt="" class="bg-cover h-64">
                        <DeleteFilled class="absolute  top-0 right-0 px-3 py-3 text-sm text-white w-12 bg-red-500"/>
                    </div>
                </div>
                <p class="p-3 text-center w-full ring-1 ring-blue-700 font-medium cursor-pointer rounded-sm bg-blue-700 text-white hover:bg-blue-600">SUBMIT</p>
            </div>
            
              
        </el-main>
    </el-container>  
 </template>