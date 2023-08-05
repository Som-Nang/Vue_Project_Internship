<script setup>
import { CameraFilled } from "@element-plus/icons-vue";
</script>
<template>
    <el-main>
        <h1 class="font-bold text-gray-800 text-2xl py-2">My Account</h1>
        <div class="space-y-4">
            <div class="fex flex-col p-4 bg-white space-y-4 py-6">
                <h1 class="text-blue-800 text-2sm font-bold px-6">Your account details</h1>
                <p class="text-sm text-gray-500 text-justify px-6">These detail are disoaly next to your publicly share reviws, rates, photos, etc. any update you make change here will also appear in past contribute.</p>
            </div>

            <div class="fex flex-col p-4 py-8 bg-white space-y-4">
                <h1 class="text-blue-800 text-2sm font-bold px-6">Link your account to social media</h1>
                <p class="text-sm text-gray-500 text-justify px-6">Sign in with just one click when you link to Facebook or Google+</p>
                <div class="flex space-x-4 px-6">
                    <div class="w-fit px-8 py-2 bg-blue-700 text-white rounded-full cursor-pointer">Facebbok</div>
                    <div class="w-fit px-8 py-2 bg-red-500 text-white rounded-full cursor-pointer">Google Plus</div>
                </div>
            </div>

            <div class="fex flex-col p-4 py-6 bg-white space-y-4">
                <h1 class="text-blue-800 text-2sm font-bold px-6">Update your account if needed</h1>
                <p class="text-sm text-gray-500 text-justify px-6">There are many variatation of Somnang Din available, but the majority have suffered.</p>
                <div class="flex flex-col items-center space-x-5 space-y-5 px-5 justify-center">
                    <div class="relative flex justify-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"  alt="profile" class="w-[86px] rounded-full h-[86px] bg-cover">
                        <CameraFilled corlor="" class=" w-8 absolute bottom-[-15px] bg-white p-1 rounded-full"/>
                    </div>
                    <div class="flex justify-center w-full space-x-5">
                        <div class="flex-col w-full space-y-5">
                            <div class="relative flex justify-start space-y-5 border border-gray-300 p-5 py-1">
                                <label for="" class="absolute text-xs text-gray-500 top-0 pt-1">FIRST NAME</label>
                                <input type="text" value="Somnang" class="focus:outline-none text-gray-700" placeholder="First name">
                            </div>

                            <div class="relative flex justify-start space-y-5 border border-gray-300 p-5 py-1">
                                <label for="" class="absolute text-xs text-gray-500 top-0 pt-1">DATE OF BIRTH</label>
                                <input type="text" value="03/04/1999" class="focus:outline-none text-gray-700" placeholder="Date of birth">
                            </div>
                        </div>

                        <div class="flex-col w-full space-y-5 pr-4">
                            <div class="relative flex justify-start space-y-5 border border-gray-300 p-5 py-1 pr-5">
                                <label for="" class="absolute text-xs text-gray-500 top-0 pt-1">LAST NAME</label>
                                <input type="text" value="DIN" class="focus:outline-none text-gray-700" placeholder="Last name">
                            </div>

                            <div class="relative flex justify-start space-y-5 border border-gray-300 p-5 py-1 pr-5">
                                <label for="" class="absolute text-xs text-gray-500 top-0 pt-1">COUNTRY</label>
                                <input type="text" value="Cambodia" class="focus:outline-none text-gray-700" placeholder="Country">
                            </div>
                        </div>
                    </div>

                    
                        <p class="p-3 text-center w-full ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer rounded-sm hover:bg-blue-700 hover:text-white">UPDATE</p>
                    
                    
                </div>
            </div>
        </div>
    </el-main>
</template>