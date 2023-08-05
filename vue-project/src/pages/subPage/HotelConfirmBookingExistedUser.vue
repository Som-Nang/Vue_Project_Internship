<script setup>

import { ref } from "vue";
import Navigation from "../../components/Navigation.vue";
import FooterContent from "../../components/FooterContent.vue";
import { LocationInformation,User, KnifeFork } from "@element-plus/icons-vue";
const radio1 = ref('1');
const Cardrate = ref([5]);
const clickAddCreditCard = ref(false);
const value = ref("");
const options = [
  {
    value: "I don't know",
    label: "I don't know",
  },
  {
    value: "Yeah",
    label: "Yeah",
  },
  {
    value: "Maybe",
    label: "Maybe",
  },
];
const value3 = ref('+855')
const options3 = [
{
    value3: '+855',
    label: '+855',
  },

]
const value4 = ref('')
const options4 = [
  {
    value: 'Cambodia',
    label: 'Cambodia',
  },
  {
    value: 'Thailand',
    label: 'Thailand',
  },
  {
    value: 'Vietnam',
    label: 'Vietnam',
  },
  {
    value: 'Loa',
    label: 'Loa',
  },


]
const value5 = ref("");
const options5 = [
  {
    value: "VISA CARD",
    label: "VISA CARD",
  },
  {
    value: "MASTER CARD",
    label: "MASTER CARD",
  },
  {
    value: "AMERICA EXPRESS",
    label: "AMERICA EXPRESS",
  },
];
</script>
<template>
    <div class="common-layout bg-gray-100">
        <el-container class="space-y-5">
            <el-header>
                <Navigation class="bg-blue-900" />
                <div class="bg-white w-full p-4">
                    <h6 class="text-2sm text-center text-blue-700 py-2">No account needed! - it's take only 2 minutes to book!</h6>
                </div>
            </el-header>

            <el-container class="px-16">
                <el-aside width="370px" class="space-y-4">
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

                            <div class="">
                                <div class="bg-blue-100 w-full">
                                    <p class="text-blue-800 text-sm p-4 font-medium">LISH OF ROOM(s) THAT YOU BOOKED</p>
                                </div>
                                <div class="fex flex-col p-4 bg-white space-y-2">
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
                                            <Label class="space-x-2">
                                                <input type="checkbox" />
                                                <span class="text-sm text-gray-500">I am booking for other person</span>
                                            </Label>
                                            <div class="flex space-x-1 ">
                                                <div class="flex justify-between w-full">
                                                    <input class="w-1/2 text-sm text-gray-500 pl-3 pr-8 py-3 border border-gray-200 focus:outline-none" type="text" placeholder="Enter full guest(s) name">
                                                    <div class="flex flex-col">
                                                        <h1 class="text-red-500 text-3xl font-bold text-right">US$ 29 <span class="text-sm font-light">/night</span></h1>
                                                        <p class="text-sm text-green-500">Free cancellation untill 21 March 2023</p>
                                                    </div>
                                                </div>
                                            </div>
                                
                                        </div>
                                    </div>

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
                                            <Label class="space-x-2">
                                                <input type="checkbox" value="1" checked/>
                                                <span class="text-sm text-gray-500" >I am booking for other person</span>
                                            </Label>
                                            <div class="flex space-x-1 ">
                                                <div class="flex justify-between w-full">
                                                    <input value="Dara Sokha, Pheakdey Sok, Chan Sok" class="w-1/2 text-sm text-gray-500 pl-3 pr-8 py-3 border border-gray-200 focus:outline-none" type="text" placeholder="Enter full guest(s) name">
                                                    <div class="flex flex-col">
                                                        <h1 class="text-red-500 text-3xl font-bold text-right">US$ 29 <span class="text-sm font-light">/night</span></h1>
                                                        <p class="text-sm text-green-500">Free cancellation untill 21 March 2023</p>
                                                    </div>
                                                </div>
                                            </div>
                                
                                        </div>
                                    </div>

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
                                            <Label class="space-x-2">
                                                <input type="checkbox" value="1" checked/>
                                                <span class="text-sm text-gray-500" >I am booking for other person</span>
                                            </Label>
                                            <div class="flex space-x-1 ">
                                                <div class="flex justify-between w-full">
                                                    <input value="Dara Sokha, Pheakdey Sok, Chan Sok" class="text-sm w-1/2 text-gray-500 pl-3 pr-8 py-3 border border-gray-200 focus:outline-none" type="text" placeholder="Enter full guest(s) name">
                                                    <div class="flex flex-col">
                                                        <h1 class="text-red-500 text-3xl font-bold text-right">US$ 29 <span class="text-sm font-light">/night</span></h1>
                                                        <p class="text-sm text-green-500">Free cancellation untill 21 March 2023</p>
                                                    </div>
                                                </div>
                                            </div>
                                
                                        </div>
                                    </div>

                                    <div class="flex justify-between items-center p-4">
                                        <p class="text-gray-800 text-4sm font-medium">DO YOU WANT TO MAKE CHANGE YOUR BOOKING?</p>
                                        <div class="flex space-x-4">
                                            <el-button plain color=" rgb(30 64 175)" class="p-6 text-4sm font-medium">ADD ROOM(S)</el-button>
                                            <el-button plain color=" rgb(30 64 175)" class="p-6 text-4sm font-medium">GO BACK PROPERTY PAGE</el-button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="">
                                <div class="bg-blue-100 w-full">
                                    <p class="text-blue-800 text-sm p-4 font-medium">MEMBERSHIP BENIFITS</p>
                                </div>
                                <div class="fex flex-col p-4 bg-white space-y-2">
                                    <div class="flex w-full">
                                        <div class="flex flex-col p-2 space-y-4 w-full justify-center">
                                            <Label class="flex flex-col">
                                                <div class="space-x-2">
                                                    <input type="checkbox"/>
                                                    <span class="text-2sm font-medium text-blue-700" >Breakfast</span>
                                                </div>
                                                <p class="text-sm text-gray-500 pl-5">Yes we'd like breakfast durring our stay at no additional cost</p>
                                            </Label>

                                            <Label class="flex flex-col">
                                                <div class="space-x-2">
                                                    <input type="checkbox"/>
                                                    <span class="text-2sm font-medium text-blue-700" >I'm interested rending a car</span>
                                                </div>
                                                <p class="text-sm text-gray-500 pl-5">We'll include relevent hire option from <span class="cursor-pointer text-blue-700 underline">Retalcar.com</span> in your confirmation.</p>
                                            </Label>
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                            <!-- payment inforamation -->
                            <div class="">
                                <div class="bg-blue-100 w-full">
                                    <p class="text-blue-800 text-sm p-4 font-medium">ENTER YOUR DETAIL</p>
                                </div>
                                <div class="fex flex-col p-4 bg-white space-y-2">
                                    <div class="px-4 flex justify-end space-x-1 items-center">
                                        <p class="text-sm text-blue-600 pr-4">Not me! <span class="underline cursor-pointer">Sign out</span></p>
                                        
                                    </div>  
                                    <div class="flex flex-col justify-center items-center space-y-2">
                                    <h1 class="text-4xl text-gray-800 font-bold">DIN XOMNANG</h1>
                                    <p class="text-sm text-gray-600">sample@mail.com</p>
                                    <p class="text-sm text-gray-600">+855(0)12 909 999. Cambodia</p>
                                    <p class="text-sm text-blue-700 cursor-pointer hover:underline">Edit Info</p>
                                    </div>                            
                                </div>
                            </div> 
                            <!-- payment inforamation -->

                            <!-- Card inforamation -->
                            <div class="">
                                <div class="bg-blue-100 w-full">
                                    <p class="text-blue-800 text-sm p-4 font-medium">CREDIT OR DEBIT CARD DETAILS</p>
                                </div>
                                <div class="fex flex-col p-4 bg-white ">
                                    <div class="px-4 flex justify-end space-x-1 items-center">
                                            <p class="text-sm font-medium text-green-500 pr-4">PROPERTY ACCEPTED CARD</p>
                                            <img src="../../assets/visa.png" class="w-8" alt="">
                                            <img src="../../assets/jcb.png" class="w-8" alt="">
                                            <img src="../../assets/mastercard.png" class="w-8" alt="">
                                        </div>
                                    <div class="flex flex-col w-full p-4">
                                        <p class="text-sm text-gray-600">We keed your card information secure and only release it to the property for a short periord of time.</p>
                                        <p class="text-sm text-gray-800">Please select the card you want to use or <a class="text-blue-700 cursor-pointer hover:underline" @click="clickAddCreditCard = true" >add new credit card or debit card</a></p>
                                    
                                            <el-radio-group v-model="radio1" class="flex flex-col space-y-3 items-start py-4">
                                                <div class="flex items-center">
                                                    <div class="flex flex-col space-x-5 pr-48 justify-center">
                                                        <el-radio label="1" size="large" >
                                                            <div class="flex flex-col justify-center items-start px-1 ">
                                                                <div class="flex space-x-2 items-center">
                                                                    <img src="../../assets/visa.png" class="w-12" alt="">
                                                                    <p class="text-sm  text-gray-800">xxxx xxxx xxxx 1045</p>
                                                                </div>
                                                            </div>
                                                        </el-radio>
                                                        <p class="text-sm text-gray-900 pl-2">11/24</p>
                                                    </div>
                                                    <el-button plain color="rgb(239 68 68 )" class="px-5 h-[38px] border border-gray-300 text-gray-700 text-sm rounded-full cursor-pointer hover:border-red-500 hover:text-white">REMOVE</el-button>
                                                </div>

                                                <div class="flex items-center">
                                                    <div class="flex flex-col space-x-5 pr-48 justify-center">
                                                        <el-radio label="2" size="large" >
                                                            <div class="flex flex-col justify-center items-start px-1 ">
                                                                <div class="flex space-x-2 items-center">
                                                                    <img src="../../assets/mastercard.png" class="w-12" alt="">
                                                                    <p class="text-sm  text-gray-800">xxxx xxxx xxxx 1045</p>
                                                                </div>
                                                            </div>
                                                        </el-radio>
                                                        <p class="text-sm text-red-500 pl-2">Expired</p>
                                                    </div>
                                                    <el-button plain color="rgb(239 68 68 )" class="px-5 h-[38px] border border-gray-300 text-gray-700 text-sm rounded-full cursor-pointer hover:border-red-500 hover:text-white">UPDATE</el-button>
                                                </div>

                                                <div class="flex items-center">
                                                    <div class="flex flex-col space-x-5 pr-48 justify-center">
                                                        <el-radio label="3" size="large" >
                                                            <div class="flex flex-col justify-center items-start px-1 ">
                                                                <div class="flex space-x-2 items-center">
                                                                    <img src="../../assets/jcb.png" class="w-12" alt="">
                                                                    <p class="text-sm  text-gray-800">xxxx xxxx xxxx 1045</p>
                                                                </div>
                                                            </div>
                                                        </el-radio>
                                                        <p class="text-sm text-gray-900 pl-2">11/24</p>
                                                    </div>
                                                    <el-button plain color="rgb(239 68 68 )" class="px-5 h-[38px] border border-gray-300 text-gray-700 text-sm rounded-full cursor-pointer hover:border-red-500 hover:text-white">REMOVE</el-button>
                                                </div>
                                            </el-radio-group>
                                    </div>                            
                                </div>
                            </div>
                            <!-- Card inforamation -->
                            
                            <div class="">
                                <div class="bg-blue-100 w-full">
                                    <p class="text-blue-800 text-sm p-4 font-medium">SPEACIAL REQUEST</p>
                                </div>
                                <div class="fex flex-col p-4 bg-white space-y-2">
                                    <div class="flex w-full">
                                        <div class="flex flex-col p-2 space-y-4 w-full justify-center">
                                        <p class="text-sm text-gray-500">Please write your request. Special requests cannot be guaranted, but the property will do its best to meet your needs. </p>
                                        <textarea class="text h-80 w-full focus:outline-none border border-gray-200 text-gray-800 text-sm p-4" placeholder="Enter Here"></textarea>  
                                        </div>
                                    </div>                            
                                </div>
                            </div>

                            <div class="">
                                <div class="bg-blue-100 w-full">
                                    <p class="text-blue-800 text-sm p-4 font-medium">YOUR ESTIMATED TIME OF ARRIVAL (OPTIONAL)</p>
                                </div>
                                <div class="fex flex-col p-4 bg-white space-y-2">
                                    <div class="flex w-full">
                                        <div class="flex flex-col p-2 space-y-4 w-full justify-center">
                                        <p class="text-sm text-gray-500">24 hours reception: You can arive anytime. your room will be realdy at 14:00</p>
                                        <div class="flex items-center space-x-3">
                                            <p class="text-sm text-gray-800">Arrive time Wednessday 15 March 2023 at</p>
                                            <el-select v-model="value" class="border border-gray-300 px-2 font-medium" placeholder="Select" size="large">
                                                <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                                />
                                            </el-select>
                                        </div>
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                            <p class="text-blue-800 text-sm text-right"> We'll send you insant confirmation to youemail@gmail.com</p>
                            <button class="p-4 w-full bg-blue-800 text-white hover:bg-blue-600 rounded-sm">BOOK NOW</button>
                        </div>
                        <!-- modal -->
                        <el-dialog
                            v-model="clickAddCreditCard"
                            width="40%"
                            destroy-on-close
                            center
                            class=""
                        
                        >
                            <div class="space-x-4">
                                <h1 class="text-2xl text-gray-800 text-center pb-4 font-bold">ADD new credit or debit card</h1>
                                <div class="grid grid-cols-4 gap-4 mb-4">
                                    <div class="col-span-2 space-y-5 border border-gray-300 p-2 h-fit items-center">
                                        <label for="" class="absolute text-xs text-gray-500 pl-1"
                                        >CREDIT CARD TYPE</label
                                        >
                                        <el-select
                                        v-model="value5"
                                        class=""
                                        placeholder="Choose your options"
                                        size="large"
                                        >
                                        <el-option
                                            v-for="item in options5"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        />
                                        </el-select>
                                    </div>
                                    <div  class="col-span-2  h-full flex justify-center items-center">
                                        <input type="text" placeholder="Credit card number" class="h-full text-sm border border-gray-300 focus:outline-none p-3  w-full focus:border-gray-500 text-gray-600">
                                    </div>
                                    <div  class="col-span-2 h-full flex justify-center items-center">
                                        <input type="text" placeholder="Cardholder's name" class="h-full text-sm border border-gray-300 focus:outline-none p-3  w-full focus:border-gray-500 text-gray-600">
                                    </div>
                                    <div class="col-span-1 h-full flex justify-center items-center">
                                        <input type="text" placeholder="Expire date" class="h-full text-sm border border-gray-300 focus:outline-none p-3  w-full focus:border-gray-500 text-gray-600">
                                    </div>
                                    <div class="col-span-1 h-full flex justify-center items-center">
                                        <input type="text" placeholder="CVV" class="h-[76px] text-sm border border-gray-300 focus:outline-none p-3   w-full focus:border-gray-500 text-gray-600">
                                    </div>
                                </div>

                                <label class="space-x-2">
                                    <input type="checkbox" />
                                    <span class="text-sm text-blue-800">Save this card for later booking</span>
                                </label>
                                
                            </div>
                            <template #footer class="">
                            <span class="dialog-footer ">
                                <el-button @click="clickAddCreditCard = false" class="w-full bg-blue-700 text-white hover:bg-blue-600 py-5 px-8">
                                SAVE
                                </el-button>
                            </span>
                            </template>
                        </el-dialog>
                        <!-- modal -->      
                    </el-main>
                </el-container>
            </el-container>
            <footer class="pt-2">
                <FooterContent />
            </footer>
        </el-container>
    </div>
</template>