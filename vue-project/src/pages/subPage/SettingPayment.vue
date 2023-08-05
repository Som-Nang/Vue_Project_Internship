<script setup>
import { ref } from 'vue';
const radio1 = ref('1');


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
        <h1 class="font-bold text-gray-800 text-2xl py-2">My Payment</h1>
        <div class="space-y-4">
            <div class="fex flex-col p-4 bg-white space-y-4 py-6">
                <h1 class="text-blue-800 text-2sm font-bold px-6">Your payment option</h1>
                <p class="text-sm text-gray-500 text-justify px-6">Fill in your credit card detail. Let us know about your payment preferences.</p>
            </div>
            
            <div class="fex flex-col p-4 bg-white space-y-4 py-6">
                <h1 class="text-blue-800 text-2sm font-bold px-6">Credit Card</h1>
                <p class="text-sm text-gray-500 text-justify px-6">We'll use this info to auto fill your detail, making it quicker for you to book. Your payment details are store securely.</p>

                <el-radio-group v-model="radio1" class="flex flex-col space-y-3 items-start p-6">
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
            
            <div class="fex flex-col p-4 bg-white space-y-6 py-6">
                <h1 class="text-blue-800 text-2sm font-bold px-6">Payment preferences</h1>
                <p class="text-sm text-gray-500 text-justify px-6 pb-5">Tell us your preferences so make booking faster and more convenient you in future.</p>
                <div class="px-6 space-y-3">
                    <p class="text-gray-600 text-2sm">What make you prefer to use when playing online?</p>
                    <div class="grid grid-cols-2 gap-4">
                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">America Express</span>
                        </Label>

                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">Euro/Mastercard</span>
                        </Label>

                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">UnionPay Credit Card</span>
                        </Label>

                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">Discover</span>
                        </Label>

                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">Visa</span>
                        </Label>

                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">Maetro</span>
                        </Label>

                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">JBP</span>
                        </Label>
                    </div>
                </div>
                <div class="px-6 space-y-3">
                    <p class="text-gray-600 text-2sm">When you prefer to stay?</p>
                    <div class="grid grid-cols-1 gap-4">
                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">When I make booking online</span>
                        </Label>

                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">When I stay at the accommodation</span>
                        </Label>

                        <Label class="">
                            <input type="checkbox" /> 
                            <span class="pl-2 text-gray-600 text-sm cursor-pointer">UnionPay Credit Card</span>
                        </Label>
                    </div>
                </div>

                <div class="px-6">
                    <div class=" flex justify-start space-y-5 border border-gray-300 p-2 w-1/2">
                        <label for="" class="absolute text-xs text-gray-500 pl-1">CURRENCY</label>
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