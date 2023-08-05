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
            <div class="flex flex-col items-center space-y-2">
                <img src="../assets/tree.png" class="w-60 p-6 opacity-40"  alt="tree">
                <p class="text-5sm font-bold text-gray-700">This property has not been rated yet</p>
                <p class="text-sm text-gray-500">We have not gathered sufficient information to determine a ratng for this accommodation</p>
            </div>
            
        </el-tab-pane>

        <el-tab-pane label="PROPERTY SURROUNDING" name="fourth" class="space-y-4 ">
            <div class="flex flex-col items-center space-y-2">
                <img src="../assets/tree.png" class="w-60 p-6 opacity-40"  alt="tree">
                <p class="text-5sm font-bold text-gray-700">This is no property surrounding</p>
                <p class="text-sm text-gray-500">This accommodation has not provided any data on its surrounding.</p>
            </div>

        </el-tab-pane>

    </el-tabs>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  import type { TabsPaneContext } from 'element-plus';
  import { ChatLineRound } from "@element-plus/icons-vue";
    import { ChatRound} from "@element-plus/icons-vue";
 
  
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
  