<script setup>

import { ref } from "vue";
import Navigation from "../../components/Navigation.vue";
import FooterContent from "../../components/FooterContent.vue";
import { LocationInformation,User, KnifeFork } from "@element-plus/icons-vue";

const Cardrate = ref([5]);
</script>
<template>
    <div class="common-layout bg-gray-100">
        <el-container class="">
            <el-header>
                <Navigation class="bg-blue-900" />
                <div class="w-full p-4">
                    <h1 class="text-4xl text-center font-bold text-green-500 py-2">Congratulation! Your booking is now confirmed.</h1>
                    <p class="text-sm text-gray-600 px-24 text-center">You booking at Mekong Dragon Hotel is already confirm. Please check your inbox yo see your details. You can change your booking online at anytime.</p>
                </div>
            </el-header>

            <el-container class="px-16 py-8">
                <el-aside width="370px" class="space-y-4">
                    <div class="fex flex-col p-4 bg-blue-100 shadow-sm space-y-2 h-fit border border-gray-200">
                        <div class="px-4 py-2">
                            <h6 class="text-blue-800 text-[16px] font-bold">
                               IS EVERYTHING CORRECT?
                            </h6>
                            <p class="text-gray-500 text-sm">You can alway view or change your booking online - no registration required.</p>
                            <div class="flex flex-col space-y-2 py-4">
                                <el-button plain color=" rgb(30 64 175)" class="rounded-full">EDIT CREDIT CARD DETAIL</el-button>
                                <el-button plain color=" rgb(30 64 175)" class="rounded-full">ADD ROOM(S)</el-button>
                            </div>
                            <p class="text-green-500 font-medium text-sm">Tip: You can make changes this book at any time you sigin in.</p>
                        </div>
                    </div>
                    <div class="fex flex-col p-4 bg-white shadow-sm space-y-2 h-fit border border-gray-200">
                        <div class="px-4 py-2 space-y-4">
                            <h6 class="text-blue-800 text-[16px] font-medium">
                                Family Trip
                            </h6>
                            <div class="flex flex-col space-y-2">
                                <div class="flex space-x-2 justify-between text-gray-700 text-sm">
                                   <div >
                                    <p class="font-medium">3 Room(s)</p>
                                    <p class="text-gray-500 text-[12px]">(Services/extra beds includes)</p>
                                   </div>
                                   <p class="font-bold">US$ 1,060.00</p>
                                </div>

                                <div class="flex space-x-2 justify-between text-gray-700 text-sm">
                                   <div >
                                    <p class="font-medium">Discount</p>
                                    <p class="text-gray-500 text-[12px]">Secret Deal</p>
                                   </div>
                                   <p class="font-bold">US$ 1,060.00</p>
                                </div>
                                <div class="flex space-x-2 justify-between text-blue-700 text-sm">
                                    <p class="font-medium">SUBTOTAL 1</p>
                                    <p class="font-bold">US$ 954.00</p>
                                </div>
                            </div>

                            <div class="flex flex-col space-y-2">
                                <div class="flex space-x-2 justify-between text-gray-700 text-sm">
                                   <div >
                                    <p class="font-medium">Services Charge (SVC)</p>
                                    <p class="text-gray-500 text-[12px]"></p>
                                   </div>
                                   <p class="font-bold">US$ 47.70</p>
                                </div>
                                <div class="flex space-x-2 justify-between text-blue-700 text-sm">
                                    <p class="font-medium">NET PRICE </p>
                                    <p class="font-bold">US$ 1,001.70</p>
                                </div>
                            </div>

                            <div class="flex flex-col space-y-2">
                                <div class="flex space-x-2 justify-between text-blue-700 text-sm">
                                   <div >
                                    <p class="font-medium">TAXABLE AMOUNT</p>
                                    <p class="text-gray-500 text-[12px]">(Exclude donation)</p>
                                   </div>
                                   <p class="font-bold">US$ 941.60</p>
                                </div>
                                <div class="flex space-x-2 justify-between text-gray-700 text-sm">
                                    <p class="font-medium">City tax</p>
                                    <p class="font-bold">US$ 18.83</p>
                                </div>
                                <div class="flex space-x-2 justify-between text-gray-700 text-sm">
                                    <p class="font-medium">Vat</p>
                                    <p class="font-bold">US$ 94.16</p>
                                </div>
                            </div>

                            <div class="flex flex-col space-y-2">
                                <div class="flex space-x-2 justify-between text-blue-700 text-sm">
                                   <div >
                                    <p class="font-medium">RESERVATION PRICE</p>
                                    <p class="text-gray-500 text-[12px]">(Gross price + Taxes)</p>
                                   </div>
                                   <p class="font-bold">US$ 1,114.69</p>
                                </div>
                            </div>

                            <div class="flex flex-col space-y-2">
                                <div class="flex space-x-2 justify-between text-blue-700 text-sm">
                                   <div >
                                    <p class="font-medium">DISCONT</p>
                                    <p class="text-gray-500 text-[12px]">(Special event)</p>
                                   </div>
                                   <p class="font-bold">- US$ 10.00</p>
                                </div>
                            </div>

                            <div class="flex flex-col space-y-2">
                                <div class="flex space-x-2 justify-between text-red-500 text-sm">
                                   <div >
                                    <p class="font-medium">TOTAL</p>
                                    <p class="text-gray-500 text-[12px]">You will pay at the property</p>
                                   </div>
                                   <p class="font-medium">US$ 1,104.69</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fex flex-col p-4 bg-white shadow-sm space-y-2 h-fit border border-gray-200">
                        <div class="px-4 py-2 space-y-4">
                            <h6 class="text-blue-800 text-[16px] font-medium">
                                CHECK-IN/CHECK-OUT DATE
                            </h6>
                            <div class="flex flex-col space-y-2">
                                <div class="flex space-x-2 justify-between text-gray-500 text-sm">
                                    <p class="">Check-in</p>
                                    <p class="text-gray-700 font-medium">Thu, 20 Aug 2018</p>
                                </div>
                                <div class="flex space-x-2 justify-between text-gray-500 text-sm">
                                    <p class="">Check-out</p>
                                    <p class="text-gray-700 font-medium">Fri, 21 Aug 2018</p>
                                </div>

                                <div class="flex space-x-2 justify-between text-gray-500 text-sm">
                                    <p class="">Total Stay</p>
                                    <p class="text-gray-700 font-medium">1 night(s)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fex flex-col p-4 bg-white shadow-sm space-y-2 h-fit border border-gray-200">
                        <div class="px-4 py-2 space-y-4">
                            <h6 class="text-blue-800 text-[16px] font-medium">
                                YOUR BOOKING INCLUDED
                            </h6>
                            <div class="grid grid-cols-3 gap-2">

                                <p class="col-span-1 px-1 py-1 bg-gray-200 text-sm text-gray-900 flex justify-center">Breakfast</p>
                                <p class="col-span-1 px-1 py-1 bg-gray-200 text-sm text-gray-900 flex justify-center">Free Wifi</p>
                                <p class="col-span-1 px-1 py-1 bg-gray-200 text-sm text-gray-900 flex justify-center">Free Parking</p>

                            </div>
                        </div>
                    </div>

                    <div class="fex flex-col p-4 bg-white shadow-sm space-y-2 h-fit border border-gray-200">
                        <div class="px-4 py-2 space-y-4">
                            <h6 class="text-blue-800 text-[16px] font-medium">
                                PROPERTIES POLOCIES 
                            </h6>
                            <div class="flex flex-col space-y-4">
                                <div class="flex space-x-2 text-gray-500 text-sm">
                                    <p class="">Parking:</p>
                                    <p class="text-gray-700 ">Free, Public, Off site</p>
                                </div>

                                <div class="flex space-x-2 text-gray-500 text-sm">
                                    <p class="">Children:</p>
                                    <p class="text-gray-700 ">Not allowed</p>
                                </div>

                                <div class="flex space-x-2 text-gray-500 text-sm">
                                    <p class="">Internet:</p>
                                    <p class="text-gray-700 ">Free Wifi property</p>
                                </div>

                                <div class="flex space-x-2 text-gray-500 text-sm">
                                    <p class="">Langauges:</p>
                                    <p class="text-gray-700 ">English, Arabic, Khmer</p>
                                </div>

                                <div class="flex space-x-2 text-gray-500 text-sm">
                                    <p class="">Internet:</p>
                                    <p class="text-gray-700 ">Free Wifi property</p>
                                </div>

                                <div class="flex space-x-2 text-gray-500 text-sm">
                                    <p class="">Checkin time:</p>
                                    <p class="text-gray-700 ">13:00 AM</p>
                                </div>

                                <div class="flex space-x-2 text-gray-500 text-sm">
                                    <p class="">Checkout time:</p>
                                    <p class="text-gray-700 ">12:00 PM</p>
                                </div>

                                <div class="flex space-x-2 text-gray-500 text-sm">
                                    <p class="">Card Accept:</p>
                                    <p class="text-gray-700 ">VISA, America Express</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                </el-aside>
                <el-container class="pl-8">
                    <el-main class="">
                        <div class="space-y-8">
                            <div class="fex flex-col p-4 bg-white space-y-2">
                                <div class="flex w-full">
                                    <div class="w-48 p-2">
                                        <img src="../../assets/room.jpg" alt="" class="h-full bg-cover">
                                    </div>
                                    <div class="flex flex-col p-2 space-y-2 w-full">
                                        <h2 class="text-gray-800 text-xl font-semibold">Mekong Hotel Boutique</h2>
                                        <div class="flex">
                                            <el-rate v-model="Cardrate" class="h-4" disabled/>
                                        </div>
                                        <div class="flex space-x-1">
                                            <LocationInformation class="w-5" color="rgb(156 163 175)"/>
                                            <p class="text-gray-500 text-sm">No.134, Stree.51, Beoung Keng Kang I, Chamkar Mon, Phnom Penh, Cambodia</p>
                                        </div>
                                        <div class="flex items-center space-x-3">
                                            <p class="py-1 px-5 bg-green-500 text-white text-xl font-bold ring-1 ring-green-400">
                                            7.5
                                            </p>
                                            <p class="text-green-500 font-bold text-xl">Good</p>
                                            <span class="border-l border-gray-700 h-4 opacity-40" ></span>
                                            <p class="text-gray-500 text-[14px] opacity-70">
                                                from 912 reviews
                                            </p>
                                        </div>
                                        <p class="text-sm text-green-500">This properties is in good location. Guest have rate it 8.7</p>
                                    </div>
                                </div>

                            </div>

                            <div class="fex flex-col p-4 bg-white space-y-2">
                                <div class="flex justify-between w-full px-4">
                                    <div class="grid grid-cols-2 w-1/2">
                                        <p class="col-span-1 text-sm text-gray-500 py-2">Booking ID:</p>
                                        <p class="col-span-1 text-sm text-gray-700 py-2">175.306.208</p>
                                        <p class="col-span-1 text-sm text-gray-500 py-2">PIN code:</p>
                                        <p class="col-span-1 text-sm text-gray-700 py-2">5514</p>
                                        <p class="col-span-1 text-sm text-gray-500 py-2">Booking detail:</p>
                                        <p class="col-span-1 text-sm text-gray-700 py-2">1 night(s), 2 room(s)</p>
                                        <p class="col-span-1 text-sm text-gray-500 py-2">Check-in:</p>
                                        <p class="col-span-1 text-sm text-gray-700 py-2">Wednesday, 15 March 2023(14:00 - 21:00)</p>
                                        <p class="col-span-1 text-sm text-gray-500 py-2">Booking detail:</p>
                                        <p class="col-span-1 text-sm text-gray-700 py-2">Thueday, 16 March 2023(Untill 12:00)</p>
                                    </div>
                                    <el-button plain color="" class="rounded-full">CANCEL THIS BOOKING</el-button>
                                </div>
                               

                            </div>

                            <div class="">
                                <div class="bg-blue-100 w-full">
                                    <p class="text-blue-800 text-sm p-4 font-medium">YOUR PAYMENT DETAILS</p>
                                </div>
                                <div class="fex flex-col p-4 bg-white space-y-3">
                                    <div class="flex w-full">
                                        <div class="flex flex-col p-2 space-y-2 w-full justify-center">
                                            <p class="text-green-500 text-sm font-medium">YOUR BOOKING IS NOW CONFIRMED.</p>
                                            <p class="text-gray-600 text-sm">Payment will be token durring you stay at Mekong Dragin Hotel.</p>
                                            <p class="text-blue-700 text-2sm ">Resevervation made with Cotafer.com is alway free</p>
                                            <p class="text-gray-500 text-sm ">We never take any payment from guest.</p>
                                        </div>
                                    </div>                            
                                </div>
                            </div>

                            <div class="">
                                <div class="bg-blue-100 w-full">
                                    <p class="text-blue-800 text-sm p-4 font-medium">LISH OF ROOM(s) THAT YOU BOOKED</p>
                                </div>
                                <div class="fex flex-col p-4 bg-white space-y-2">
                                    <div class="flex flex-col">
                                        <div class="flex w-full">
                                            <div class="w-96 p-2">
                                                <img src="../../assets/room.jpg" alt="" class="h-full bg-cover">
                                            </div>
                                            <div class="flex flex-col p-2 space-y-2 w-full justify-center">
                                                <h2 class="text-gray-700 text-xl">Family Suite, 1 King bed with 1 Queen bed and Sofa bed</h2>
                                                <div class="flex space-x-4">
                                                    <div class="flex space-x-2">
                                                        <User class="w-[16px]" color="rgb(156 163 175)"/>
                                                        <p class="text-sm text-gray-500">2 Guest</p>
                                                    </div>
                                                    <KnifeFork class="w-[16px]" color="rgb(55 65 81)"/>
                                                    <font-awesome-icon icon="fa-solid fa-wifi" size="sm" color="rgb(55 65 81)"/>
                                                    <font-awesome-icon icon="fa-solid fa-burger" size="sm" color="rgb(55 65 81)"/>
                                                    <font-awesome-icon icon="fa-solid fa-mug-hot" size="sm" color="rgb(55 65 81)"/>
                                                    <font-awesome-icon icon="fa-solid fa-person-rifle" size="sm" color="rgb(55 65 81)"/>
                                                    <p class="text-sm text-blue-700 hover:underline cursor-pointer">VIEW DETAIL</p>
                                                </div>
                                                <p class="text-s text-blue-700">No repayment requires</p>
                                                <div class="flex space-x-1 ">
                                                    <div class="flex justify-between w-full">
                                                        <div class="flex flex-col">
                                                            <h1 class="text-red-500 text-3xl font-bold text-left">US$ 29 <span class="text-sm font-light">/night</span></h1>
                                                            <p class="text-sm text-green-500">Free cancellation untill 21 March 2023</p>
                                                        </div>
                                                        <el-button plain class="rounded-full py-5"> CANCEL ROOM</el-button>
                                                    </div>
                                                </div>
                                    
                                            </div>
                                        </div>
                                        <div class="flex px-2 items-center space-x-4">
                                            <p class="text-sm text-gray-500">Guest(s) name:</p>
                                            <p class="text-sm text-gray-700 pr-8">Dara Sokha, Pheakdy Sok, Chan Sok</p>
                                            <el-button plain color="rgb(30 64 175) " class="rounded-full py-1 px-5"> Edit</el-button>
                                        </div>
                                    </div>

                                    <div class="flex flex-col">
                                        <div class="flex w-full">
                                            <div class="w-96 p-2">
                                                <img src="../../assets/room.jpg" alt="" class="h-full bg-cover">
                                            </div>
                                            <div class="flex flex-col p-2 space-y-2 w-full justify-center">
                                                <h2 class="text-gray-700 text-xl">Family Suite, 1 King bed with 1 Queen bed and Sofa bed</h2>
                                                <div class="flex space-x-4">
                                                    <div class="flex space-x-2">
                                                        <User class="w-[16px]" color="rgb(156 163 175)"/>
                                                        <p class="text-sm text-gray-500">2 Guest</p>
                                                    </div>
                                                    <KnifeFork class="w-[16px]" color="rgb(55 65 81)"/>
                                                    <font-awesome-icon icon="fa-solid fa-wifi" size="sm" color="rgb(55 65 81)"/>
                                                    <font-awesome-icon icon="fa-solid fa-burger" size="sm" color="rgb(55 65 81)"/>
                                                    <font-awesome-icon icon="fa-solid fa-mug-hot" size="sm" color="rgb(55 65 81)"/>
                                                    <font-awesome-icon icon="fa-solid fa-person-rifle" size="sm" color="rgb(55 65 81)"/>
                                                    <p class="text-sm text-blue-700 hover:underline cursor-pointer">VIEW DETAIL</p>
                                                </div>
                                                <p class="text-s text-blue-700">No repayment requires</p>
                                                <div class="flex space-x-1 ">
                                                    <div class="flex justify-between w-full">
                                                        <div class="flex flex-col">
                                                            <h1 class="text-red-500 text-3xl font-bold text-left">US$ 29 <span class="text-sm font-light">/night</span></h1>
                                                            <p class="text-sm text-green-500">Free cancellation untill 21 March 2023</p>
                                                        </div>
                                                        <el-button plain class="rounded-full py-5"> CANCEL ROOM</el-button>
                                                    </div>
                                                </div>
                                    
                                            </div>
                                        </div>
                                        <div class="flex px-2 items-center space-x-4">
                                            <p class="text-sm text-gray-500">Guest(s) name:</p>
                                            <p class="text-sm text-gray-700 pr-8">Amanda Byness</p>
                                            <el-button plain color="rgb(30 64 175) " class="rounded-full py-1 px-5"> Edit</el-button>
                                        </div>
                                    </div>

                                    <div class="flex flex-col">
                                        <div class="flex w-full">
                                            <div class="w-96 p-2">
                                                <img src="../../assets/room.jpg" alt="" class="h-full bg-cover">
                                            </div>
                                            <div class="flex flex-col p-2 space-y-2 w-full justify-center">
                                                <h2 class="text-gray-700 text-xl">Family Suite, 1 King bed with 1 Queen bed and Sofa bed</h2>
                                                <div class="flex space-x-4">
                                                    <div class="flex space-x-2">
                                                        <User class="w-[16px]" color="rgb(156 163 175)"/>
                                                        <p class="text-sm text-gray-500">2 Guest</p>
                                                    </div>
                                                    <KnifeFork class="w-[16px]" color="rgb(55 65 81)"/>
                                                    <font-awesome-icon icon="fa-solid fa-wifi" size="sm" color="rgb(55 65 81)"/>
                                                    <font-awesome-icon icon="fa-solid fa-burger" size="sm" color="rgb(55 65 81)"/>
                                                    <font-awesome-icon icon="fa-solid fa-mug-hot" size="sm" color="rgb(55 65 81)"/>
                                                    <font-awesome-icon icon="fa-solid fa-person-rifle" size="sm" color="rgb(55 65 81)"/>
                                                    <p class="text-sm text-blue-700 hover:underline cursor-pointer">VIEW DETAIL</p>
                                                </div>
                                                <p class="text-s text-blue-700">No repayment requires</p>
                                                <div class="flex space-x-1 ">
                                                    <div class="flex justify-between w-full">
                                                        <div class="flex flex-col">
                                                            <h1 class="text-red-500 text-3xl font-bold text-left">US$ 29 <span class="text-sm font-light">/night</span></h1>
                                                            <p class="text-sm text-green-500">Free cancellation untill 21 March 2023</p>
                                                        </div>
                                                        <el-button plain class="rounded-full py-5"> CANCEL ROOM</el-button>
                                                    </div>
                                                </div>
                                    
                                            </div>
                                        </div>
                                        <div class="flex px-2 items-center space-x-4">
                                            <p class="text-sm text-gray-500">Guest(s) name:</p>
                                            <p class="text-sm text-gray-700 pr-8">Amanda Byness</p>
                                            <el-button plain color="rgb(30 64 175) " class="rounded-full py-1 px-5"> Edit</el-button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="">
                                <div class="bg-blue-100 w-full">
                                    <p class="text-blue-800 text-sm p-4 font-medium">CONVERSATION PROPERTY</p>
                                </div>
                                <div class="w-full flex flex-col overflow-hidden h-auto bg-white">
                                    <div
                                    class="w-full py-8 flex flex-col space-y-6 justify-center float-right"
                                    >
                                    <div class="flex justify-end">
                                        <div class="bg-blue-700 text-white w-3/5 px-4 py-6">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                                            possimus voluptatum nisi id tenetur, modi dicta cumque
                                            quaerat corporis eveniet.
                                        </p>
                                        <p class="text-sm text-right text-gray-200">
                                            27 Mar 2023 13:00
                                        </p>
                                        </div>
                                    </div>
                                    <div class="flex justify-start">
                                        <div class="bg-gray-200 text-gray-700 w-3/5 px-4 py-6">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                                            possimus voluptatum nisi id tenetur, modi dicta cumque
                                            quaerat corporis eveniet.
                                        </p>
                                        <p class="text-sm text-right text-gray-500">
                                            27 Mar 2023 13:00
                                        </p>
                                        </div>
                                    </div>
                                    <div class="flex justify-end">
                                        <div class="bg-blue-700 text-white w-3/5 px-4 py-6">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                                            possimus voluptatum nisi id tenetur, modi dicta cumque
                                            quaerat corporis eveniet.
                                        </p>
                                        <p class="text-sm text-right text-gray-200">
                                            27 Mar 2023 13:00
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="w-full bg-white">
                                    <div class="flex justify-between px-8 py-2 items-center">
                                        <input
                                        type="text"
                                        placeholder="Message Here...."
                                        class="focus:outline-none text-gray-700 w-full py-3 px-4 rounded-full  pr-16 focus:border focus:border-blue-700"
                                        />
                                        <el-button
                                        type="primary"
                                        plain
                                        color="rgb(30 64 175)"
                                        class="rounded-full px-8 py-6"
                                        >
                                        SEND
                                        </el-button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </el-main>
                </el-container>
            </el-container>
            <div class="bg-white w-full p-16 space-y-6">
                <div class="space-y-2">
                    <h1 class="text-green-500 text-3xl font-bold text-center">You got $17 to give and build hope</h1>
                    <p class="text-sm text-gray-600 text-center">We strive to ensure that your jouney is fun, safe, meaningful ad successful. Therefore you will be partner in very step of the you donation with Cotafer Foundation. You may choose from one of the project listed here to make your donation now or save this sum for later donation. Your donation will be register and pending untill the systemverify your payment status.</p>
                </div>
              <div class="grid grid-cols-4 gap-8 ">

                <div class="col-span-1 flex flex-col hover:shadow-xl cursor-pointer">
                  <img src="../../assets/angkorHospital.jpg" class=" h-fit" alt="room">
                  <div class="flex flex-col p-4">
                    <p class="text-2sm text-blue-700 cursor-pointer hover:underline">Angkor Hospital for children</p>
                    <p class="text-sm text-gray-600">The Angkor Hospital for childen (AHC). is a charitable organiztion, was found by Jappanese phtographer Kento...</p>
                  </div>
                </div>

                <div class="col-span-1 flex flex-col hover:shadow-xl cursor-pointer">
                  <img src="../../assets/angkorHospital.jpg" class=" h-fit" alt="room">
                  <div class="flex flex-col p-4">
                    <p class="text-2sm text-blue-700 cursor-pointer hover:underline">Angkor Hospital for children</p>
                    <p class="text-sm text-gray-600">The Angkor Hospital for childen (AHC). is a charitable organiztion, was found by Jappanese phtographer Kento...</p>
                  </div>
                </div>

                <div class="col-span-1 flex flex-col hover:shadow-xl cursor-pointer">
                  <img src="../../assets/angkorHospital.jpg" class=" h-fit" alt="room">
                  <div class="flex flex-col p-4">
                    <p class="text-2sm text-blue-700 cursor-pointer hover:underline">Angkor Hospital for children</p>
                    <p class="text-sm text-gray-600">The Angkor Hospital for childen (AHC). is a charitable organiztion, was found by Jappanese phtographer Kento...</p>
                  </div>
                </div>

                <div class="col-span-1 flex flex-col hover:shadow-xl cursor-pointer">
                  <img src="../../assets/angkorHospital.jpg" class=" h-fit" alt="room">
                  <div class="flex flex-col p-4">
                    <p class="text-2sm text-blue-700 cursor-pointer hover:underline">Angkor Hospital for children</p>
                    <p class="text-sm text-gray-600">The Angkor Hospital for childen (AHC). is a charitable organiztion, was found by Jappanese phtographer Kento...</p>
                  </div>
                </div>

              </div>

              <div class="flex justify-center">
                <el-button plain color="rgb(29 78 216)" class=" p-5 text-sm rounded-sm mx-2">DONATE</el-button>
                <el-button plain color="rgb(29 78 216)" class=" p-5 text-sm rounded-sm mx-2">SAVE FOR LATER</el-button>
              </div>

              <p class="text-sm text-gray-600 text-center px-4">Cotafer foundation was found to ensure the system of online donation that will allow people around the global to connect and share and to make the better place for everyone. Visit their website to browse for more charity projects and testimnies and witness how your contribution may impact the life of the people you choose help. Login to Cotafer Foundation using your Cotafer Account, you can easily manage your donation fund and view all your donation history.</p>

            </div> 
            <footer class="">
                <FooterContent />
            </footer>
        </el-container>
    </div>
</template>

<style scoped>
.el-button + .el-button {
    margin-left: 0;
}
</style>