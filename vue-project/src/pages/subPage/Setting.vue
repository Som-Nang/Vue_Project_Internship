
<template>
    <el-container class="px-16">
            <el-aside width="370px" class="">
                <div class="fex flex-col bg-white shadow-sm h-fit" id="setting">
                    <router-link to="/profile/setting/">
                        <p class="w-full py-5 px-5 text-left text-sm from-neutral-50 text-blue-800 hover:text-white hover:bg-blue-800 cursor-pointer">ACCCOUNT</p>
                    </router-link>

                    <router-link to="/profile/setting/bookingInformation">
                        <p class="w-full py-5 px-5 text-left text-sm from-neutral-50 text-blue-800 hover:text-white hover:bg-blue-800 cursor-pointer">BOOKING INFORMATION</p>
                    </router-link>

                    <router-link to="/profile/setting/payment">
                        <p class="w-full py-5 px-5 text-left text-sm from-neutral-50 text-blue-800 hover:text-white hover:bg-blue-800 cursor-pointer">PAYMENT</p>
                    </router-link>

                    <router-link to="/profile/setting/travel">
                        <p class="w-full py-5 px-5 text-left text-sm from-neutral-50 text-blue-800 hover:text-white hover:bg-blue-800 cursor-pointer">TRAVEL</p>
                    </router-link>

                    <router-link to="/profile/setting/notification">
                        <p class="w-full py-5 px-5 text-left text-sm from-neutral-50 text-blue-800 hover:text-white hover:bg-blue-800 cursor-pointer">NOTIFICATION</p>
                    </router-link>
                </div>
            </el-aside>
            <el-container class="pl-8">
                <router-view></router-view>
            </el-container>
    </el-container>
</template>
<style>
#setting .activeRounter p{
    background-color: rgb(30 64 175);
    color: white;
}
</style>