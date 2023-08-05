<template>
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs w-full"
      @tab-click="handleClick"
  
    >
    
        <el-tab-pane label="FACILITIES SERVICES" name="first" class=" items-center grid grid-cols-4 gap-4">
            <div class="col-span-1 space-x-3 space-y-2">
                <div class="flex items-center space-x-3">
                    <div class="p-2 bg-gray-100 border border-gray-200">
                        <font-awesome-icon icon="fa-solid fa-language " size="2xl" color="rgb(75 85 99)"/>
                    </div>
                    <p class="text-2sm text-gray-900">Language(s) Spoken by staff</p>
                </div>
                <p class="text-2sm text-gray-600 pl-16">Chinese</p>
                <p class="text-2sm text-gray-600 pl-16">English</p>
                <p class="text-2sm text-gray-600 pl-16">French</p>
                <p class="text-2sm text-gray-600 pl-16">Khmer</p>
                <p class="text-2sm text-gray-600 pl-16">Germany</p>
                <p class="text-2sm text-gray-600 pl-16">Thaliand</p>

                <div class="flex items-center space-x-3 pt-4">
                    <div class="p-2 bg-gray-100 border border-gray-200">
                        <font-awesome-icon icon="fa-solid fa-store" size="2xl" color="rgb(75 85 99)"/>
                    </div>
                    <p class="text-2sm text-gray-900">Shops</p>
                </div>
                <p class="text-2sm text-gray-600 pl-16">Shop on site</p>
                <p class="text-2sm text-gray-600 pl-16">Mini-mart</p>
                <p class="text-2sm text-gray-600 pl-16">Gift shop</p>
                
            </div>

            <div class="col-span-1 space-x-3 space-y-2">
                <div class="flex items-center space-x-3">
                    <div class="p-2 bg-gray-100 border border-gray-200">
                        <font-awesome-icon icon="fa-solid fa-masks-theater" size="2xl" color="rgb(75 85 99)"/>
                    </div>
                    <p class="text-2sm text-gray-900">Entertainment</p>
                </div>
                <p class="text-2sm text-gray-600 pl-16">Baby sitting</p>
                <p class="text-2sm text-gray-600 pl-16">Casino</p>
                <p class="text-2sm text-gray-600 pl-16">French</p>
                <p class="text-2sm text-gray-600 pl-16">Evening Entertainment</p>
                <p class="text-2sm text-gray-600 pl-16">Other</p>

                <div class="flex items-center space-x-3 pt-4">
                    <div class="p-2 bg-gray-100 border border-gray-200">
                        <font-awesome-icon icon="fa-solid fa-bowl-food" size="2xl" color="rgb(75 85 99)"/>
                    </div>
                    <p class="text-2sm text-gray-900">Meals</p>
                </div>
                <p class="text-2sm text-gray-600 pl-16">Breakfast (some rooms)</p>
                <p class="text-2sm text-gray-600 pl-16">Lunch </p>
                <p class="text-2sm text-gray-600 pl-16">Diner</p>
                
            </div>

            <div class="col-span-1 space-x-3 space-y-2">
                <div class="flex items-center space-x-3">
                    <div class="p-2 bg-gray-100 border border-gray-200">
                        <font-awesome-icon icon="fa-solid fa-wine-glass" size="2xl" color="rgb(75 85 99)"/>
                    </div>
                    <p class="text-2sm text-gray-900">Food and drink</p>
                </div>
                <p class="text-2sm text-gray-600 pl-16">Bar</p>
                <p class="text-2sm text-gray-600 pl-16">Minibar</p>
                <p class="text-2sm text-gray-600 pl-16">Room Services</p>
                <p class="text-2sm text-gray-600 pl-16">Skybar</p>
                <p class="text-2sm text-gray-600 pl-16">Other</p>

                <div class="flex items-center space-x-3 pt-4">
                    <div class="p-2 bg-gray-100 border border-gray-200">
                        <font-awesome-icon icon="fa-solid fa-bullseye" size="2xl" color="rgb(75 85 99)"/>
                    </div>
                    <p class="text-2sm text-gray-900">Common area</p>
                </div>
                <p class="text-2sm text-gray-600 pl-16">Bar</p>
                <p class="text-2sm text-gray-600 pl-16">Mini Bar</p>
                <p class="text-2sm text-gray-600 pl-16">Room Services</p>
                
            </div>

            <div class="col-span-1 space-x-3 space-y-2">
                <div class="flex items-center space-x-3">
                    <div class="p-2 bg-gray-100 border border-gray-200">
                        <font-awesome-icon icon="fa-solid fa-plane " size="2xl" color="rgb(75 85 99)"/>
                    </div>
                    <p class="text-2sm text-gray-900">Activities</p>
                </div>
                <p class="text-2sm text-gray-600 pl-16">Hiking</p>
                <p class="text-2sm text-gray-600 pl-16">Pool</p>
                <p class="text-2sm text-gray-600 pl-16">Spa</p>
                <p class="text-2sm text-gray-600 pl-16">Running</p>
                <p class="text-2sm text-gray-600 pl-16">Jog</p>
                <p class="text-2sm text-gray-600 pl-16">Other</p>

                <div class="flex items-center space-x-3 pt-4">
                    <div class="p-2 bg-gray-100 border border-gray-200">
                        <font-awesome-icon icon="fa-solid fa-square-parking" size="2xl" color="rgb(75 85 99)"/>
                    </div>
                    <p class="text-2sm text-gray-900">Parking</p>
                </div>
                <p class="text-2sm text-gray-600 pl-16">Free Publick Parking</p>
                <p class="text-2sm text-gray-600 pl-16">No reservation required</p>
                
            </div>
        </el-tab-pane>

        <el-tab-pane label="PROPERTIES POLOCIES" name="second">
            <h1 class="text-gray-700 text-xl font-bold py-4">Good to know hotel rules</h1>

            <div class="items-center grid grid-cols-4 gap-4">
                <div class="col-span-1 space-y-3">
                    <p class="text-sm text-gray-600">Check-in:</p>
                    <p class="text-sm text-gray-600">Check-out:</p>
                    <p class="text-sm text-gray-600">Cancellation/payment:</p>
                    <p class="text-sm text-gray-600">Children and extra bed:</p>
                    <p class="text-sm text-gray-600">Pet:</p>
                    <p class="text-sm text-gray-600">Credit card accepted at this</p>
                </div>

                <div class="col-span-3 space-y-3">
                    <p class="text-sm text-gray-800">From 14:00 hours</p>
                    <p class="text-sm text-gray-800">Untill 12:00 hours</p>
                    <p class="text-sm text-gray-800">Cancellation and prepayment polocies very according to room type. Please check the room conditions when sellecting your rom above.</p>
                    <p class="text-sm text-gray-800">All children all welcome</p>
                    <p class="text-sm text-gray-800">Pet are not allowed</p>
                    <p class="text-sm text-gray-800">VISA, American Express, Mastercard, JBC</p>
                </div>
            </div>

        </el-tab-pane>

        <el-tab-pane label="GUEST REVIEWS" name="third" class="flex flex-col justify-center items-center space-y-4">
            <div class="py-8 space-y-8">
                <div class="border border-green-400 flex space-x-3 h-16">
                    <p class="h-full px-16 bg-green-500 text-white flex  items-center text-xl font-bold ">
                    7.5
                    </p>
                    <div class="flex flex-col mb-0 justify-center items-center w-full">
                        <span class="text-green-500 font-bold text-xl">Good</span>
                        <span class="text-gray-500 text-[14px] opacity-70">
                            from 912 reviews
                        </span>
                    </div>
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
            </div>
            <!-- Comment Section -->
            <div class="space-y-4 w-full">
                <div class="fex flex-col bg-white space-y-4 items-center border border-gray-200 p-8 ">
                    <div class="flex justify-between">
                        <div class="space-y-1">
                            <p class="text-sm font-bold text-gray-800">Jack Muray</p>
                            <div class="flex items-center space-x-2">
                                <img class="py-2 w-6 h-fit" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/125px-Flag_of_Cambodia.svg.png"/>
                                <p class="text-sm text-gray-500"> Cambodia at  12 Feb 2023</p>
                            </div>
                            <p class="text-gray-800 text-[15px] m-0">Nice short stay in heart of Phnom Penh</p> 
                            <p class="text-blue-700 underline text-sm m-0 cursor-pointer">View attach file</p>
                        </div>
                        <div class="">
                            <p class="border border-blue-700 px-4 h-fit rounded-full text-blue-700 text-right top-0">8.3</p>
                        </div>
                    
                    </div>
                
                    <div class="flex space-x-2">
                        <ChatRound class="w-5 text-center" color="rgb(239 68 68)"/>
                        <p class="text-sm text-gray-500">The property look bit run down. shower curtain of bamboo look old and could be cleaner, window and swimming pool could be cleaner, but still an overal night stay. I may stay there again on a more reasonable princes.</p>
                    </div>
                    <div class="flex space-x-2">
                        <ChatLineRound class="w-5 " color="rgb(34 197 94)"/>
                        <p class="text-sm text-gray-500">Wonderfull location and spacious room, simple but nice breakfask, attentie and welcome staff who allowed me to check out one hour later than required, much appreaciated. Also lot of drinking water provide in room, lovely!</p>
                    </div>
                </div>
                
                <div class="fex flex-col bg-white space-y-4 items-center border border-gray-200 p-8 ">
                    <div class="flex justify-between">
                        <div class="space-y-1">
                            <p class="text-sm font-bold text-gray-800">Ciro</p>
                            <div class="flex items-center space-x-2">
                                <img class="py-2 w-6 h-fit" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/125px-Flag_of_Cambodia.svg.png"/>
                                <p class="text-sm text-gray-500"> Cambodia at  12 Feb 2023</p>
                            </div>
                            <p class="text-gray-800 text-[15px] m-0">Just what we needed</p> 
                            <p class="text-blue-700 underline text-sm m-0 cursor-pointer">View attach file</p>
                        </div>
                        <div class="">
                            <p class="border border-blue-700 px-4 h-fit rounded-full text-blue-700 text-right top-0">8.3</p>
                        </div>
                    
                    </div>
                
                    <div class="flex space-x-2">
                        <ChatRound class="w-5 text-center" color="rgb(239 68 68)"/>
                        <p class="text-sm text-gray-500">The property look bit run down. shower curtain of bamboo look old and could be cleaner, window and swimming pool could be cleaner, but still an overal night stay. I may stay there again on a more reasonable princes.</p>
                    </div>
                </div> 
                
                <div class="fex flex-col bg-white space-y-4 items-center border border-gray-200 p-8 ">
                    <div class="flex justify-between">
                        <div class="space-y-1">
                            <p class="text-sm font-bold text-gray-800">Natalie</p>
                            <div class="flex items-center space-x-2">
                                <img class="py-2 w-6 h-fit" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/125px-Flag_of_Cambodia.svg.png"/>
                                <p class="text-sm text-gray-500"> Cambodia at  12 Feb 2023</p>
                            </div>
                            <p class="text-gray-800 text-[15px] m-0">Amazing location near several of my favorite resturant</p> 
                            <p class="text-blue-700 underline text-sm m-0 cursor-pointer">View attach file</p>
                        </div>
                        <div class="">
                            <p class="border border-blue-700 px-4 h-fit rounded-full text-blue-700 text-right top-0">8.3</p>
                        </div>
                    
                    </div>
                
                    <div class="flex space-x-2">
                        <ChatRound class="w-5 text-center" color="rgb(239 68 68)"/>
                        <p class="text-sm text-gray-500">The property look bit run down. shower curtain of bamboo look old and could be cleaner, window and swimming pool could be cleaner, but still an overal night stay. I may stay there again on a more reasonable princes.</p>
                    </div>
                    <div class="flex space-x-2">
                        <ChatLineRound class="w-5 " color="rgb(34 197 94)"/>
                        <p class="text-sm text-gray-500">Excelent and great location</p>
                    </div>
                </div>

                <div v-if="isShow">No reviews</div>

                <div class="flex justify-center pb-6 w-full py-4 px-1">
                    <p @click="showMore" class="p-3 w-full text-center ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer hover:bg-blue-700 hover:text-white">
                    <span v-if="isShow" >SHOW LESS </span>
                    <span v-else >SHOW ALL REVIEWS</span>
                    </p>
                </div> 
            </div>  
            <!-- Comment Section -->
        </el-tab-pane>

        <el-tab-pane label="PROPERTY SURROUNDING" name="fourth" class="space-y-4 ">
            <div class="grid grid-cols-2 gap-8">
                <div class="col-span-1 space-x-3 space-y-2">
                    <div class="flex items-center space-x-3">
                        <div class="p-2 bg-gray-100 border border-gray-200">
                            <font-awesome-icon icon="fa-solid fa-language " size="2xl" color="rgb(75 85 99)"/>
                        </div>
                        <p class="text-2sm text-gray-900">Place of Interest</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Wat Lanka</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Cambodian Independence Monument</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Status of King Father Norodom Sihaknouk</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Preah Sihanouk Garden</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Kid City Asia</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Paragon Supermarket</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Phnom Penh Tower</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">AEON Mall</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>

                    

                    <div class="flex items-center space-x-3 pt-4">
                        <div class="p-2 bg-gray-100 border border-gray-200">
                            <font-awesome-icon icon="fa-solid fa-language" size="2xl" color="rgb(75 85 99)"/>
                        </div>
                        <p class="text-2sm text-gray-900">Most Popular Landmarks</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Royal Palace Phnom Penh</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Toul Sleng Museum</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Toul Sleng Genocide Museum</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Chaktomok HAll</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Sisovath Quay</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Russian Market</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Riverfront Part</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Vathanak Capital</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    
                </div>

                <div class="col-span-1 space-x-3 space-y-2">
                    <div class="flex items-center space-x-3">
                        <div class="p-2 bg-gray-100 border border-gray-200">
                            <font-awesome-icon icon="fa-solid fa-language " size="2xl" color="rgb(75 85 99)"/>
                        </div>
                        <p class="text-2sm text-gray-900">Place of Interest</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Wat Lanka</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Cambodian Independence Monument</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Status of King Father Norodom Sihaknouk</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Preah Sihanouk Garden</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>


                    <div class="flex items-center space-x-3 pt-4">
                        <div class="p-2 bg-gray-100 border border-gray-200">
                            <font-awesome-icon icon="fa-solid fa-language" size="2xl" color="rgb(75 85 99)"/>
                        </div>
                        <p class="text-2sm text-gray-900">Natural Beauty</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Kid City Asia</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Paragon Supermarket</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Phnom Penh Tower</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">AEON Mall</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>

                    <div class="flex items-center space-x-3 pt-4">
                        <div class="p-2 bg-gray-100 border border-gray-200">
                            <font-awesome-icon icon="fa-solid fa-language" size="2xl" color="rgb(75 85 99)"/>
                        </div>
                        <p class="text-2sm text-gray-900">Close Airports</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Pochentong Airport</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>

                    <div class="flex items-center space-x-3 pt-4">
                        <div class="p-2 bg-gray-100 border border-gray-200">
                            <font-awesome-icon icon="fa-solid fa-language" size="2xl" color="rgb(75 85 99)"/>
                        </div>
                        <p class="text-2sm text-gray-900">Resturant</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Royal Palace Phnom Penh</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Toul Sleng Museum</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Toul Sleng Genocide Museum</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-2sm text-gray-900 pl-16">Chaktomok HAll</p>
                        <p class="text-2sm text-gray-500 pl-16">0.2 KM</p>
                    </div>
                    
                </div>
                <!-- <div class="" v-for="item in jsonData.items">
                    <div class="bg-red-500 p-8" v-if="item.status === 'Pending'">{{ item.status }}</div>
                   
                </div> -->
                
            </div>

           
            <div class="flex justify-center pb-6 w-full py-4 px-1">
                <router-link to="/hotel/hotelViewByMap" class="w-full">
                    <p class="p-3 w-full text-center ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer hover:bg-blue-700 hover:text-white">SHOW ALL PROPERTIES SURROUNDING ON MAP</p>
                </router-link>
            </div> 

        </el-tab-pane>

    </el-tabs>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  import type { TabsPaneContext } from 'element-plus';
  import { ChatLineRound } from "@element-plus/icons-vue";
  import { ChatRound} from "@element-plus/icons-vue";
  import jsonData from "../data/countries.json";
  
  const activeName = ref('first')
  
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }
  const format = (percentage) => (percentage / 10)

  const isShow = ref(false);
    const showMore = () =>{
    isShow.value =! isShow.value;
    }
  </script>
  <style>

  .el-tabs--card>.el-tabs__header .el-tabs__nav {
    width: 100%;
    
  }
  .el-tabs--card>.el-tabs__header .el-tabs__nav .active{
    background-color: #005eff;
  }
  .el-tabs__item{
    width: 100%;
  }
  .el-tabs__item.is-active {
    background-color: rgb(29 78 216);
    color: #ffff;
  }
  </style>
  