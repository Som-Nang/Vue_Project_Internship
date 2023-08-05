<script setup>
import { ref } from 'vue';
const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');

const value = ref('US Dollar')
const options = [
{
    value: 'US Dollar',
    label: 'US Dollar',
  },
  {
    value: 'RIEL Khmer',
    label: 'RIEL Khmer',
  },
  {
    value: 'BAT THAI',
    label: 'BAT THAI',
  }
]
</script>
<template>
    <el-main>
        <h1 class="font-bold text-gray-800 text-2xl py-2">Notification</h1>
        <div class="space-y-4">
            <div class="fex flex-col p-4 bg-white space-y-4 py-6">
                <h1 class="text-blue-800 text-2sm font-bold px-6">Notification preferences</h1>
                <p class="text-sm text-gray-500 text-justify px-6">Decide how often you want to hear from us. These bundles of travel inspiration include deals that could save you up to 50%.</p>
            </div>

            <div class="fex flex-col p-4 bg-white space-y-6 py-6">
                <h1 class="text-blue-800 text-2sm font-bold px-6">Payment preferences</h1>
                <p class="text-sm text-gray-500 text-justify px-6 pb-5">Tell us your preferences so make booking faster and more convenient you in future.</p>
                <div class="px-6 space-y-3">
                    <p class="text-gray-600 text-2sm">How often to you can to hear the prootion ?</p>
                    <el-radio-group v-model="radio1" class="flex flex-col items-start px-4">
                        <el-radio label="1" size="large"><p class="text-[18px] font-light px-4">Month</p></el-radio>
                        <el-radio label="2" size="large"><p class="text-[18px] font-light px-4">Weekly</p></el-radio>
                        <el-radio label="3" size="large"><p class="text-[18px] font-light px-4">Every 3 months</p></el-radio>
                        <el-radio label="4" size="large"><p class="text-[18px] font-light px-4">Discover</p></el-radio>
                    </el-radio-group>
                </div>

                <div class="px-6 space-y-3">
                    <p class="text-gray-600 text-2sm">Do you want us to send you email when you have a new notification?</p>
                    <el-radio-group v-model="radio2" class="flex space-x-12 items-start px-4">
                        <el-radio label="1" size="large"><p class="text-[18px] font-light px-2">Yes</p></el-radio>
                        <el-radio label="2" size="large"><p class="text-[18px] font-light px-2">No</p></el-radio>
                    </el-radio-group>

                    <div class="flex flex-col px-4 space-y-3">
                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">An offer is made for your schedule holiday</span>
                        </Label>

                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">The property marks you as no-slow</span>
                        </Label>

                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">The property marks as invalid</span>
                        </Label>

                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">You recieved a reply</span>
                        </Label>
                    </div>
                </div>

                <div class="px-6 space-y-3">
                    <p class="text-gray-600 text-2sm">Advertisement?s</p>
                    <el-radio-group v-model="radio3" class="flex space-x-16 items-start px-4">
                        <el-radio label="1" size="large"><p class="text-[18px] font-light px-2">Yes</p></el-radio>
                        <el-radio label="2" size="large"><p class="text-[18px] font-light px-2">No</p></el-radio>
                    </el-radio-group>
                </div>
                
                <div class="px-6">
                    <p class="p-3 text-center w-full ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer rounded-sm hover:bg-blue-700 hover:text-white">SAVE</p>
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