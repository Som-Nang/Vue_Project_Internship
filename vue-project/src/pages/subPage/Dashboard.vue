<script setup>
import { LocationInformation } from "@element-plus/icons-vue";
import { OfficeBuilding } from "@element-plus/icons-vue";
import { Notification } from "@element-plus/icons-vue";
import { StarFilled } from "@element-plus/icons-vue";
import { ArrowRightBold } from "@element-plus/icons-vue";

import Calendar from '../../components/Calendar.vue'
import { ref } from "vue";
const Cardrate = ref([5]);
const isShow = ref(false);
const isShow2 = ref(false);
const isShow3 = ref(false);
const showMore = () =>{
    isShow.value =! isShow.value;
}
const showMore2 = () =>{
    isShow2.value =! isShow2.value;
}

const showMore3 = () =>{
    isShow3.value =! isShow3.value;
}
</script>
<template>

    <div class="px-16">
        <Calendar/>
    </div>
   <el-container class="px-16">
            <el-aside width="370px" class="">
                <h1 class="font-bold text-gray-800 text-2xl py-4">Schedule Holiday</h1>
                <div class="fex flex-col p-4 bg-white shadow-sm space-y-2 h-fit">
                    <div class="px-4 py-2 space-y-3">
                        <h6 class="text-blue-800 text-[16px] font-medium">
                           Family Trip
                        </h6>
                        <div class="flex flex-col space-y-3">
                            <div class="flex space-x-2  text-gray-700 text-sm">
                                <LocationInformation class="w-5" color="rgb(156 163 175)"/>
                                <p>Siemreap from 04 Feb to 15 Apr 2023</p>
                            </div>

                            <div class="flex space-x-2  text-gray-700 text-sm">
                                <OfficeBuilding class="w-5" color="rgb(156 163 175)"/>
                                <p>Hotel, delux double room</p>
                            </div>

                            <div class="flex space-x-2  text-gray-700 text-sm">
                                <StarFilled class="w-5" color="rgb(156 163 175)"/>
                                <p>3 star hotel, minimum 6.5 review score</p>
                            </div>

                            <div class="flex space-x-2  text-gray-700 text-sm">
                                <Notification class="w-5 " color="rgb(156 163 175)"/>
                                <p>Price range: US$ 25 to US$ 125</p>
                            </div>

                            <div class="flex justify-end space-x-2  text-red-500 text-sm cursor-pointer">
                                <p>Result within 24h of request </p>
                                <ArrowRightBold class="w-5 " color="rgb(239 68 68)"/>
                            </div>
                        </div>
                    </div>

                    <div class="px-4 py-2 space-y-3">
                        <h6 class="text-blue-800 text-[16px] font-medium">
                           Kompong Som Holiday
                        </h6>
                        <div class="flex flex-col space-y-3">
                            <div class="flex space-x-2  text-gray-700 text-sm">
                                <LocationInformation class="w-5" color="rgb(156 163 175)"/>
                                <p>Sihanouk Ville from 04 Feb to 15 Apr 2023</p>
                            </div>

                            <div class="flex space-x-2  text-gray-700 text-sm">
                                <OfficeBuilding class="w-5" color="rgb(156 163 175)"/>
                                <p>Hotel, delux double room</p>
                            </div>

                            <div class="flex space-x-2  text-gray-700 text-sm">
                                <StarFilled class="w-5" color="rgb(156 163 175)"/>
                                <p>3 star hotel, minimum 6.5 review score</p>
                            </div>

                            <div class="flex space-x-2  text-gray-700 text-sm">
                                <Notification class="w-5 " color="rgb(156 163 175)"/>
                                <p>Price range: US$ 25 to US$ 125</p>
                            </div>

                            <div class="flex justify-end space-x-2  text-red-500 text-sm cursor-pointer">
                                <p>20 properties found </p>
                                <ArrowRightBold class="w-5 " color="rgb(239 68 68)"/>
                            </div>
                        </div>
                    </div>

                    <!-- ///////////////showMore -->
                    <div class="" v-if="isShow">
                        <div class="px-4 py-2 space-y-3">
                        <h6 class="text-blue-800 text-[16px] font-medium">
                          Kompot Holiday
                        </h6>
                        <div class="flex flex-col space-y-3">
                            <div class="flex space-x-2  text-gray-700 text-sm">
                                <LocationInformation class="w-5" color="rgb(156 163 175)"/>
                                <p>Sihanouk Ville from 04 Feb to 15 Apr 2023</p>
                            </div>

                            <div class="flex space-x-2  text-gray-700 text-sm">
                                <OfficeBuilding class="w-5" color="rgb(156 163 175)"/>
                                <p>Hotel, delux double room</p>
                            </div>

                            <div class="flex space-x-2  text-gray-700 text-sm">
                                <StarFilled class="w-5" color="rgb(156 163 175)"/>
                                <p>3 star hotel, minimum 6.5 review score</p>
                            </div>

                            <div class="flex space-x-2  text-gray-700 text-sm">
                                <Notification class="w-5 " color="rgb(156 163 175)"/>
                                <p>Price range: US$ 25 to US$ 125</p>
                            </div>

                            <div class="flex justify-end space-x-2  text-red-500 text-sm cursor-pointer">
                                <p>20 properties found </p>
                                <ArrowRightBold class="w-5 " color="rgb(239 68 68)"/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <!-- ///////////////showMore -->

                    <div class="p-4">
                        <p @click="showMore" class="p-3 text-center w-full ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer rounded-full hover:bg-blue-700 hover:text-white">
                            <span v-if="isShow" >SHOW LESS</span>
                            <span v-else >SHOW MORE</span>
                        </p>
                    </div>
                    
                </div>
                <h1 class="font-bold text-gray-800 text-2xl py-4 mt-4">Membership</h1>
                <div class="fex flex-col justify-center items-center p-4 bg-white shadow-sm space-y-2 ">
                    <div class="flex justify-center items-center flex-col">
                        <img class="w-16" src="../../assets/champion.png" alt="Champion">
                        <p class="text-red-500 font-semibold text-xl">CONGRAGULATION</p>
                        <p class="text-red-500 font-light text-sm">YOUR TOTAL SCORE</p>
                        <p class="text-red-500 font-bold text-3xl">212</p>
                    </div>
                    <div class="flex justify-center items-center flex-col space-y-2">
                        <p class="text-center text-gray-500 text-sm">Your membership has been updated to charttable traveller. You get 10% off on your booking includin other benefit</p>
                        <p class="text-center text-blue-800 underline text-sm cursor-pointer">Please learn more about guest benefit</p>
                    </div>
                </div>
            </el-aside>
            <el-container class="pl-8">
                <el-main>
                <h1 class="font-bold text-gray-800 text-2xl py-4">Recently Booking</h1>
                <div class="fex flex-col p-4 bg-white space-y-2">
                    <div class="flex w-full">
                        <div class="w-96 p-2">
                            <img src="../../assets/room.jpg" alt="" class="h-full bg-cover">
                        </div>
                        <div class="flex flex-col p-2 space-y-2 w-full">
                            <h2 class="text-gray-800 text-xl font-semibold">Mekong Hotel Boutique</h2>
                            <div class="flex">
                                <el-rate v-model="Cardrate" class="h-4" disabled/>
                                <p class="text-gray-500 text-sm">1 room(s), 1 adult(s), 1 night(s)</p>
                            </div>
                            <p class="text-blue-700 text-sm">Thu, 22 March 2023 - Fri, 23 March 2023 <span class="underline cursor-pointer">Manage</span></p>
                            <div class="flex space-x-1">
                                <LocationInformation class="w-5" color="rgb(156 163 175)"/>
                                <p class="text-gray-500 text-sm">No.134, Stree.51, Beoung Keng Kang I, Chamkar Mon, Phnom Penh, Cambodia</p>
                            </div>
                            <div class="w-full flex justify-end">
                                <p class="text-red-500 font-semibold text-3xl">
                                    US$ 92 <span class="text-gray-500 text-sm font-normal"> / per night</span>
                                </p>
                            </div>
                            
                        </div>
                    </div>

                    <div class="flex w-full">
                        <div class="w-96 p-2">
                            <img src="../../assets/room.jpg" alt="" class="h-full bg-cover">
                        </div>
                        <div class="flex flex-col p-2 space-y-2 w-full">
                            <h2 class="text-gray-800 text-xl font-semibold">Mekong Hotel Boutique</h2>
                            <div class="flex">
                                <el-rate v-model="Cardrate" class="h-4" disabled/>
                                <p class="text-gray-500 text-sm">1 room(s), 1 adult(s), 1 night(s)</p>
                            </div>
                            <p class="text-blue-700 text-sm">Thu, 22 March 2023 - Fri, 23 March 2023 <span class="underline cursor-pointer">Manage</span></p>
                            <div class="flex space-x-1">
                                <LocationInformation class="w-5" color="rgb(156 163 175)"/>
                                <p class="text-gray-500 text-sm">No.134, Stree.51, Beoung Keng Kang I, Chamkar Mon, Phnom Penh, Cambodia</p>
                            </div>
                            <div class="w-full flex justify-end">
                                <p class="text-red-500 font-semibold text-3xl">
                                    US$ 92 <span class="text-gray-500 text-sm font-normal"> / per night</span>
                                </p>
                            </div>
                            
                        </div>
                    </div>

                    <div class="flex w-full">
                        <div class="w-96 p-2">
                            <img src="../../assets/room.jpg" alt="" class="h-full bg-cover">
                        </div>
                        <div class="flex flex-col p-2 space-y-2 w-full">
                            <h2 class="text-gray-800 text-xl font-semibold">Mekong Hotel Boutique</h2>
                            <div class="flex">
                                <el-rate v-model="Cardrate" class="h-4" disabled/>
                                <p class="text-gray-500 text-sm">1 room(s), 1 adult(s), 1 night(s)</p>
                            </div>
                            <p class="text-blue-700 text-sm">Thu, 22 March 2023 - Fri, 23 March 2023 <span class="underline cursor-pointer">Manage</span></p>
                            <div class="flex space-x-1">
                                <LocationInformation class="w-5" color="rgb(156 163 175)"/>
                                <p class="text-gray-500 text-sm">No.134, Stree.51, Beoung Keng Kang I, Chamkar Mon, Phnom Penh, Cambodia</p>
                            </div>
                            <div class="w-full flex justify-end">
                                <p class="text-red-500 font-semibold text-3xl">
                                    US$ 92 <span class="text-gray-500 text-sm font-normal"> / per night</span>
                                </p>
                            </div>
                            
                        </div>
                    </div>

                    <div class="" v-if="isShow2">
                        <div class="flex w-full">
                        <div class="w-96 p-2">
                            <img src="../../assets/room.jpg" alt="" class="h-full bg-cover">
                        </div>
                        <div class="flex flex-col p-2 space-y-2 w-full">
                            <h2 class="text-gray-800 text-xl font-semibold">Mekong Hotel Boutique</h2>
                            <div class="flex">
                                <el-rate v-model="Cardrate" class="h-4" disabled/>
                                <p class="text-gray-500 text-sm">1 room(s), 1 adult(s), 1 night(s)</p>
                            </div>
                            <p class="text-blue-700 text-sm">Thu, 22 March 2023 - Fri, 23 March 2023 <span class="underline cursor-pointer">Manage</span></p>
                            <div class="flex space-x-1">
                                <LocationInformation class="w-5" color="rgb(156 163 175)"/>
                                <p class="text-gray-500 text-sm">No.134, Stree.51, Beoung Keng Kang I, Chamkar Mon, Phnom Penh, Cambodia</p>
                            </div>
                            <div class="w-full flex justify-end">
                                <p class="text-red-500 font-semibold text-3xl">
                                    US$ 92 <span class="text-gray-500 text-sm font-normal"> / per night</span>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    </div>

                    <div class="p-4">
                        <p @click="showMore2" class="p-3 text-center w-full ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer rounded-full hover:bg-blue-700 hover:text-white">
                            <span v-if="isShow2" >SHOW LESS</span>
                            <span v-else >SHOW MORE</span>
                        </p>
                    </div>
                </div>

                <h1 class="font-bold text-gray-800 text-2xl py-4 mt-5">Conversation Properties Reply</h1>
                <div class= "bg-white">
                    <div class="divide-y">
                        <div class="fex flex-col p-6  bg-white space-y-4">
                            <div class="flex justify-between ">
                                <div class="flex items-center">
                                    <img src="../../assets/room.jpg" alt="" class="object-cover  rounded-full w-16 h-16">
                                    <p class="text-center text-blue-800  text-2sm pl-4 font-bold">Property Owner 1</p>
                                </div>
                                <p class="text-center text-gray-500 font-bold text-sm">25 Mar 2023, 10:00 AM</p>
                            </div>
                            <p class=" text-gray-500 w-4/5 text-5sm">Book faster when your store your payment detail. We'll auto fill them for next time(Your detail are always safe.) </p>
                        </div>
                        <div class="fex flex-col p-6  bg-white space-y-4">
                            <div class="flex justify-between ">
                                <div class="flex items-center">
                                    <img src="../../assets/pp1.jpg" alt="" class="object-cover  rounded-full w-16 h-16">
                                    <p class="text-center text-blue-800  text-2sm pl-4 font-bold">Property Owner 2</p>
                                </div>
                                <p class="text-center text-gray-500 font-bold text-sm">25 Mar 2023, 10:00 AM</p>
                            </div>
                            <p class=" text-gray-500 w-4/5 text-5sm">Your membership has been updated to charttable traveller. You get 10% off on your booking includin other benefit</p>
                        </div>
                        <div class="fex flex-col p-6  bg-white space-y-4">
                            <div class="flex justify-between ">
                                <div class="flex items-center">
                                    <img src="../../assets/kps3.jpg" alt="" class="object-cover  rounded-full w-16 h-16">
                                    <p class="text-center text-blue-800  text-2sm pl-4 font-bold">Property Owner 3</p>
                                </div>
                                <p class="text-center text-gray-500 font-bold text-sm">25 Mar 2023, 10:00 AM</p>
                            </div>
                            <p class=" text-gray-500 w-4/5 text-5sm">Your membership has been updated to charttable traveller. You get 10% off on your booking includin other benefit</p>
                        </div>
                        
                         <!-- ///////////////showMore -->
                        <div class="" v-if="isShow3">
                            <div class="fex flex-col p-6  bg-white space-y-4">
                                <div class="flex justify-between ">
                                    <div class="flex items-center">
                                        <img src="../../assets/kps4.jpg" alt="" class="object-cover  rounded-full w-16 h-16">
                                        <p class="text-center text-blue-800  text-2sm pl-4 font-bold">Property Owner 4</p>
                                    </div>
                                    <p class="text-center text-gray-500 font-bold text-sm">25 Mar 2023, 10:00 AM</p>
                                </div>
                                <p class=" text-gray-500 w-4/5 text-5sm">Your membership has been updated to charttable traveller. You get 10% off on your booking includin other benefit</p>
                            </div>
                        </div>
                         <!-- ///////////////showMore -->
                    </div>
                    <div class="p-4">
                        <p @click="showMore3" class="p-3 text-center w-full ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer rounded-full hover:bg-blue-700 hover:text-white">
                            <span v-if="isShow3" >SHOW LESS</span>
                            <span v-else >SHOW MORE</span>
                        </p>
                    </div>
                
                </div>
                </el-main>
            </el-container>
    </el-container>
</template>