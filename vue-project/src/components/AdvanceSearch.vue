<template>
    <div class="flex flex-col items-center absolute max-lg:mb-20">
      <div @click="openClose" class=" flex flex-col items-center text-center m-2 text-sm text-white drop-shadow-lg hover:underline shadow-black cursor-pointer">
        <span class="px-2 ">ADVANCE SEARCH</span>
        <ArrowUpBold v-if="isShow" aria-hidden="true" class="w-5 " color="rgba(242, 242, 242, 1)"/>
        <ArrowDownBold v-else aria-hidden="true" class="w-5 " color="rgba(242, 242, 242, 0.5)"/>
      </div>
        
      <Transition name="collapse" >
        <div class="flex overflow-hidden bg-white w-auto h-auto px-4 py-2 rounded-lg max-lg:flex max-lg:flex-col max-lg:p-4 max-lg:space-y-4" v-if="isShow">
          <div class="flex flex-col w-72 px-6">
            <p class="text-sm text-gray-500">PRICE: <span class="text-gray-700"> {{ "US$" + range[0] + " - US$" + range[1]  }}</span> </p>
            <el-slider v-model="range" range  :step="50" :max="500" />
          </div>
          
          <div class="w-72 px-6">
            <p class="text-sm text-gray-500">REVIEW SCORE: <span class="text-gray-700">{{ range2 + " +" }}</span></p>
            <el-slider v-model="range2" :max="10" />
          </div>

          <div class="flex flex-col px-6">
            <span class="text-sm text-gray-500">STAR RATING: <span class="text-gray-700"> {{ rate }}</span></span>
            <el-rate v-model="rate"/>
          </div>
        </div>
      </Transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { ArrowDownBold } from '@element-plus/icons-vue'
  import { ArrowUpBold } from '@element-plus/icons-vue'
  const isShow = ref(false);
  const openClose = () => {
    isShow.value = !isShow.value;
  };

  const range = ref([ 50, 300])
  const range2 = ref(3)
  const rate = ref(2)
  </script>

  <style>
  .collapse-enter-active {
    animation: collapse reverse 300ms ease;
  }
  .collapse-leave-active {
    animation: collapse 300ms ease;
  }
  @keyframes collapse {
    from {
      max-height: 200px;
    }
    to {
      max-height: 0px;
    }
  }
  
  </style>