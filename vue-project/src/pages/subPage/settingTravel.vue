<script setup>
import { ref } from "vue";

const radio1 = ref("1");

const value = ref("Allow Smoking");
const options = [
  {
    value: "Allow Smoking",
    label: "Allow Smoking",
  },
  {
    value: "Not Allow",
    label: "Not Allow",
  },
];
const value2 = ref("1 Star");
const options2 = [
  {
    value: "1 Star",
    label: "1 Star",
  },
  {
    value: "2 Star",
    label: "2 Star",
  },
  {
    value: "3 Star",
    label: "3 Star",
  },
  {
    value: "4 Star",
    label: "4 Star",
  },
  {
    value: "5 Star",
    label: "5 Star",
  },
];

const value3 = ref("1 Room");
const options3 = [
  {
    value: "1 Room",
    label: "1 Room",
  },
  {
    value: "2 Room",
    label: "2 Room",
  },
  {
    value: "3 Room",
    label: "3 Room",
  },
  {
    value: "4 Room",
    label: "4 Room",
  },
  {
    value: "5 Room",
    label: "5 Room",
  },
  {
    value: "More than 6",
    label: "More than 6",
  },
];

const value4 = ref("1 Adult");
const options4 = [
  {
    value: "1 Adult",
    label: "1 Adult",
  },
  {
    value: "2 Adult",
    label: "2 Adult",
  },
  {
    value: "3 Adult",
    label: "3 Adult",
  },
  {
    value: "4 Adult",
    label: "4 Adult",
  },
  {
    value: "5 Adult",
    label: "5 Adult",
  },
  {
    value: "More than 6",
    label: "More than 6",
  },
];

