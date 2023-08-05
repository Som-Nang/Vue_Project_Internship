
<script setup>
import { PhoneFilled } from "@element-plus/icons-vue";
</script>
<template>
    
    <div class=" w-full bg-white flex flex-col"> 
        <div class="relative w-full h-72">
            <div  class="absolute w-full h-full bg-cover bg-fit bg-no-repeat bg-center" 
                style="background-image: linear-gradient(
                    rgba(39, 38, 38, 0.5),
                    rgba(68, 65, 65, 0.5)
                    ),
                    url('../src/assets/beach.jpg');">
            </div>
    
            <div class="absolute w-full h-full flex flex-col justify-center items-center py-22 space-y-3">
                <p class=" text-white text-3xl font-semibold shadow-sm">YOUR GUEST ARE WAITING</p>
                <p class=" text-white w-2/5 text-center text-2sm">Whether you have a country home, a city appartment or seaside villa, Cotafer is a perfect place to list your property. There are absolutely no sign up fee with 24h support team.</p>
                <div class=" flex justify-center pt-4">
                    <p class="p-3 ring-1 ring-white text-white font-medium cursor-pointer hover:bg-blue-700 hover:ring-blue-700 hover:text-white">
                        <span >ADD YOUR PROPERTYE</span>
                    </p>
                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-5 gap-5 px-16 py-8">
            <div class="col-span-2 flex flex-col space-y-5">
                <div class="space-y-1">
                    <h1 class="block p-0 m-0 text-blue-700 text-3xl font-semibold italic">COTAF<span class="text-red-500">E</span>R</h1>
                    <p class="text-gray-500 text-sm">Booking has been never easier.</p>
                </div>

                <div class="space-y-1">
                    <h1 class="block p-0 m-0 text-gray-700 text-xl font-semibold">Product by</h1>
                    <p class="text-gray-500 text-sm">Cotafer is part of Cotafer Foundation, the world leader in online donation</p>
                </div>

                <div class="">
                    <p class="text-gray-500 text-sm flex spas"><span><PhoneFilled class="w-4 mr-1" color="#000" /> </span> We have on your way</p>
                    <h1 class="block p-0 m-0 text-gray-700 text-xl font-semibold italic">855 77-900-800</h1>
                    
                </div>
            </div>
            <div class="flex flex-col space-y-5">
                <h1 class="block p-0 m-0 text-gray-700 text-xl font-semibold">Cotafer</h1>
                <div class="text-gray-600 text-2sm flex flex-col space-y-2">
                    <a href="">About us</a>
                    <a href="">Press</a>
                    <a href="">Work for us</a>
                    <a href="">Advertise</a>
                    <a href="">Condition of use</a>
                    <a href="">Privacy notice</a>
                </div>
            </div>
            <div class="flex flex-col space-y-5">
                <h1 class="block p-0 m-0 text-gray-700 text-xl font-semibold">More Help</h1>
                <div class="text-gray-600 text-2sm flex flex-col space-y-2">
                    <a href="">How it work</a>
                    <a href="">Help</a>
                    <a href="">Become partner</a>
                    <a href="">Become traveller</a>
                </div>
            </div>
            <div class="flex flex-col space-y-5">
                <h1 class="block p-0 m-0 text-gray-700 text-xl font-semibold">Top Destination</h1>
                <div class="text-gray-600 text-2sm flex flex-col space-y-2">
                    <a href="">Phnom Penh</a>
                    <a href="">Bali</a>
                    <a href="">Hong Kong</a>
                    <a href="">Thailand</a>
                    <a href="">Tokyo</a>
                    <a href="">Siem Reap</a>
                </div>
            </div>
        </div>
        <div class="w-full bg-blue-800 flex justify-center">
            <p class="text-white text-sm p-5 font-light ">@ 2023 Cotafer.com. All rights reserved</p>
        </div>
    </div>
</template>
<style>
p{
    margin: 0px;
}</style>