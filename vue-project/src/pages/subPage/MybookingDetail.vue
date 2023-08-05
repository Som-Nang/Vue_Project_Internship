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

      <!-- Main Button -->
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

                      <router-link  to="/profile/mybook" class="w-full activeRounter">
                          <el-button type="primary"  plain color="rgb(30 64 175)" class="w-full px-2 py-4">
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
      <!-- Main Button -->

      <!-- Content -->
      <h1 class="px-16 font-bold text-gray-800 text-2xl">My Booking Details</h1>
      <el-container class="px-16 py-2 pb-4">
        
        <el-aside width="370px" class="space-y-4">
          
            <div class="fex flex-col p-4 bg-blue-100 shadow-sm space-y-2 h-fit border border-gray-200">
                <div class="px-4 py-2">
                    <h6 class="text-blue-800 text-[16px] font-bold">
                        IS EVERYTHING CORRECT?
                    </h6>
                    <p class="text-gray-500 text-sm">You can alway view or change your booking online - no registration required.</p>
                    <div class="flex flex-col space-y-2 py-4">
                        <el-button plain color=" rgb(30 64 175)" class="rounded-full">EDIT CREDIT CARD DETAIL</el-button>
                        <el-button plain color=" rgb(30 64 175)" class="rounded-full">ADD ROOM(S)</el-button>
                    </div>
                    <p class="text-green-500 font-medium text-sm">Tip: You can make changes this book at any time you sigin in.</p>
                </div>
            </div>
            <div class="fex flex-col p-4 bg-white shadow-sm space-y-2 h-fit border border-gray-200">
                <div class="px-4 py-2 space-y-4">
                    <h6 class="text-blue-800 text-[16px] font-medium">
                        Family Trip
                    </h6>
                    <div class="flex flex-col space-y-2">
                        <div class="flex space-x-2 justify-between text-gray-700 text-sm">
                            <div >
                            <p class="font-medium">3 Room(s)</p>
                            <p class="text-gray-500 text-[12px]">(Services/extra beds includes)</p>
                            </div>
                            <p class="font-bold">US$ 1,060.00</p>
                        </div>

                        <div class="flex space-x-2 justify-between text-gray-700 text-sm">
                            <div >
                            <p class="font-medium">Discount</p>
                            <p class="text-gray-500 text-[12px]">Secret Deal</p>
                            </div>
                            <p class="font-bold">US$ 1,060.00</p>
                        </div>
                        <div class="flex space-x-2 justify-between text-blue-700 text-sm">
                            <p class="font-medium">SUBTOTAL 1</p>
                            <p class="font-bold">US$ 954.00</p>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-2">
                        <div class="flex space-x-2 justify-between text-gray-700 text-sm">
                            <div >
                            <p class="font-medium">Services Charge (SVC)</p>
                            <p class="text-gray-500 text-[12px]"></p>
                            </div>
                            <p class="font-bold">US$ 47.70</p>
                        </div>
                        <div class="flex space-x-2 justify-between text-blue-700 text-sm">
                            <p class="font-medium">NET PRICE </p>
                            <p class="font-bold">US$ 1,001.70</p>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-2">
                        <div class="flex space-x-2 justify-between text-blue-700 text-sm">
                            <div >
                            <p class="font-medium">TAXABLE AMOUNT</p>
                            <p class="text-gray-500 text-[12px]">(Exclude donation)</p>
                            </div>
                            <p class="font-bold">US$ 941.60</p>
                        </div>
                        <div class="flex space-x-2 justify-between text-gray-700 text-sm">
                            <p class="font-medium">City tax</p>
                            <p class="font-bold">US$ 18.83</p>
                        </div>
                        <div class="flex space-x-2 justify-between text-gray-700 text-sm">
                            <p class="font-medium">Vat</p>
                            <p class="font-bold">US$ 94.16</p>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-2">
                        <div class="flex space-x-2 justify-between text-blue-700 text-sm">
                            <div >
                            <p class="font-medium">RESERVATION PRICE</p>
                            <p class="text-gray-500 text-[12px]">(Gross price + Taxes)</p>
                            </div>
                            <p class="font-bold">US$ 1,114.69</p>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-2">
                        <div class="flex space-x-2 justify-between text-blue-700 text-sm">
                            <div >
                            <p class="font-medium">DISCONT</p>
                            <p class="text-gray-500 text-[12px]">(Special event)</p>
                            </div>
                            <p class="font-bold">- US$ 10.00</p>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-2">
                        <div class="flex space-x-2 justify-between text-red-500 text-sm">
                            <div >
                            <p class="font-medium">TOTAL</p>
                            <p class="text-gray-500 text-[12px]">You will pay at the property</p>
                            </div>
                            <p class="font-medium">US$ 1,104.69</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fex flex-col p-4 bg-white shadow-sm space-y-2 h-fit border border-gray-200">
                <div class="px-4 py-2 space-y-4">
                    <h6 class="text-blue-800 text-[16px] font-medium">
                        CHECK-IN/CHECK-OUT DATE
                    </h6>
                    <div class="flex flex-col space-y-2">
                        <div class="flex space-x-2 justify-between text-gray-500 text-sm">
                            <p class="">Check-in</p>
                            <p class="text-gray-700 font-medium">Thu, 20 Aug 2018</p>
                        </div>
                        <div class="flex space-x-2 justify-between text-gray-500 text-sm">
                            <p class="">Check-out</p>
                            <p class="text-gray-700 font-medium">Fri, 21 Aug 2018</p>
                        </div>

                        <div class="flex space-x-2 justify-between text-gray-500 text-sm">
                            <p class="">Total Stay</p>
                            <p class="text-gray-700 font-medium">1 night(s)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fex flex-col p-4 bg-white shadow-sm space-y-2 h-fit border border-gray-200">
                <div class="px-4 py-2 space-y-4">
                    <h6 class="text-blue-800 text-[16px] font-medium">
                        YOUR BOOKING INCLUDED
                    </h6>
                    <div class="grid grid-cols-3 gap-2">

                        <p class="col-span-1 px-1 py-1 bg-gray-200 text-sm text-gray-900 flex justify-center">Breakfast</p>
                        <p class="col-span-1 px-1 py-1 bg-gray-200 text-sm text-gray-900 flex justify-center">Free Wifi</p>
                        <p class="col-span-1 px-1 py-1 bg-gray-200 text-sm text-gray-900 flex justify-center">Free Parking</p>

                    </div>
                </div>
            </div>

            <div class="fex flex-col p-4 bg-white shadow-sm space-y-2 h-fit border border-gray-200">
                <div class="px-4 py-2 space-y-4">
                    <h6 class="text-blue-800 text-[16px] font-medium">
                        PROPERTIES POLOCIES 
                    </h6>
                    <div class="flex flex-col space-y-4">
                        <div class="flex space-x-2 text-gray-500 text-sm">
                            <p class="">Parking:</p>
                            <p class="text-gray-700 ">Free, Public, Off site</p>
                        </div>

                        <div class="flex space-x-2 text-gray-500 text-sm">
                            <p class="">Children:</p>
                            <p class="text-gray-700 ">Not allowed</p>
                        </div>

                        <div class="flex space-x-2 text-gray-500 text-sm">
                            <p class="">Internet:</p>
                            <p class="text-gray-700 ">Free Wifi property</p>
                        </div>

                        <div class="flex space-x-2 text-gray-500 text-sm">
                            <p class="">Langauges:</p>
                            <p class="text-gray-700 ">English, Arabic, Khmer</p>
                        </div>

                        <div class="flex space-x-2 text-gray-500 text-sm">
                            <p class="">Internet:</p>
                            <p class="text-gray-700 ">Free Wifi property</p>
                        </div>

                        <div class="flex space-x-2 text-gray-500 text-sm">
                            <p class="">Checkin time:</p>
                            <p class="text-gray-700 ">13:00 AM</p>
                        </div>

                        <div class="flex space-x-2 text-gray-500 text-sm">
                            <p class="">Checkout time:</p>
                            <p class="text-gray-700 ">12:00 PM</p>
                        </div>

                        <div class="flex space-x-2 text-gray-500 text-sm">
                            <p class="">Card Accept:</p>
                            <p class="text-gray-700 ">VISA, America Express</p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </el-aside>
        
        <el-container class="pl-16">
          <el-main>
            
            <div class="space-y-8">
                  <div class="fex flex-col p-4 bg-white space-y-2">
                    <div class="flex w-full">
                      <div class="w-48 p-2">
                          <img src="../../assets/room.jpg" alt="" class="h-full bg-cover">
                      </div>
                      <div class="flex flex-col p-2 space-y-2 w-full">
                          <h2 class="text-gray-800 text-xl font-semibold">{{ mybookngDetail.name }}</h2>
                          <div class="flex">
                              <el-rate v-model="Cardrate" class="h-4" disabled/>
                          </div>
                          <div class="flex space-x-1">
                              <LocationInformation class="w-5" color="rgb(156 163 175)"/>
                              <p class="text-gray-500 text-sm">No.134, Stree.51, Beoung Keng Kang I, Chamkar Mon, Phnom Penh, Cambodia</p>
                          </div>
                          <div class="flex items-center space-x-3">
                              <p class="py-1 px-5 bg-green-500 text-white text-xl font-bold ring-1 ring-green-400">
                              7.5
                              </p>
                              <p class="text-green-500 font-bold text-xl">Good</p>
                              <span class="border-l border-gray-700 h-4 opacity-40" ></span>
                              <p class="text-gray-500 text-[14px] opacity-70">
                                  from 912 reviews
                              </p>
                          </div>
                          <p class="text-sm text-green-500">This properties is in good location. Guest have rate it 8.7</p>
                      </div>
                    </div>
                  </div>

                  <div class="fex flex-col p-4 bg-white space-y-2">
                    <div class="flex justify-between w-full px-4">
                        <div class="grid grid-cols-2 w-1/2">
                            <p class="col-span-1 text-sm text-gray-500 py-2">Booking ID:</p>
                            <p class="col-span-1 text-sm text-gray-700 py-2">175.306.208</p>
                            <p class="col-span-1 text-sm text-gray-500 py-2">PIN code:</p>
                            <p class="col-span-1 text-sm text-gray-700 py-2">5514</p>
                            <p class="col-span-1 text-sm text-gray-500 py-2">Booking detail:</p>
                            <p class="col-span-1 text-sm text-gray-700 py-2">1 night(s), 2 room(s)</p>
                            <p class="col-span-1 text-sm text-gray-500 py-2">Check-in:</p>
                            <p class="col-span-1 text-sm text-gray-700 py-2">Wednesday, 15 March 2023(14:00 - 21:00)</p>
                            <p class="col-span-1 text-sm text-gray-500 py-2">Booking detail:</p>
                            <p class="col-span-1 text-sm text-gray-700 py-2">Thueday, 16 March 2023(Untill 12:00)</p>
                        </div>
                        <el-button plain color="" @click="clickCancelBooking = true" class="rounded-full">CANCEL THIS BOOKING</el-button>
                    </div>
                    

                </div>

                <div class="">
                    <div class="bg-blue-100 w-full">
                        <p class="text-blue-800 text-sm p-4 font-medium">YOUR PAYMENT DETAILS</p>
                    </div>
                    <div class="fex flex-col p-4 bg-white space-y-3">
                        <div class="flex w-full">
                            <div class="flex flex-col p-2 space-y-2 w-full justify-center">
                                <p class="text-green-500 text-sm font-medium">YOUR BOOKING IS NOW CONFIRMED.</p>
                                <p class="text-gray-600 text-sm">Payment will be token durring you stay at Mekong Dragin Hotel.</p>
                                <p class="text-blue-700 text-2sm ">Resevervation made with Cotafer.com is alway free</p>
                                <p class="text-gray-500 text-sm ">We never take any payment from guest.</p>
                            </div>
                        </div>                            
                    </div>
                </div>

                <div class="">
                    <div class="bg-blue-100 w-full">
                        <p class="text-blue-800 text-sm p-4 font-medium">LISH OF ROOM(s) THAT YOU BOOKED</p>
                    </div>
                    <div class="fex flex-col p-4 bg-white space-y-2">
                        <div class="flex flex-col">
                            <div class="flex w-full">
                                <div class="w-96 p-2">
                                    <img src="../../assets/room.jpg" alt="" class="h-full bg-cover">
                                </div>
                                <div class="flex flex-col p-2 space-y-2 w-full justify-center">
                                    <h2 class="text-gray-700 text-xl">Family Suite, 1 King bed with 1 Queen bed and Sofa bed</h2>
                                    <div class="flex space-x-4">
                                        <div class="flex space-x-2">
                                            <User class="w-[16px]" color="rgb(156 163 175)"/>
                                            <p class="text-sm text-gray-500">2 Guest</p>
                                        </div>
                                        <KnifeFork class="w-[16px]" color="rgb(55 65 81)"/>
                                        <font-awesome-icon icon="fa-solid fa-wifi" size="sm" color="rgb(55 65 81)"/>
                                        <font-awesome-icon icon="fa-solid fa-burger" size="sm" color="rgb(55 65 81)"/>
                                        <font-awesome-icon icon="fa-solid fa-mug-hot" size="sm" color="rgb(55 65 81)"/>
                                        <font-awesome-icon icon="fa-solid fa-person-rifle" size="sm" color="rgb(55 65 81)"/>
                                        <p class="text-sm text-blue-700 hover:underline cursor-pointer">VIEW DETAIL</p>
                                    </div>
                                    <p class="text-s text-blue-700">No repayment requires</p>
                                    <div class="flex space-x-1 ">
                                        <div class="flex justify-between w-full">
                                            <div class="flex flex-col">
                                                <h1 class="text-red-500 text-3xl font-bold text-left">US$ 29 <span class="text-sm font-light">/night</span></h1>
                                                <p class="text-sm text-green-500">Free cancellation untill 21 March 2023</p>
                                            </div>
                                            <el-button @click="clickCancelRoom = true" plain class="rounded-full py-5"> CANCEL ROOM</el-button>
                                        </div>
                                    </div>
                        
                                </div>
                            </div>
                            <div class="flex px-2 items-center space-x-4">
                                <p class="text-sm text-gray-500">Guest(s) name:</p>
                                <p class="text-sm text-gray-700 pr-8">Dara Sokha, Pheakdy Sok, Chan Sok</p>
                                <el-button plain color="rgb(30 64 175) " class="rounded-full py-1 px-5"> Edit</el-button>
                            </div>
                        </div>

                        <div class="flex flex-col">
                            <div class="flex w-full">
                                <div class="w-96 p-2">
                                    <img src="../../assets/room.jpg" alt="" class="h-full bg-cover">
                                </div>
                                <div class="flex flex-col p-2 space-y-2 w-full justify-center">
                                    <h2 class="text-gray-700 text-xl">Family Suite, 1 King bed with 1 Queen bed and Sofa bed</h2>
                                    <div class="flex space-x-4">
                                        <div class="flex space-x-2">
                                            <User class="w-[16px]" color="rgb(156 163 175)"/>
                                            <p class="text-sm text-gray-500">2 Guest</p>
                                        </div>
                                        <KnifeFork class="w-[16px]" color="rgb(55 65 81)"/>
                                        <font-awesome-icon icon="fa-solid fa-wifi" size="sm" color="rgb(55 65 81)"/>
                                        <font-awesome-icon icon="fa-solid fa-burger" size="sm" color="rgb(55 65 81)"/>
                                        <font-awesome-icon icon="fa-solid fa-mug-hot" size="sm" color="rgb(55 65 81)"/>
                                        <font-awesome-icon icon="fa-solid fa-person-rifle" size="sm" color="rgb(55 65 81)"/>
                                        <p class="text-sm text-blue-700 hover:underline cursor-pointer">VIEW DETAIL</p>
                                    </div>
                                    <p class="text-s text-blue-700">No repayment requires</p>
                                    <div class="flex space-x-1 ">
                                        <div class="flex justify-between w-full">
                                            <div class="flex flex-col">
                                                <h1 class="text-red-500 text-3xl font-bold text-left">US$ 29 <span class="text-sm font-light">/night</span></h1>
                                                <p class="text-sm text-green-500">Free cancellation untill 21 March 2023</p>
                                            </div>
                                            <el-button @click="clickCancelRoom = true" plain class="rounded-full py-5"> CANCEL ROOM</el-button>
                                        </div>
                                    </div>
                        
                                </div>
                            </div>
                            <div class="flex px-2 items-center space-x-4">
                                <p class="text-sm text-gray-500">Guest(s) name:</p>
                                <p class="text-sm text-gray-700 pr-8">Amanda Byness</p>
                                <el-button plain color="rgb(30 64 175) " class="rounded-full py-1 px-5"> Edit</el-button>
                            </div>
                        </div>

                        <div class="flex flex-col">
                            <div class="flex w-full">
                                <div class="w-96 p-2">
                                    <img src="../../assets/room.jpg" alt="" class="h-full bg-cover">
                                </div>
                                <div class="flex flex-col p-2 space-y-2 w-full justify-center">
                                    <h2 class="text-gray-700 text-xl">Family Suite, 1 King bed with 1 Queen bed and Sofa bed</h2>
                                    <div class="flex space-x-4">
                                        <div class="flex space-x-2">
                                            <User class="w-[16px]" color="rgb(156 163 175)"/>
                                            <p class="text-sm text-gray-500">2 Guest</p>
                                        </div>
                                        <KnifeFork class="w-[16px]" color="rgb(55 65 81)"/>
                                        <font-awesome-icon icon="fa-solid fa-wifi" size="sm" color="rgb(55 65 81)"/>
                                        <font-awesome-icon icon="fa-solid fa-burger" size="sm" color="rgb(55 65 81)"/>
                                        <font-awesome-icon icon="fa-solid fa-mug-hot" size="sm" color="rgb(55 65 81)"/>
                                        <font-awesome-icon icon="fa-solid fa-person-rifle" size="sm" color="rgb(55 65 81)"/>
                                        <p class="text-sm text-blue-700 hover:underline cursor-pointer">VIEW DETAIL</p>
                                    </div>
                                    <p class="text-s text-blue-700">No repayment requires</p>
                                    <div class="flex space-x-1 ">
                                        <div class="flex justify-between w-full">
                                            <div class="flex flex-col">
                                                <h1 class="text-red-500 text-3xl font-bold text-left">US$ 29 <span class="text-sm font-light">/night</span></h1>
                                                <p class="text-sm text-green-500">Free cancellation untill 21 March 2023</p>
                                            </div>
                                            <el-button @click="clickCancelRoom = true" plain class="rounded-full py-5"> CANCEL ROOM</el-button>
                                        </div>
                                    </div>
                        
                                </div>
                            </div>
                            <div class="flex px-2 items-center space-x-4">
                                <p class="text-sm text-gray-500">Guest(s) name:</p>
                                <p class="text-sm text-gray-700 pr-8">Amanda Byness</p>
                                <el-button plain color="rgb(30 64 175) " class="rounded-full py-1 px-5"> Edit</el-button>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="">
                    <div class="bg-blue-100 w-full">
                        <p class="text-blue-800 text-sm p-4 font-medium">CONVERSATION PROPERTY</p>
                    </div>
                    <div class="w-full flex flex-col overflow-hidden h-auto bg-white">
                        <div
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
                            <div class="bg-gray-200 text-gray-700 w-3/5 px-4 py-6">
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
                        <div class="w-full bg-white">
                        <div class="flex justify-between px-8 py-2 items-center">
                            <input
                            type="text"
                            placeholder="Message Here...."
                            class="focus:outline-none text-gray-700 w-full py-3 px-4 rounded-full  pr-16 focus:border focus:border-blue-700"
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
                </div>
            </div> 
            
            
          <!-- Modal Cancel Booking -->
          <el-dialog
            v-model="clickCancelBooking"
            width="50%"
            destroy-on-close
            center
            class="main py-2 rounded-md"
          
          >
          
            <div class="flex flex-col justify-center pt-8 px-2 space-x-4">
              <h1 class="text-2xl text-gray-800 font-bold text-center pb-4">Cancel Booking</h1>
              
              <div class="flex w-full pr-4">
                <div class="w-60 p-2">
                    <img src="../../assets/room.jpg" alt="" class="h-32 bg-cover ">
                </div>
                <div class="flex flex-col p-2 space-y-2 w-full">
                    <h2 class="text-gray-800 text-[18px] font-medium">{{ mybookngDetail.name }}</h2>
                    <div class="flex">
                        <el-rate v-model="Cardrate" class="h-4" disabled/>
                        <p class="text-gray-500 text-sm">1 rooms(s), 1 Adult(s), 1 night(s)</p>
                    </div>
                    <p class="text-blue-700 text-sm ">Thu, 22 March 2018 - Fri 23 March 2023</p>
                    <div class="flex space-x-1">
                        <LocationInformation class="w-5" color="rgb(156 163 175)"/>
                        <p class="text-gray-500 text-sm">No.134, Stree.51, Beoung Keng Kang I, Chamkar Mon, Phnom Penh, Cambodia</p>
                    </div>
                
                </div>
              </div>
              <div class="flex-col divide-y pr-4 py-2 space-y-4">
                <div class="flex justify-start flex-col space-y-3">
                  <p class="text-sm text-red-500 font-medium"> Cancellation Fee</p>
                  <div class="flex justify-between">
                    <p class="text-sm text-gray-500"> Standard room, 1 King Bed with 1 Sofa Bed  <span class="text-gray-700 pl-2">x3</span></p>
                    <p class="text-sm text-gray-700">Free</p>
                  </div> 
                  <div class="flex justify-between">
                    <p class="text-sm text-gray-700 font-medium">TOTAL</p>
                    <p class="text-2sm text-red-500 font-medium">Free</p>
                  </div> 
                </div>

                <div class="flex justify-start flex-col space-y-1">
                  <p class="text-gray-700 text-sm pt-2 font-medium">What your to cancelling?</p>
                  <el-radio-group v-model="radio5" class="flex flex-col items-start ">
                  <el-radio label="1" size="large"><p class="text-sm font-normal  text-gray-500">I found a better place to stay.</p></el-radio>
                  <el-radio label="2" size="large"><p class="text-sm font-normal  text-gray-500">I found a better space on another offer.</p></el-radio>
                  <el-radio label="3" size="large"><p class="text-sm font-normal  text-gray-500">I am no longer visting this destination</p></el-radio>
                  <el-radio label="4" size="large"><p class="text-sm font-normal  text-gray-500">Others</p></el-radio>
                </el-radio-group>
                </div>

                <div class="flex justify-start flex-col space-y-1">
                  <p class="text-gray-700 text-sm pt-2 font-medium">Disclaimer</p>
                  <p class="text-gray-500 text-sm ">If you cancel this room, the donation will be nullified. Are you sure you want to cancel this room?</p>
                </div>
              </div>
                
            </div>
            <template #footer class="">
              <span class="dialog-footer ">
                <el-button @click="clickCancelBooking = false" color="rgb(29 78 216)" class=" w-full text-blue-700 rounded-full hover:bg-blue-600 py-5 px-8">
                  YES, CANCEL THIS BOOKING
                </el-button>
              </span>
            </template>
          </el-dialog>
          <!-- Modal Cancel Booking -->

          <!-- Modal Cancel Room -->
          <el-dialog
            v-model="clickCancelRoom"
            width="50%"
            destroy-on-close
            center
            class="main py-2 rounded-md"
          >
            <div class="flex flex-col justify-center pt-8 px-2 space-x-4 ">
              <h1 class="text-2xl text-gray-800 font-bold text-center pb-4">Cancel Room</h1>
              <div class="flex flex-col pr-2 ">
                  <div class="flex w-full">
                      <div class="w-96 ">
                          <img src="../../assets/room.jpg" alt="" class="h-full bg-cover">
                      </div>
                      <div class="flex flex-col p-2 space-y-2 w-full justify-center">
                          <h2 class="text-gray-700 text-xl">Family Suite, 1 King bed with 1 Queen bed and Sofa bed</h2>
                          <div class="flex space-x-4">
                              <div class="flex space-x-2">
                                  <User class="w-[16px]" color="rgb(156 163 175)"/>
                                  <p class="text-sm text-gray-500">2 Guest</p>
                              </div>
                          </div>
                          <p class="text-s text-blue-700">No repayment requires</p>
                          <div class="flex space-x-1 ">
                              <div class="flex justify-between w-full">
                                  <div class="flex flex-col">
                                      <h1 class="text-red-500 text-3xl font-bold text-left">US$ 29 <span class="text-sm font-light">/night</span></h1>
                                      <p class="text-sm text-green-500">Free cancellation untill 21 March 2023</p>
                                  </div>
                              </div>
                          </div>
              
                      </div>
                  </div>
                  <div class="flex py-2 items-center space-x-4 ">
                      <p class="text-sm text-gray-500">Guest(s) name:</p>
                      <p class="text-sm text-gray-700 pr-8">Dara Sokha, Pheakdy Sok, Chan Sok</p>
                  </div>
              </div>

              <div class="flex-col divide-y pr-4 py-2 space-y-4">
                <div class="flex justify-start flex-col space-y-3">
                  <p class="text-sm text-red-500 font-medium"> Cancellation Fee</p>
                  <div class="flex justify-between">
                    <p class="text-sm text-gray-500"> Standard room, 1 King Bed with 1 Sofa Bed  <span class="text-gray-700 pl-2">x3</span></p>
                    <p class="text-sm text-gray-700">Free</p>
                  </div> 
                </div>

                <div class="flex justify-start flex-col space-y-1">
                  <p class="text-gray-700 text-sm pt-2 font-medium">Disclaimer</p>
                  <p class="text-gray-500 text-sm ">If you cancel this room, the donation will be nullified. Are you sure you want to cancel this room?</p>
                </div>
              </div>
                
            </div>
            <template #footer class="">
              <span class="dialog-footer ">
                <el-button @click="clickCancelRoom = false" color="rgb(29 78 216)" class=" w-full text-blue-700 rounded-full hover:bg-blue-600 py-5 px-8">
                  YES, CANCEL THIS ROOM
                </el-button>
              </span>
            </template>
          </el-dialog>
          <!-- Modal Cancel Room -->
          </el-main>
        </el-container>

      </el-container>
      <!-- Content -->

      <!-- Footer Content -->
      <h1 class="px-16 font-bold text-gray-800 text-2xl">Frequently Asked Questions</h1>
      <el-container class="px-16 py-2 pb-4">
        <el-main class="bg-white p-6">
          <div class="flex flex-col space-y-4">
            <div class="space-y-2">
              <p class="text-gray-500 text-sm">Email Property: <span class="text-gray-600 pl-4">info@mail.com</span></p>
              <p class="text-gray-500 text-sm">Call Property: <span class="text-gray-600 pl-4">(+855) 12 999 000</span></p>
            </div>
            <div class="space-y-2 text-justify">
              <p class="font-bold text-red-500 text-xl">Q <span class="text-sm font-normal text-gray-700 pl-2">What is going to change my credit card and when?</span></p>
              <p class="font-bold text-blue-700 text-xl">A <span class="text-sm font-normal text-gray-700 pl-2 m-0">No payment is required for your booking. The properties has the right to verify your credit card , and may hold an amount temporily or until after check-out.</span></p>
              <div class="flex justify-end text-blue-700 items-center">
                <p class="text-sm">Was this usefull? </p>
                <el-radio-group v-model="radio4" class="flex space-x-16 items-start px-8">
                  <el-radio label="1" size="large"><p class="text-[14px] font-light  text-blue-700">Yes</p></el-radio>
                  <el-radio label="2" size="large"><p class="text-[14px] font-light  text-blue-700">No</p></el-radio>
                </el-radio-group>
              </div>
            </div>
            <div class="space-y-2 text-justify">
              <p class="font-bold text-red-500 text-xl">Q <span class="text-sm font-normal text-gray-700 pl-2">Can I pay my trip in advenced (patial or full)?</span></p>
              <p class="font-bold text-blue-700 text-xl">A <span class="text-sm font-normal text-gray-700 pl-2 m-0">This depend on the property. Please contact them to make the nessacsary arrangements.</span></p>
              <div class="flex justify-end text-blue-700 items-center">
                <p class="text-sm">Was this usefull? </p>
                <el-radio-group v-model="radio1" class="flex space-x-16 items-start px-8">
                  <el-radio label="1" size="large"><p class="text-[14px] font-light  text-blue-700">Yes</p></el-radio>
                  <el-radio label="2" size="large"><p class="text-[14px] font-light  text-blue-700">No</p></el-radio>
                </el-radio-group>
              </div>
            </div>
            <div class="space-y-2 text-justify">
              <p class="font-bold text-red-500 text-xl">Q <span class="text-sm font-normal text-gray-700 pl-2">I cancelled my booking when I'll recieved my preppayment back?</span></p>
              <p class="font-bold text-blue-700 text-xl">A <span class="text-sm font-normal text-gray-700 pl-2 m-0">Whethe you are due a refund will depend on the property's cancellation property, and can take average of 10 days to be refunded. For more wxact information, please contact the property dirrectly.</span></p>
              <div class="flex justify-end text-blue-700 items-center">
                <p class="text-sm">Was this usefull? </p>
                <el-radio-group v-model="radio2" class="flex space-x-16 items-start px-8">
                  <el-radio label="1" size="large"><p class="text-[14px] font-light  text-blue-700">Yes</p></el-radio>
                  <el-radio label="2" size="large"><p class="text-[14px] font-light  text-blue-700">No</p></el-radio>
                </el-radio-group>
              </div>
            </div>
            <div class="space-y-2 text-justify">
              <p class="font-bold text-red-500 text-xl">Q <span class="text-sm font-normal text-gray-700 pl-2">What free are included from my booking?</span></p>
              <p class="font-bold text-blue-700 text-xl">A <span class="text-sm font-normal text-gray-700 pl-2 m-0">There no additional fee in your booking. Please see your price breakdown. <span class="text-blue-700 underline cursor-pointer">View your price detail</span></span></p>
              <div class="flex justify-end text-blue-700 items-center">
                <p class="text-sm">Was this usefull? </p>
                <el-radio-group v-model="radio3" class="flex space-x-16 items-start px-8">
                  <el-radio label="1" size="large"><p class="text-[14px] font-light  text-blue-700">Yes</p></el-radio>
                  <el-radio label="2" size="large"><p class="text-[14px] font-light  text-blue-700">No</p></el-radio>
                </el-radio-group>
              </div>
            </div>
            <div v-if="isShow">
              <p class="text-sm tex-gray-500">No Questions More</p>
            </div>
          </div>
          <div class="flex justify-center pb-2 items-center pt-6">
           <p @click="showMore" class="p-3 ring-1 w-full text-center rounded-full ring-blue-700 text-blue-700 font-medium cursor-pointer hover:bg-blue-700 hover:text-white">
            <span v-if="isShow" >SHOW LESS</span>
            <span v-else >SHOW MORE</span>
            </p>
        </div>
        </el-main>
      </el-container>
      <!-- Footer Content -->

      <!-- Footer -->
      <footer class="pt-2">
        <FooterContent />
      </footer>
      <!-- Footer -->

    </el-container>
  </div>