const value5 = ref("1 Chldren");
const options5 = [
  {
    value: "1 Chldren",
    label: "1 Chldren",
  },
  {
    value: "2 Chldren",
    label: "2 Chldren",
  },
  {
    value: "3 Chldren",
    label: "3 Chldren",
  },
  {
    value: "4 Chldren",
    label: "4 Chldren",
  },
  {
    value: "5 Chldren",
    label: "5 Chldren",
  },
  {
    value: "More than 6",
    label: "More than 6",
  },
];
</script>
<template>
  <el-main>
    <h1 class="font-bold text-gray-800 text-2xl py-2">Travel</h1>
    <div class="space-y-4">
      <div class="fex flex-col p-4 bg-white space-y-4 py-6">
        <h1 class="text-blue-800 text-2sm font-bold px-6">Tavel preferences</h1>
        <p class="text-sm text-gray-500 text-justify px-6">
          Tell us how you like to travel so we can customize your search.
        </p>

        <div class="grid grid-cols-4 gap-6 px-6">
          <div class="col-span-2 space-y-5 border border-gray-300 p-2">
            <label for="" class="absolute text-xs text-gray-500 pl-1"
              >SMOKING PREFERENCE</label
            >
            <el-select
              v-model="value"
              class=""
              placeholder="Select"
              size="large"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="col-span-2 space-y-5 border border-gray-300 p-2">
            <label for="" class="absolute text-xs text-gray-500 pl-1"
              >STAR RATING</label
            >
            <el-select
              v-model="value2"
              class=""
              placeholder="Select"
              size="large"
            >
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div class="col-span-1 space-y-5 border border-gray-300 p-2">
            <label for="" class="absolute text-xs text-gray-500 pl-1"
              >Room</label
            >
            <el-select
              v-model="value3"
              class=""
              placeholder="Select"
              size="large"
            >
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div class="col-span-2 space-y-5 border border-gray-300 p-2">
            <label for="" class="absolute text-xs text-gray-500 pl-1"
              >ADULT</label
            >
            <el-select
              v-model="value4"
              class=""
              placeholder="Select"
              size="large"
            >
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div
            class="col-span-1 col-end-5 space-y-5 border border-gray-300 p-2"
          >
            <label for="" class="absolute text-xs text-gray-500 pl-1"
              >CHILDREN</label
            >
            <el-select
              v-model="value5"
              class=""
              placeholder="Select"
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
        </div>

        <div class="px-6 space-y-3">
          <p class="text-gray-600 text-2sm">Favorite facilities:</p>
          <el-radio-group v-model="radio1" class="grid grid-cols-2 gap-2 px-4">
            <el-radio label="1" size="large"
              ><p class="text-[16px] font-light px-4">
                Facilitie for disabled guestss
              </p></el-radio
            >
            <el-radio label="2" size="large"
              ><p class="text-[16px] font-light px-4">
                Drinking area
              </p></el-radio
            >
            <el-radio label="3" size="large"
              ><p class="text-[16px] font-light px-4">Kid's clud</p></el-radio
            >
            <el-radio label="4" size="large"
              ><p class="text-[16px] font-light px-4">Resturant</p></el-radio
            >
            <el-radio label="5" size="large"
              ><p class="text-[16px] font-light px-4">
                Bottle of water
              </p></el-radio
            >
            <el-radio label="6" size="large"
              ><p class="text-[16px] font-light px-4">
                Wine/Champagne
              </p></el-radio
            >
            <el-radio label="7" size="large"
              ><p class="text-[16px] font-light px-4">Resturant</p></el-radio
            >
            <el-radio label="8" size="large"
              ><p class="text-[16px] font-light px-4">
                Buffet resturant
              </p></el-radio
            >
          </el-radio-group>
        </div>
      </div>

      <div class="fex flex-col p-4 bg-white space-y-3 py-6">
        <h1 class="text-blue-800 text-2sm font-bold px-6">
          Favorite Destinations
        </h1>
        <p class="text-sm text-gray-500 text-justify px-6">
          We'll email you deal rating to theseplaces
        </p>

        <div class="px-6 w-1/2 flex space-x-4 py-2">
          <input
            type="text"
            class="border border-gray-300 focus:outline-none p-3 w-full focus:border-gray-500 text-gray-600"
            placeholder="Enter Your Destinations"
          />
          <button
            class="p-4 px-6 border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
          >
            ADD
          </button>
        </div>
        <h1 class="text-blue-800 text-sm px-6">Destinations</h1>
        <div class="flex px-6 justify-between w-1/2">
          <p class="text-gray-800 text-2sm">Phnom Penh</p>
          <div class="flex space-x-3">
            <p class="text-blue-800 text-sm hover:text-blue-500 cursor-pointer">
              EDIT
            </p>
            <p class="text-red-600 text-sm hover:text-red-400 cursor-pointer">
              DELLETE
            </p>
          </div>
        </div>

        <div class="flex px-6 justify-between w-1/2">
          <p class="text-gray-800 text-2sm">Battambang</p>
          <div class="flex space-x-3">
            <p class="text-blue-800 text-sm hover:text-blue-500 cursor-pointer">
              EDIT
            </p>
            <p class="text-red-600 text-sm hover:text-red-400 cursor-pointer">
              DELLETE
            </p>
          </div>
        </div>

        <div class="flex px-6 justify-between w-1/2">
          <p class="text-gray-800 text-2sm">Banteay Mean Chey</p>
          <div class="flex space-x-3">
            <p class="text-blue-800 text-sm hover:text-blue-500 cursor-pointer">
              EDIT
            </p>
            <p class="text-red-600 text-sm hover:text-red-400 cursor-pointer">
              DELLETE
            </p>
          </div>
        </div>

        <div class="flex px-6 justify-between w-1/2">
          <p class="text-gray-800 text-2sm">Resort</p>
          <div class="flex space-x-3">
            <p class="text-blue-800 text-sm hover:text-blue-500 cursor-pointer">
              EDIT
            </p>
            <p class="text-red-600 text-sm hover:text-red-400 cursor-pointer">
              DELLETE
            </p>
          </div>
        </div>

        <div class="px-6 pt-4">
          <p
            class="p-3 text-center w-full ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer rounded-sm hover:bg-blue-700 hover:text-white"
          >
            SAVE
          </p>
        </div>
      </div>
    </div>
  </el-main>
</template>
<style>
.el-radio {
  margin: 0;
}
</style>
