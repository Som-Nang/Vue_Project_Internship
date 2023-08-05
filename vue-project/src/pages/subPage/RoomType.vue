<script setup>
import { Avatar } from "@element-plus/icons-vue";
import { ref } from "vue";
const isShow = ref(false);
const showMore = () =>{
    isShow.value =! isShow.value;
}
</script>

<template>
    <div class="relative ">
        <div class="grid grid-cols-2 gap-2 px-16 pb-8">

            <div class="relative w-full h-52">
                <div  class="absolute w-full h-52 bg-cover bg-no-repeat bg-center" 
                    style="background-image: linear-gradient(
                        rgba(39, 38, 38, 0.5),
                        rgba(68, 65, 65, 0.5)
                        ),
                        url('../src/assets/sr3.jpg');">
                </div>
        
                <div class="absolute h-full w-full flex flex-col justify-center items-center ">
                    <p class=" text-white text-xl">Standard Room</p>
                    <p class=" text-white text-sm">1 King bed with 1 sofa bed</p>
                </div>
                <div class="absolute bottom-0 px-3 py-1 text-2xl font-semibold right-0">
                    <p class="text-white ">US $69 <span class="text-sm font-normal">/night</span></p>
                    <p class=" text-yellow-500 flex justify-end font-normal text-[18px] "> <Avatar class="w-[18px] m-1"/> 2 guests </p>
                </div>
            </div>

            <div class="relative w-full h-52">
                <div  class="absolute w-full h-52 bg-cover bg-no-repeat bg-center" 
                    style="background-image: linear-gradient(
                        rgba(39, 38, 38, 0.5),
                        rgba(68, 65, 65, 0.5)
                        ),
                        url('../src/assets/pp2.jpg');">
                </div>
        
                <div class="absolute h-full w-full flex flex-col justify-center items-center ">
                    <p class=" text-white text-xl">Standard Room</p>
                    <p class=" text-white text-sm">1 King bed with 1 sofa bed</p>
                </div>
                <div class="absolute bottom-0 px-3 py-1 right-0">
                    <p class="text-white text-2xl font-semibold">US $69 <span class="text-sm font-normal">/night</span></p>
                    <p class=" text-yellow-500 flex justify-end font-normal text-[18px] "> <Avatar class="w-[18px] mx-1"/> 2 guests </p>
                </div>
            </div>

            <div class="relative w-full h-52">
                <div  class="absolute w-full h-52 bg-cover bg-no-repeat bg-center" 
                    style="background-image: linear-gradient(
                        rgba(39, 38, 38, 0.5),
                        rgba(68, 65, 65, 0.5)
                        ),
                        url('../src/assets/kps4.jpg');">
                </div>
        
                <div class="absolute h-full w-full flex flex-col justify-center items-center ">
                    <p class=" text-white text-xl">Standard Room</p>
                    <p class=" text-white text-sm">1 King bed with 1 sofa bed</p>
                </div>
                <div class="absolute bottom-0 px-3 py-1 right-0">
                    <p class="text-white text-2xl font-semibold">US $69 <span class="text-sm font-normal">/night</span></p>
                    <p class=" text-yellow-500 flex justify-end font-normal text-[18px] "> <Avatar class="w-[18px] mx-1"/> 2 guests </p>
                </div>
            </div>

            <div class="relative w-full h-52">
                <div  class="absolute w-full h-52 bg-cover bg-no-repeat bg-center" 
                    style="background-image: linear-gradient(
                        rgba(39, 38, 38, 0.5),
                        rgba(68, 65, 65, 0.5)
                        ),
                        url('../src/assets/kps3.jpg');">
                </div>
        
                <div class="absolute h-full w-full flex flex-col justify-center items-center ">
                    <p class=" text-white text-xl">Standard Room</p>
                    <p class=" text-white text-sm">1 King bed with 1 sofa bed</p>
                </div>
                <div class="absolute bottom-0 px-3 py-1 right-0">
                    <p class="text-white text-2xl font-semibold">US $69 <span class="text-sm font-normal">/night</span></p>
                    <p class=" text-yellow-500 flex justify-end font-normal text-[18px] "> <Avatar class="w-[18px] mx-1"/> 2 guests </p>
                </div>
            </div>

            <!-- /////Show showMore -->
            <div v-if="isShow">
                <div  class="relative w-full h-52">
                    <div  class="absolute w-full h-52 bg-cover bg-no-repeat bg-center" 
                        style="background-image: linear-gradient(
                            rgba(39, 38, 38, 0.5),
                            rgba(68, 65, 65, 0.5)
                            ),
                            url('../src/assets/bg.jpg');">
                    </div>
            
                    <div class="absolute h-full w-full flex flex-col justify-center items-center ">
                        <p class=" text-white text-xl">Standard Room</p>
                        <p class=" text-white text-sm">1 King bed with 1 sofa bed</p>
                    </div>
                    <div class="absolute bottom-0 px-3 py-1 text-2xl font-semibold right-0">
                        <p class="text-white ">US $69 <span class="text-sm font-normal">/night</span></p>
                        <p class=" text-yellow-500 flex justify-end font-normal text-[18px] "> <Avatar class="w-[18px] m-1"/> 2 guests </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center pb-6">
           <p @click="showMore" class="p-3 ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer hover:bg-blue-700 hover:text-white">
            <span v-if="isShow" >SHOW LESS ROOM TYPE</span>
            <span v-else >SHOW MORE ROOM TYPE</span>
            </p>
        </div>
        
        
    </div>
    
</template>

