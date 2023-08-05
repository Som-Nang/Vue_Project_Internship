<script setup>

import { ref } from 'vue'

const value = ref('Mr.')
const options = [
{
    value: 'Mr.',
    label: 'Mr.',
  },
  {
    value: 'Other',
    label: 'Other',
  },
  {
    value: 'Mrs.',
    label: 'Mrs.',
  }
]

const value2 = ref('Male')
const options2 = [
{
    value2: 'Male',
    label: 'Male',
  },
  {
    value2: 'Other',
    label: 'Other',
  },
  {
    value2: 'Female',
    label: 'Female',
  }
]

const value3 = ref('+855')
const options3 = [
{
    value3: '+855',
    label: '+855',
  },

]
</script>
<template>
    <el-main>
        <h1 class="font-bold text-gray-800 text-2xl py-2">Booking Information</h1>
        <div class="space-y-4">
            <div class="fex flex-col p-4 py-6 bg-white space-y-4">
                <h1 class="text-blue-800 text-2sm font-bold px-6">Your booking details</h1>
                <p class="text-sm text-gray-500 text-justify px-6">There are many details securely store in our database and will only be used as auto fill in your booking</p>
                <div class="grid grid-cols-4 gap-5  px-5 justify-center">
                    
                    <div class="col-span-1 flex-col ">
                        <div class="relative flex justify-start space-y-5 border border-gray-300 p-2">
                            <label for="" class="absolute text-xs text-gray-500 pl-1">TITLE</label>
                            <el-select v-model="value" class="" placeholder="Select" size="large">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>  
                    <div class="col-span-4  ">
                        <div class="grid grid-cols-2 gap-5">
                            <div class="relative flex justify-start space-y-5 border border-gray-300 px-5 py-[17.5px] pr-5">
                                <label for="" class="absolute text-xs text-gray-500 top-0 pt-2">FIRST NAME</label>
                                <input type="text" value="" class="focus:outline-none text-sm text-gray-700" placeholder="FIRST NAME">
                            </div>

                            <div class="relative flex justify-start space-y-5 border border-gray-300 px-5 py-[17.5px] pr-5">
                                <label for="" class="absolute text-xs text-gray-500 top-0 pt-2">LAST NAME</label>
                                <input type="text" value="" class="focus:outline-none text-sm text-gray-700" placeholder="Last Name">
                            </div>
                        </div>
                    </div>
                    <div class="col-span-4  ">
                        <div class="grid grid-cols-2 gap-5">
                            <div class="relative flex justify-start space-y-5 border border-gray-300 px-5 py-[17.5px] pr-5">
                                <label for="" class="absolute text-xs text-gray-500 pl-1">GENDER</label>
                            <el-select v-model="value2" class="" placeholder="Select" size="large">
                                <el-option
                                v-for="item in options2"
                                :key="item.value2"
                                :label="item.label"
                                :value="item.value2"
                                />
                            </el-select>
                            </div>

                            <div class="relative flex justify-start space-y-5 border border-gray-300 px-5 py-[17.5px] pr-5">
                                <label for="" class="absolute text-xs text-gray-500 top-0 pt-2">Email</label>
                                <input type="email" value="" class="focus:outline-none text-sm text-gray-700" placeholder="Email">
                            </div>
                        </div>
                    </div>
                    <div class="col-span-3  ">
                        <div class="grid grid-cols-2 gap-5">
                            <div class="relative flex justify-start space-y-5 border border-gray-300 px-5 py-[17.5px] pr-5">
                                <label for="" class="absolute text-xs text-gray-500  top-0  pt-2">CODE</label>
                                <el-select v-model="value3" class="" placeholder="Select" size="large">
                                    <el-option
                                    v-for="item in options3"
                                    :key="item.value3"
                                    :label="item.label"
                                    :value="item.value3"
                                    />
                                </el-select>
                            </div>

                            <div class="relative flex justify-start space-y-5 border border-gray-300 px-5 py-[17.5px] pr-5">
                                <label for="" class="absolute text-xs text-gray-500 top-0 pt-2">PHONE NUMBER</label>
                                <input type="text" value="" class="focus:outline-none text-sm text-gray-700" placeholder="Phone Number">
                            </div>
                        </div>
                    </div> 
                    <div class="col-span-4  ">
                        <div class="relative flex justify-start space-y-5 border border-gray-300 px-5 py-[17.5px] pr-5">
                            <input type="text" value="" class="focus:outline-none text-sm text-gray-700" placeholder="Address Line 1">
                        </div>
                    </div> 
                    <div class="col-span-4  ">
                        <div class="relative flex justify-start space-y-5 border border-gray-300 px-5 py-[17.5px] pr-5">
                            <input type="text" value="" class="focus:outline-none text-sm text-gray-700" placeholder="Address Line 2">
                        </div>
                    </div>
                    <div class="col-span-4  ">
                        <div class="grid grid-cols-2 gap-5">
                            <div class="relative flex justify-start space-y-5 border border-gray-300 px-5 py-[17.5px] pr-5">
                                <label for="" class="absolute text-xs text-gray-500 top-0  pt-2">COUNTRY</label>
                                <input type="text" value="" class="focus:outline-none text-sm text-gray-700" placeholder="Country">
                            </div>
                            <div class="relative flex justify-start space-y-5 border border-gray-300 px-5 py-[17.5px] pr-5">
                                <label for="" class="absolute text-xs text-gray-500 top-0  pt-2">CITY/STAGE</label>
                                <input type="text" value="" class="focus:outline-none text-sm text-gray-700" placeholder="City/Stage">
                            </div>
                        </div>
                    </div> 
                    <div class="col-span-2  ">
                        <div class="relative flex justify-start space-y-5 border border-gray-300 px-5 py-[17.5px] pr-5">
                            <label for="" class="absolute text-xs text-gray-500 top-0  pt-2">ZIP CODE</label>
                            <input type="text" value="" class="focus:outline-none text-sm text-gray-700" placeholder="Zip code">
                        </div>
                    </div>    

                    <p class="col-span-4 p-3 text-center w-full ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer rounded-sm hover:bg-blue-700 hover:text-white">SAVE</p>
                </div>
               
            </div>
        </div>
    </el-main>
</template>
<style>
.el-input__wrapper {
    box-shadow: none;
    padding: 0;
   
}

.el-input--large .el-input__wrapper {
    padding: 0;
}
.el-input__inner {
    padding-left: 5px;
   
}
.space-y-5 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
    width: 100%;
}
</style>