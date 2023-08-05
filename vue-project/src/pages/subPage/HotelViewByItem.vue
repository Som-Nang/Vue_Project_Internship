<template>
        <el-aside width="370px" class="bg-white shadow-sm h-fit">
          <div class="fex flex-col py-2">
            <div class="px-4 py-2 space-y-2">
              <h6 class="text-blue-800 text-[16px] font-medium">
                PROPERTIES MANAGEMENT TYPE
              </h6>
              <div class="space-y-3 flex flex-col text-sm text-gray-600">
                <Label class="">
                  <input type="checkbox" />

                  <span class="pl-2">Commercial</span>
                </Label>

                <Label>
                  <input type="checkbox" />
                  <span class="pl-2">Hosting</span>
                </Label>
              </div>
              <div class="flex flex-col w-full">
                <p class="text-sm text-blue-800">
                  PRICE:
                  <span class="text-blue-800">
                    {{ "US$" + range[0] + " - US$" + range[1] }}</span
                  >
                </p>
                <el-slider
                  v-model="range"
                  range
                  class="px-1"
                  :step="50"
                  :max="500"
                  color="blue"
                />
              </div>
            </div>

            <div class="px-4 py-2 space-y-2">
              <h6 class="text-blue-800 text-[16px] font-medium">POPULAR</h6>
              <div class="space-y-3 flex flex-col text-sm text-gray-600">
                <Label class="">
                  <input type="checkbox" />
                  <span class="pl-2">Free cancellation</span>
                </Label>

                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free cancellation</span><br
                /></Label>
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free wifi</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Double bed</span></Label
                >
              </div>
              <div class="w-full">
                <p class="text-sm text-blue-800">
                  REVIEW SCORE:
                  <span class="text-blue-800">{{ range2 + " +" }}</span>
                </p>
                <el-slider v-model="range2" class="px-1" :max="10" />
              </div>
              <div class="flex flex-col">
                <span class="text-sm text-blue-800"
                  >STAR RATING:
                  <span class="text-blue-800"> {{ rate }}</span></span
                >
                <el-rate v-model="rate" />
              </div>
            </div>

            <div class="px-4 py-2 space-y-2">
              <h6 class="text-blue-800 text-[16px] font-medium">
                PROPERTY TYPE
              </h6>
              <div class="space-y-3 flex flex-col text-sm text-gray-600">
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Apartment</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Hotel</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Resort</span></Label
                >
              </div>
            </div>

            <div class="px-4 py-2 space-y-2">
              <h6 class="text-blue-800 text-[16px] font-medium">
                FACILITIES AND SERVICES
              </h6>
              <div class="space-y-3 flex flex-col text-sm text-gray-600">
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free breakfast</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free cancellation</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free wifi</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Double bed</span></Label
                >
              </div>
            </div>

            <div class="px-4 py-2 space-y-2">
              <h6 class="text-blue-800 text-[16px] font-medium">
                CANCELATION POLOCY
              </h6>
              <div class="space-y-3 flex flex-col text-sm text-gray-600">
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2"> Free breakfast</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free cancellation</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free wifi</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Double bed</span></Label
                >
              </div>
            </div>

            <div class="px-4 py-2 space-y-2">
              <h6 class="text-blue-800 text-[16px] font-medium">
                ROOM AMENLITIES
              </h6>
              <div class="space-y-3 flex flex-col text-sm text-gray-600">
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free breakfast</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free cancellation</span></Label
                >
                <Label
                  ><input type="checkbox" /> <span class="pl-2">Free wifi</span>
                </Label>
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Double bed</span></Label
                >
              </div>
            </div>

            <div class="px-4 py-2 space-y-2">
              <h6 class="text-blue-800 text-[16px] font-medium">
                BED REFERENCES
              </h6>
              <div class="space-y-3 flex flex-col text-sm text-gray-600">
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free breakfast</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free cancellation</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free wifi</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Double bed</span></Label
                >
              </div>
            </div>

            <div class="px-4 py-2 space-y-2">
              <h6 class="text-blue-800 text-[16px] font-medium">AMBIENCE</h6>
              <div class="space-y-3 flex flex-col text-sm text-gray-600">
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free breakfast</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free cancellation</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free wifi</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Double bed</span></Label
                >
              </div>
            </div>

            <div class="px-4 py-2 space-y-2">
              <h6 class="text-blue-800 text-[16px] font-medium">
                PROPERTIES CHAIN/GROUP
              </h6>
              <div class="space-y-3 flex flex-col text-sm text-gray-600">
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free breakfast</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free cancellation</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free wifi</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Double bed</span></Label
                >
              </div>
            </div>

            <div class="px-4 py-2 space-y-2">
              <h6 class="text-blue-800 text-[16px] font-medium">
                LANGUAGES SPOKEN
              </h6>
              <div class="space-y-3 flex flex-col text-sm text-gray-600">
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free breakfast</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free cancellation</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Free wifi</span></Label
                >
                <Label
                  ><input type="checkbox" />
                  <span class="pl-2">Double bed</span></Label
                >
              </div>
            </div>
          </div>
        </el-aside>
        <el-container class="pl-8">
          <el-main>
            <!-- //Main's Button -->
            <div class="flex justify-between">
              <div class="space-x-5 flex">
                <el-button type="primary" plain color="rgb(30 64 175)" class="">
                  <span class="flex"
                    >RECOMMEND<ArrowDownBold class="w-4 ml-4" />
                  </span>
                </el-button>

                <el-button type="primary" plain color="rgb(30 64 175)" class="">
                  <span class="flex"
                    >PRICE<ArrowDownBold class="w-4 ml-4" />
                  </span>
                </el-button>

                <el-button type="primary" plain color="rgb(30 64 175)" class="">
                  <span class="flex"
                    >GUEST PREVIEW<ArrowDownBold class="w-4 ml-4" />
                  </span>
                </el-button>

                <el-button type="primary" plain color="rgb(30 64 175)" class="">
                  <span class="flex"
                    >BEST DEAL<ArrowDownBold class="w-4 ml-4" />
                  </span>
                </el-button>
              </div>
              
            </div>
            <!-- //Main's Button -->
            <!-- Card -->

             <div
              class="py-4 space-y-4"
              v-for="item in paginatedData"
              :key="item.id"
            >
              <div
                class="relative flex flex-col justify-between w-full h-full bg-white"
              >
                <router-link
                  :to="{ name: 'BookingDetailPage', params: { id: item.id } }"
                >
                  <div class="flex">
                    <!-- right -->
                    <div class="flex flex-col w-3/5 space-y-3 p-8">
                      <h1 class="text-gray-800 text-[28px] font-semibold">
                        {{ item.name }}
                      </h1>
                      <el-rate v-model="Cardrate" class="h-4" disabled />

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

                      <div class="flex items-center space-x-3">
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
                      <div class="relative w-full h-52">
                        <img
                          class="absolute object-cover w-full h-52"
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
                </router-link>

                <!-- Collapse -->
                <div
                  class="z-2 flex items-center bottom-[-200px] justify-center"
                >
                  <div
                    @click="toggleCollapse(item.id)"
                    class="flex justify-center bg-gray-200 py-1 px-2 text-sm z-50 text-gray-600 cursor-pointer space-x-2"
                  >
                    <p>VIEW DETAIL</p>
                    <ArrowUpBold
                      v-if="!collapsedItems.includes(item.id)"
                      aria-hidden="true"
                      class="w-4"
                      color="rgba(75 85 99)"
                    />
                    <ArrowDownBold
                      v-else
                      aria-hidden="true"
                      class="w-4"
                      color="rgba(156 163 175)"
                    />
                  </div>
                </div>
                <!-- <h3 @click="toggleCollapse(item.id)">
                    <h1>Click</h1>
                    <span v-if="!collapsedItems.includes(item.id)">Here</span>
                    <span v-else>[-]</span>
                  </h3>
                  <div v-if="collapsedItems.includes(item.id)">
                    {{ item.name }}
                  </div> -->

                <div class="flex flex-col items-center">
                  <Transition name="collapse1">
                    <div
                      class="w-full overflow-hidden h-auto top-[12px] bg-gray-200"
                      v-if="collapsedItems.includes(item.id)"
                    >
                      <div class="flex justify-center p-8">
                        <ul
                          class="flex text-gray-600 space-x-12 text-sm cursor-pointer"
                          id="subRoute"
                        >
                          <router-link to="/hotel/hotelViewByItem/">ROOM TYPE</router-link>
                          <router-link to="/hotel/hotelViewByItem/detail">DETAILS</router-link>
                          <router-link to="/hotel/hotelViewByItem/review">REVIEWS</router-link>
                          <router-link to="/hotel/hotelViewByItem/surrounding"
                            >SURROUNDIG</router-link
                          >
                        </ul>
                      </div>
                      <router-view v-slot="{ Component }">
                        <transition name="fade" mode="out-in">
                          <component :is="Component"> </component>
                        </transition>
                      </router-view>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

            <!-- Sample Component -->
            <router-link to="/hotel/hotelViewByItem/bookingDetailPageNoneComment">
            <div
                class="relative flex flex-col justify-between w-full my-4 bg-white"
              >
                
                  <div class="flex">
                    <!-- right -->
                    <div class="flex flex-col w-3/5 space-y-3 p-8">
                      <h1 class="text-gray-800 text-[28px] font-semibold">
                        Ankor Wat
                      </h1>
                      <el-rate v-model="Cardrate" class="h-4" disabled />

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

                      <div class="flex items-center space-x-3">
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
                      <div class="relative w-full h-52">
                        <img
                          class="absolute object-cover w-full h-52"
                          src="../../assets/bg.jpg"
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
               
                <!-- Collapse -->
                <!-- <div
                  class="z-2 flex items-center bottom-[-200px] justify-center"
                >
                  <div
                    @click="toggleCollapse(item.id)"
                    class="flex justify-center bg-gray-200 py-1 px-2 text-sm z-50 text-gray-600 cursor-pointer space-x-2"
                  >
                    <p>VIEW DETAIL</p>
                    <ArrowUpBold
                      
                      aria-hidden="true"
                      class="w-4"
                      color="rgba(75 85 99)"
                    />
                    <ArrowDownBold
                     
                      aria-hidden="true"
                      class="w-4"
                      color="rgba(156 163 175)"
                    />
                  </div>
                </div>

                <div class="flex flex-col items-center">
                  <Transition name="collapse1">
                    <div
                      class="w-full overflow-hidden h-auto top-[12px] bg-gray-200"
                     
                    >
                      <div class="flex justify-center p-8">
                        <ul
                          class="flex text-gray-600 space-x-12 text-sm cursor-pointer"
                          id="subRoute"
                        >
                          <router-link to="/hotel/hotelViewByItem/">ROOM TYPE</router-link>
                          <router-link to="/hotel/hotelViewByItem/detail">DETAILS</router-link>
                          <router-link to="/hotel/hotelViewByItem/review">REVIEWS</router-link>
                          <router-link to="/hotel/hotelViewByItem/surrounding"
                            >SURROUNDIG</router-link
                          >
                        </ul>
                      </div>
                      <router-view v-slot="{ Component }">
                        <transition name="fade" mode="out-in">
                          <component :is="Component"> </component>
                        </transition>
                      </router-view>
                    </div>
                  </Transition>
                </div> -->
            </div>
          </router-link>
            <!-- Sample Component -->

          <!-- Card -->

            <!-- Paggination -->
            <div class="flex justify-between px-1 py-2">
              <button
                class="ring-1 ring-blue-800 px-4 py-2 text-blue-800 hover:bg-blue-800 hover:text-white"
                @click="changePage(currentPage - 1)"
                :disabled="currentPage === 1"
              >
                PREV
              </button>
              <div class="flex space-x-3">
                <div v-for="page in displayedPages" class="flex justify-center">
                  <button
                    class="ring-1 ring-blue-800 px-4 py-2 text-blue-800 hover:bg-blue-800 hover:text-white"
                    @click="changePage(page)"
                    :class="{ pageActive: currentPage === page }"
                  >
                    {{ page }}
                  </button>
                </div>
              </div>
              <button
                class="ring-1 ring-blue-800 px-4 py-2 text-blue-800 hover:bg-blue-800 hover:text-white"
                @click="changePage(currentPage + 1)"
                :disabled="currentPage === totalPages"
              >
                NEXT
              </button>
            </div>
            <!-- Paggination -->
          </el-main>
          
        </el-container>