</template>
<script>
import { ref } from "vue";
import data from "../../data/countries.json";
import Navigation from "../../components/Navigation.vue";
import DatePicker from "../../components/DatePicker.vue";
import AutoComplete from "../../components/AutoComlete.vue";
import BookingInfo from "../../components/BookingInfo.vue";
import FooterContent from "../../components/FooterContent.vue";
import { LocationInformation,User, KnifeFork } from "@element-plus/icons-vue";
export default {
  setup(){
    const Cardrate = ref([5]);
    const radio1 = ref('1');
    const radio2 = ref('1');
    const radio3 = ref('1');
    const radio4 = ref('1');
    const radio5 = ref('1');
    const clickCancelBooking = ref(false);
    const clickCancelRoom = ref(false);
    const isShow = ref(false);
    const showMore = () =>{
    isShow.value =! isShow.value;
}

    return {Cardrate, radio3,radio4,radio2,radio1,isShow,showMore, clickCancelBooking,clickCancelRoom,radio5};
  },
  components: {FooterContent,BookingInfo,AutoComplete,DatePicker,Navigation,LocationInformation,User,KnifeFork},
  computed: {
    mybookingDetailID() {
      return parseInt(this.$route.params.id);
    },
    mybookngDetail() {
      return data.items.find((item) => item.id === this.mybookingDetailID);
    },
  },
};
</script>
<style>
.el-button + .el-button{
  margin: 0;
} 
</style>
