<script setup>
import { LocationInformation } from "@element-plus/icons-vue";
import { ArrowDownBold } from "@element-plus/icons-vue";
import { ArrowUpBold } from "@element-plus/icons-vue";
import data from "../../data/countries.json";

import { ref } from "vue";
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

const Cardrate = ref([5]);
</script>
<template>
  <el-container class="px-16">
    <el-main>
      <div class="flex justify-between py-4">
        <h1 class="font-bold text-gray-800 text-2xl">My Booking List</h1>
        <el-button type="primary" plain color="rgb(30 64 175)" class="">
          <span class="flex"
            >ALL STATUS<ArrowDownBold class="w-4 ml-4" />
          </span>
        </el-button>
      </div>
      <!-- Card -->

      <div class="py-4 relative" v-for="item in items.items" :key="item.id">
        <div class="flex flex-col w-full h-full bg-white relative">
          <router-link
            :to="{ name: 'MybookingDetail', params: { id: item.id } }"
          >
            <div class="flex items-center">
              <!-- right -->
              <div class="relative w-full fex flex-col p-4 bg-white space-y-2">
                <div class="flex w-full">
                  <div class="w-full p-2">
                    <img
                      src="../../assets/room.jpg"
                      alt=""
                      class="h-full bg-cover"
                    />
                    <p
                      class="absolute bottom-0 left-0 px-5 py-4 text-sm text-white bg-green-500"
                      :class="{
                        green: item.status === 'Completed',
                        yellow: item.status === 'Pending',
                        red: item.status === 'Canceled',
                        sky: item.status === 'Upcoming',
                        gray: item.status === 'No-Show',
                      }"
                    >
                      {{ item.status }}
                    </p>
                  </div>

                  <div class="flex flex-col p-2 space-y-2 w-full">
                    <h2 class="text-gray-800 text-xl font-semibold">
                      {{ item.name }}
                    </h2>
                    <div class="flex">
                      <el-rate v-model="Cardrate" class="h-4" disabled />
                      <p class="text-gray-500 text-sm">
                        1 room(s), 1 adult(s), 1 night(s)
                      </p>
                    </div>
                    <p class="text-blue-700 text-sm">
                      Thu, 22 March 2023 - Fri, 23 March 2023
                      <span class="underline cursor-pointer">Manage</span>
                    </p>
                    <div class="flex space-x-1">
                      <LocationInformation
                        class="w-5"
                        color="rgb(156 163 175)"
                      />
                      <p class="text-gray-500 text-sm">
                        No.134, Stree.51, Beoung Keng Kang I, Chamkar Mon, Phnom
                        Penh, Cambodia
                      </p>
                    </div>
                    <p class="text-red-500 text-sm">
                      Booking number: 1566147369
                    </p>
                    <p class="text-red-500 text-sm">PIN Code: 4426</p>
                  </div>
                </div>
              </div>

              <!-- left -->
              <div class="w-full justify-center items-center flex-col p-4 pl-8">
                <div
                  class="flex justify-end pb-4 z-50 space-x-2"
                  v-if="item.status === 'Completed'"
                >
                  <el-button
                    color="rgb(29 78 216)"
                    plain
                    class="px-5 rounded-full py-4"
                    >BOOK AGAIN</el-button
                  >
                  <router-link to="/profile/bookingpreview">
                  <el-button
                    color="rgb(29 78 216)"
                    plain
                    class="px-5 rounded-full py-4"
                    >REVIEW STAY</el-button
                  >
                </router-link>
                </div>
                <div
                  class="flex justify-end pb-4 z-50 space-x-2"
                  v-if="item.status === 'Canceled' || item.status === 'No-Show'"
                >
                  <el-button
                    color="rgb(29 78 216)"
                    plain
                    class="px-5 rounded-full py-4"
                    >BOOK AGAIN</el-button
                  >
                </div>
                <div class="flex justify-end items-center space-x-4 divide-x">
                  <div
                    class="flex flex-col p-2 justify-center items-center right-0"
                  >
                    <p class="text-sm text-gray-500">Donation</p>
                    <h1 class="text-2xl text-blue-700 font-bold">US$ 6.5</h1>
                  </div>
                  <div
                    class="flex flex-col p-2 justify-center items-center right-0"
                  >
                    <p class="text-sm text-gray-500">Total Fee</p>
                    <h1 class="text-2xl text-red-500 font-bold">US$ 6.5</h1>
                  </div>
                </div>
                <p class="text-blue-700 text-sm text-right">
                  Prepayment of US$ 5 paid
                </p>
              </div>
            </div>
          </router-link>
          <!-- Collapse -->
          <div
            class="z-2 flex items-center justify-center absolute w-full bottom-[-12px]"
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
        </div>

        <Transition name="collapse1">
          <div
            class="w-full flex flex-col overflow-hidden h-auto top-[12px] bg-gray-200"
            v-if="collapsedItems.includes(item.id)"
          >
            <div
            v-if="
                item.status === 'Completed' ||
                item.status === 'Upcoming' ||
                item.status === 'Pending' ||
                item.status === 'No-Show'
              "
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
                <div class="bg-white text-gray-700 w-3/5 px-4 py-6">
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
            <div class="flex flex-col items-center space-y-2 py-32" v-else="item.status === 'Canceled'">
                <img src="../../assets/tree.png" class="w-40 p-6 opacity-40" color="" alt="tree">
                <p class="text-5sm font-bold text-gray-700">No Conversation</p>
                <p class="text-sm text-gray-500">There are many variation of passenger of Lorem Ipsum available, but the majority have suffered.</p>
            </div>
            <div class="w-full bg-white">
              <div class="flex justify-between px-8 py-2 items-center">
                <input
                  type="text"
                  placeholder="Message...."
                  class="focus:outline-none text-gray-700"
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
        </Transition>
      </div>

      <!-- Card -->
    </el-main>
  </el-container>
</template>

<style>
.sky {
  background-color: rgb(14 165 233);
}
.red {
  background-color: rgb(239 68 68);
}
.yellow {
  background-color: rgb(255, 204, 0);
}
.green {
  background-color: rgb(34 197 94);
}
.gray {
  background-color: rgb(55 65 81);
}</style>
