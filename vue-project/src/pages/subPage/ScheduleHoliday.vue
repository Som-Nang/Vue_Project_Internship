<script setup>
import { ref } from 'vue'
import {
  CirclePlus,
  LocationInformation,
  StarFilled,
  OfficeBuilding,
  UserFilled,
  Notification,
  ArrowRight,
} from "@element-plus/icons-vue";

const centerDialogVisible = ref(false);

const value2 = ref("");
const options2 = [
  {
    value: "Siem Reap",
    label: "Siem Reap",
  },
  {
    value: "Kompong Cham",
    label: "Kompong Cham",
  },
  {
    value: "Prey Veng",
    label: "Prey Veng",
  },
  {
    value: "Kompot",
    label: "Kompot",
  },
  {
    value: "Kep",
    label: "Kep",
  },
  {
    value: "Preah Seyhanuk",
    label: "Preah Seyhanuk",
  },
];
const value3 = ref("");
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

const value4 = ref("");
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

const value5 = ref("");
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
const value6 = ref("");
const options6 = [
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
const value7 = ref("");
const options7 = [
  {
    value: "Hight",
    label: "Hight",
  },
  {
    value: "Medium",
    label: "Medium",
  },
  {
    value: "Low",
    label: "Low",
  },
];
const value8 = ref("");
const options8 = [
  {
    value: "1 Bed",
    label: "1 Bed",
  },
  {
    value: "2 Bed",
    label: "2 Bed",
  },
  {
    value: "3 Bed",
    label: "3 Bed",
  },
];
const value9 = ref("");
const options9 = [
  {
    value: "100 +",
    label: "100 +",
  },
  {
    value: "200 + ",
    label: "200 +",
  },
  {
    value: "500 +",
    label: "500 +",
  },
];
const range = ref([ 10, 150])
</script>

<template>
  <el-container class="px-16">
    <el-main>
      <div class="flex justify-between py-4">
        <h1 class="font-bold text-gray-800 text-2xl">Schedule Holiday</h1>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-1 bg-gray-200 items-center p-8">
          <div class="flex flex-col items-center justify-center h-full cursor-pointer" @click="centerDialogVisible = true">
            <CirclePlus class="w-12" color="rgb(107 114 128)" />
            <p class="text-gray-800 text-3sm">Add new schedule holiday</p>
          </div>
        </div>
        <!-- ///Modal Popup -->
           <el-dialog
              v-model="centerDialogVisible"
              title="Add new schedule holiday"
              width="50%"
              destroy-on-close
              center
              class="px-4 "
            >
              <div class="grid grid-cols-4 gap-4 items-center w-full">
                <div class="col-span-2">
                  <input
                    type="text"
                    class="border border-gray-300 focus:outline-none p-3 w-full py-7 focus:border-gray-500 text-gray-600"
                    placeholder="Enter juorney name"
                  />
                </div>
                <div
                  class="col-span-2  space-y-5 border border-gray-300 p-2"
                >
                  <label for="" class="absolute text-xs text-gray-500 pl-1"
                    >DESTINATION</label
                  >
                  <el-select
                    v-model="value2"
                    class=""
                    placeholder="Choose your destination"
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

                <div class=" col-span-2 relative flex justify-start space-y-5 border border-gray-300 p-2">
                  <label for="" class="absolute text-xs text-gray-500 top-0 pt-1">CHECK IN</label>
                  <input type="date"  class="focus:outline-none text-gray-700 py-2" placeholder="mm/yy">
                </div>

                <div class=" col-span-2 relative flex justify-start space-y-5 border border-gray-300 p-2">
                  <label for="" class="absolute text-xs text-gray-500 top-0 pt-1">CHECK OUT</label>
                  <input type="date"  class="focus:outline-none text-gray-700 py-2" placeholder="mm/yy">
                </div>

                <div class="col-span-1 col-end-2 space-y-5 border border-gray-300 p-2">
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

                <div class="col-span-1 col-start-2 col-end-4 space-y-5 border border-gray-300 p-2">
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
                  class="col-span-1 space-y-5 border border-gray-300 p-2"
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
                
                <div class="col-span-2 space-y-5 border border-gray-300 p-2">
                  <label for="" class="absolute text-xs text-gray-500 pl-1"
                    >PROPERTY TYPE</label
                  >
                  <el-select
                    v-model="value7"
                    class=""
                    placeholder="Select"
                    size="large"
                  >
                    <el-option
                      v-for="item in options7"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>

                <div class="col-span-2 space-y-5 border border-gray-300 p-2">
                  <label for="" class="absolute text-xs text-gray-500 pl-1"
                    >ROOM TYPE</label
                  >
                  <el-select
                    v-model="value8"
                    class=""
                    placeholder="Select"
                    size="large"
                  >
                    <el-option
                      v-for="item in options8"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>

                <div class="col-span-2 space-y-5 border border-gray-300 p-2">
                  <label for="" class="absolute text-xs text-gray-500 pl-1"
                    >REVIEW SCORE</label
                  >
                  <el-select
                    v-model="value9"
                    class=""
                    placeholder="Select"
                    size="large"
                  >
                    <el-option
                      v-for="item in options9"
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
                    v-model="value6"
                    class=""
                    placeholder="Select"
                    size="large"
                  >
                    <el-option
                      v-for="item in options6"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>

                <div class="col-span-2 p-2 pr-8">
                  <p class="text-sm text-gray-500">START RATING</p>
                  <el-slider v-model="range" range  :step="10" :max="200" />
                  <div class="text-gray-700 flex justify-between"> 
                    <span>{{ "US$" + range[0] }}</span>
                    <span>{{ "US$" + range[1] }}</span>
                  </div> 
                </div>
              </div>
              <template #footer>
                <span class="dialog-footer">
                  <el-button @click="centerDialogVisible = false" class="w-full bg-blue-700 text-white hover:bg-blue-600 py-5">
                    Save
                  </el-button>
                </span>
              </template>
            </el-dialog>
        <!-- ///Modal Popup -->
        <div class="col-span-1 bg-white items-center p-8">
          <div class="flex flex-col space-y-4 h-full px-4">
            <p class="text-2sm text-blue-800 font-bold">Family Trip</p>
            <div class="flex space-x-2">
              <LocationInformation class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                Siem Reap from 04 Feb to 15 Apr 2023
              </p>
            </div>
            <div class="flex space-x-2">
              <OfficeBuilding class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">Hotel Delux double room</p>
            </div>
            <div class="flex space-x-2">
              <UserFilled class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">1 Room, 2 Adult, 1 Children</p>
            </div>
            <div class="flex space-x-2">
              <StarFilled class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                3 Stars hotel, minimumm 6.5 review score
              </p>
            </div>
            <div class="flex space-x-2">
              <Notification class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                Price range: US$ 25 to US$ 125
              </p>
            </div>
            <div class="flex justify-end cursor-pointer items-center">
              <p class="text-sm text-red-500 hover:text-red-300">
                Result within 24h of request
              </p>
              <ArrowRight class="w-5" color="rgb(239 68 68)" />
            </div>
          </div>
        </div>

        <div class="col-span-1 bg-white items-center p-8">
          <div class="flex flex-col space-y-4 h-full px-4">
            <p class="text-2sm text-blue-800 font-bold">Family Trip</p>
            <div class="flex space-x-2">
              <LocationInformation class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                Siem Reap from 04 Feb to 15 Apr 2023
              </p>
            </div>
            <div class="flex space-x-2">
              <OfficeBuilding class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">Hotel Delux double room</p>
            </div>
            <div class="flex space-x-2">
              <UserFilled class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">1 Room, 2 Adult, 1 Children</p>
            </div>
            <div class="flex space-x-2">
              <StarFilled class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                3 Stars hotel, minimumm 6.5 review score
              </p>
            </div>
            <div class="flex space-x-2">
              <Notification class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                Price range: US$ 25 to US$ 125
              </p>
            </div>
            <div class="flex justify-end cursor-pointer items-center">
              <p class="text-sm text-red-500 hover:text-red-300">
                20 properties found
              </p>
              <ArrowRight class="w-5" color="rgb(239 68 68)" />
            </div>
          </div>
        </div>

        <div class="col-span-1 bg-white items-center p-8">
          <div class="flex flex-col space-y-4 h-full px-4">
            <p class="text-2sm text-blue-800 font-bold">Family Trip</p>
            <div class="flex space-x-2">
              <LocationInformation class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                Siem Reap from 04 Feb to 15 Apr 2023
              </p>
            </div>
            <div class="flex space-x-2">
              <OfficeBuilding class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">Hotel Delux double room</p>
            </div>
            <div class="flex space-x-2">
              <UserFilled class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">1 Room, 2 Adult, 1 Children</p>
            </div>
            <div class="flex space-x-2">
              <StarFilled class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                3 Stars hotel, minimumm 6.5 review score
              </p>
            </div>
            <div class="flex space-x-2">
              <Notification class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                Price range: US$ 25 to US$ 125
              </p>
            </div>
            <div class="flex justify-end cursor-pointer items-center">
              <p class="text-sm text-red-500 hover:text-red-300">
                20 properties found
              </p>
              <ArrowRight class="w-5" color="rgb(239 68 68)" />
            </div>
          </div>
        </div>

        <div class="col-span-1 bg-white items-center p-8">
          <div class="flex flex-col space-y-4 h-full px-4">
            <p class="text-2sm text-blue-800 font-bold">Family Trip</p>
            <div class="flex space-x-2">
              <LocationInformation class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                Siem Reap from 04 Feb to 15 Apr 2023
              </p>
            </div>
            <div class="flex space-x-2">
              <OfficeBuilding class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">Hotel Delux double room</p>
            </div>
            <div class="flex space-x-2">
              <UserFilled class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">1 Room, 2 Adult, 1 Children</p>
            </div>
            <div class="flex space-x-2">
              <StarFilled class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                3 Stars hotel, minimumm 6.5 review score
              </p>
            </div>
            <div class="flex space-x-2">
              <Notification class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                Price range: US$ 25 to US$ 125
              </p>
            </div>
            <div class="flex justify-end cursor-pointer items-center">
              <p class="text-sm text-red-500 hover:text-red-300">
                20 properties found
              </p>
              <ArrowRight class="w-5" color="rgb(239 68 68)" />
            </div>
          </div>
        </div>

        <div class="col-span-1 bg-white items-center p-8">
          <div class="flex flex-col space-y-4 h-full px-4">
            <p class="text-2sm text-blue-800 font-bold">Family Trip</p>
            <div class="flex space-x-2">
              <LocationInformation class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                Siem Reap from 04 Feb to 15 Apr 2023
              </p>
            </div>
            <div class="flex space-x-2">
              <OfficeBuilding class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">Hotel Delux double room</p>
            </div>
            <div class="flex space-x-2">
              <UserFilled class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">1 Room, 2 Adult, 1 Children</p>
            </div>
            <div class="flex space-x-2">
              <StarFilled class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                3 Stars hotel, minimumm 6.5 review score
              </p>
            </div>
            <div class="flex space-x-2">
              <Notification class="w-5" color="  rgb(107 114 128)" />
              <p class="text-gray-800 text-sm">
                Price range: US$ 25 to US$ 125
              </p>
            </div>
            <div class="flex justify-end cursor-pointer items-center">
              <p class="text-sm text-red-500 hover:text-red-300">
                20 properties found
              </p>
              <ArrowRight class="w-5" color="rgb(239 68 68)" />
            </div>
          </div>
        </div>


      </div>
    </el-main>
  </el-container>
</template>
<style>
.dialog-footer button:first-child {
  margin-right: 10px;
}
.el-dialog__title {
  color: rgb(75 85 99);
  font-size: 24px;
  font-weight: bolder;
}
/* .el-dialog--center .el-dialog__body {
  padding: 1;
} */
</style>