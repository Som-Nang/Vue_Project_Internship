<template>
    <el-container class="p-4 pt-12">
        <el-main>
            <div class="relative flex flex-col justify-center items-center h-fit py-4">
            <!-- <iframe src="https://www.google.com/maps/d/embed?mid=1sdWiQ4Y-nCrmHvjoIcfE0Szd9EEIP_I&ehbc=2E312F" width="100%" height="100%" class="ctfGoogleMap">
                
            </iframe> -->
            <GoogleMap
                api-key="AIzaSyBr5ur-nQnHaXRvZBiZSDvUPBnAAL69F7s"
                style="width: 100%; height: 600px"
                :center="center"
                :zoom="15"
                >
                <MarkerCluster>
                    <Marker v-for="(location, i) in locations" :options="{ position: location } " :key="i" >
                   
            
                    <InfoWindow class="">
                        <div id="contet" class="">
                            <div id="siteNotice"></div>
                            <div id="bodyContent">
                                <div class="space-y-2 p-2 w-fit">
                                <div class="relative flex flex-col justify-between h-full bg-white ">
                                    <div class="flex">
                                        <!-- right -->
                                        <div class="flex flex-col space-y-2 p-2">
                                        <h1 class="text-gray-800 text-xl font-semibold">
                                           MEKONG
                                        </h1>
                                        <el-rate v-model="Cardrate" class="h-2" disabled />

                                        <div class="flex space-x-1">
                                            <span
                                            ><LocationInformation
                                                class="w-[20px]"
                                                color="rgb(107 114 128"
                                            /></span>
                                            <p class="text-gray-500 text-xl">
                                            Phnom Penh, Cambodia
                                            </p>
                                        </div>

                                        <div class="flex items-center space-x-2">
                                            <p
                                            class="py-1 px-5 bg-green-500 text-white text-xl font-bold ring-1 ring-green-400"
                                            >
                                            7.5
                                            </p>
                                            <p class="text-green-500 font-bold text-xl">Good</p>
                                            <span
                                            class="border-l border-gray-700 h-4 opacity-40"
                                            ></span>
                                            <p class="text-gray-500 text-[14px] opacity-70">
                                            from 912 reviews
                                            </p>
                                        </div>

                                        <div class="flex justify-between">
                                            <div class="space-y-2">
                                            <p class="text-sm text-blue-700">
                                                Only 5 rooms left at the property
                                            </p>
                                            <p class="text-sm text-blue-700">
                                                Book 3 times today
                                            </p>
                                            <p class="text-sm text-red-500">
                                                5 people are looking at this
                                            </p>
                                            </div>
                                            <div class="text-sm text-gray-700 space-y-2 text-right">
                                            <p class="text-sm">
                                                Free breakfast - Free cancellation
                                            </p>
                                            <p class="text-sm">No payment needed</p>
                                            <p class="text-sm">Reserve without credit card</p>
                                            </div>
                                        </div>
                                        </div>
                                        <!-- left -->
                                        <div class="pl-4 w-2/5">
                                        <div class="relative w-full h-36">
                                            <img
                                            class="absolute object-cover w-full h-36"
                                            src="../../assets/room.jpg"
                                            alt=""
                                            />
                                            <div class="absolute h-full w-full">
                                            <div
                                                class="absolute right-1 py-1 my-1 space-x-1 flex bg-white px-2 rounded-full"
                                            >
                                                <p class="text-blue-700 top-0 right-0 text-sm">
                                                Extra 10%
                                                </p>
                                                <img
                                                src="../../assets/logoSmall.png"
                                                class="w-5"
                                                alt=""
                                                />
                                            </div>

                                            <p
                                                class="absolute text-white bottom-0 bg-red-500 px-3 py-1 rounded-sm text-sm right-0"
                                            >
                                                Deal of the day
                                            </p>
                                            </div>
                                        </div>
                                        <div class="flex flex-col">
                                            <div
                                            class="flex space-x-2 px-4 py-2 items-center justify-end"
                                            >
                                            <p class="text-gray-500 text-2sm line-through">
                                                US$ 117
                                            </p>
                                            <p class="text-red-500 font-semibold text-3xl">
                                                US$ 107
                                            </p>
                                            </div>
                                            <p
                                            class="flex text-red-500 justify-end text-sm pb-6 px-4"
                                            >
                                            Expired in 4h 23min 30sec. Only 2 rooms left
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                  
                                </div>
                                </div>
                            </div>
                        </div>
                    </InfoWindow>
                </Marker>
                </MarkerCluster>
                </GoogleMap>  
        </div>
        </el-main>
    </el-container>
    
        
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { GoogleMap, Marker, MarkerCluster ,InfoWindow} from 'vue3-google-map';
  import { LocationInformation } from "@element-plus/icons-vue";
import { ref } from 'vue';
  
  export default defineComponent({
    components: { GoogleMap, Marker, MarkerCluster,InfoWindow,LocationInformation },
    setup() {
      const center = { lat: 11.554247, lng:  104.926572};
     
      const locations = [
        { lat: 11.555605, lng: 104.927323},
        { lat: 11.556172, lng: 104.928497},
        { lat: 11.575635, lng:104.922903},
        { lat: 11.560569, lng:104.932197},
        { lat: 11.563843, lng:104.930968},
        { lat: 11.547747,  lng:104.933216},
        
      ]
   
      const Cardrate = ref(2);
      return { center, locations,Cardrate}
    
    },
  })
  </script>


  