</template>

<script setup>

import { ArrowDownBold } from "@element-plus/icons-vue";
import { LocationInformation } from "@element-plus/icons-vue";
import { ArrowUpBold } from "@element-plus/icons-vue";
import data from "../../data/countries.json";
import { ref, computed, onMounted } from "vue";

// Pagination
const itemsPerPage = ref(5);
const currentPage = ref(1);
const totalPages = ref(0);

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return data && data.items ? data.items.slice(startIndex, endIndex) : [];
});

onMounted(() => {
  if (data && data.items) {
    data.items = data.items.sort((a, b) => a.id - b.id);
    totalPages.value = Math.ceil(data.items.length / itemsPerPage.value);
  }
});

const displayedPages = computed(() => {
  const totalButtons = 3;
  const middleButton = Math.ceil(totalButtons / 2);
  let startPage = currentPage.value - middleButton + 1;
  if (startPage + totalButtons - 1 > totalPages.value) {
    startPage = totalPages.value - totalButtons + 1;
  }
  startPage = Math.max(startPage, 1);
  const endPage = Math.min(startPage + totalButtons - 1, totalPages.value);
  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
});

function changePage(pageNumber) {
  if (pageNumber >= 1 && pageNumber <= totalPages.value) {
    currentPage.value = pageNumber;
  }
}
// Pagination

// Collapse
const items = ref(data);
const collapsedItems = ref([]);
const toggleCollapse = (itemId) => {
  if (collapsedItems.value.includes(itemId)) {
    collapsedItems.value = collapsedItems.value.filter((id) => id !== itemId);
  } else {
    collapsedItems.value.push(itemId);
  }
};
// Collapse


const range = ref([50, 300]);
const range2 = ref(3);
const rate = ref(2);
const Cardrate = ref([5]);
const isShow1 = ref(false);
const select1 = () => {
  isShow1.value = !isShow1.value;
};
</script>