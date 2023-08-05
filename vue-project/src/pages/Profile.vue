<script setup>
import Navigation from "../components/Navigation.vue";
import DatePicker from "../components/DatePicker.vue";
import AutoComplete from "../components/AutoComlete.vue";
import BookingInfo from "../components/BookingInfo.vue";
import FooterContent from "../components/FooterContent.vue";



</script>
<template>
   <div class="common-layout bg-gray-100">
    <el-container class="space-y-5">

        <!-- Header -->
        <el-header>
        <Navigation class="bg-blue-900" />
        <div class="bg-gray-200 w-full p-2">
        <div class="flex flex-1 flex-col items-center px-1">
        <div
        class="flex relative justify-center space-y-20 max-lg:space-y-60 w-full px-28"
        >
        <div
        class="flex w-full justify-between bg-white pl-10 pr-[2px] h-auto rounded-full max-lg:h-auto max-lg:flex max-lg:flex-col max-lg:items-center max-lg:space-y-2 max-lg:p-4 max-lg:rounded-lg max-xl:w-auto"
        >
        <AutoComplete />
        <div
            class="flex items-center justify-center space-x-10 max-lg:flex-col max-lg:items-center max-lg:space-x-0 max-lg:space-y-2"
        >
            <DatePicker />
            <BookingInfo />
            <button
            type="button"
            class="focus:outline-none float-right my-[2px] text-white focus:ring-2 focus:ring-red-300 font-medium text-sm px-12 py-[18px] rounded-full bg-red-500 hover:bg-red-700 max-lg:h-auto max-lg:py-[8px] max-lg:px-8"
            >
            SEARCH
            </button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </el-header>
        <!-- Header -->

        <!-- Top Content -->
        <el-container class="px-16">
            <el-main>
                <!-- //Main's Button -->
                <div class="flex flex-col justify-center w-full space-y-4">
                    <div class="flex justify-center w-full space-x-2" id="btn">
                  
                        <router-link  to="/profile/" class="w-full ">
                            <el-button type="primary"  plain color="rgb(30 64 175)" class="w-full px-6 py-4 default:active">
                                DASHBOARD
                            </el-button>
                        </router-link  >

                        <router-link  to="/profile/mybook" class="w-full">
                            <el-button type="primary" plain color="rgb(30 64 175)" class="w-full px-2 py-4">
                                MY BOOK
                            </el-button>
                        </router-link>

                        <router-link  to="/profile/mypreview" class="w-full">
                            <el-button type="primary" plain color="rgb(30 64 175)" class="w-full px-2 py-4">
                                MY PREVIEW
                            </el-button>
                        </router-link>

                        <router-link  to="/profile/mywatchlist" class="w-full">
                            <el-button type="primary" plain color="rgb(30 64 175)" class="w-full px-2 py-4">
                                MY WATCHLISH
                            </el-button>
                        </router-link>

                        <router-link  to="/profile/sheduleHoliday" class="w-full">
                            <el-button type="primary" plain color="rgb(30 64 175)" class="w-full px-2 py-4">
                               SCHEDULE HOLIDAY
                            </el-button>
                        </router-link>

                        <router-link  to="/profile/report" class="w-full">
                            <el-button type="primary" plain color="rgb(30 64 175)" class="w-full px-2 py-4">
                                REPORT
                            </el-button>
                        </router-link>

                        <router-link  to="/profile/setting" class="w-full">
                            <el-button type="primary" plain color="rgb(30 64 175)" class="w-full px-2 py-4">
                                SETTING
                            </el-button>
                        </router-link>

                        <router-link  to="/profile/bookingpreview" class="w-full">
                            <el-button type="primary" plain color="rgb(30 64 175)" class="w-full px-2 py-4">
                                HELP
                            </el-button>
                        </router-link>
                       
                    </div>
                    <div class="w-full border-2 border-gray-300"></div>

                </div>
                <!-- //Main's Button -->    
            </el-main>
        </el-container>
        <!-- Top Content -->

        <!-- Main Content -->
        <router-view></router-view>
        <!-- Main Content -->

        <footer class="pt-2">
            <FooterContent />
        </footer>
    </el-container>
   </div>
</template>

<style>
#btn .activeRounter .el-button{
    background-color: rgb(30 64 175);
    color: white;
   
}
</style>