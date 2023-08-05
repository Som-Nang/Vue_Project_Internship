<template>


  <div class="common-layout bg-gray-100">
    <el-container class="">
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
        <div class="flex flex-col items-center p-4">
          <h6 class="text-[12px] text-gray-600">Home/Cambodia/Phnompenh</h6>
          <h1 class="text-3xl text-blue-800 font-bold">Ankor Wat</h1>
          <el-rate v-model="Cardrate" class="" disabled />
          <h6 class="text-[12px] text-gray-600">No.134, street.51, Boeung Keng Kang I, Chamkar Mom, Phnom Penh Cambodia</h6>
          <router-link to="/hotel/hotelViewByMap" class="text-[12px] text-blue-800 hover:underline">View in map</router-link>
        </div>
      </el-header>
      

      <el-container>
        <el-main  id="main">
          <div class="space-y-8 ">
            <div class="grid grid-cols-4 gap-1 px-16">
              <div class="col-span-4">
                <img src="../assets/pp2.jpg" class="w-full h-fit" alt="">
              </div>
              <div class="col-span-1">
                <img src="../assets/pp2.jpg" class="w-full h-48" alt="">
              </div>
              <div class="col-span-1">
                <img src="../assets/pp1.jpg" class="w-full h-48" alt="">
              </div>
              <div class="col-span-1">
                <img src="../assets/room.jpg" class="w-full h-48" alt="">
              </div>
              <div class="relative col-span-1 flex items-center justify-center cursor-pointer">
                <img src="../assets/beach.jpg" class=" w-full h-48" alt="">
                <p class="absolute  text-gray-300 flex items-center justify-center bg-black/70 w-full h-full hover:underline">VIEW ALL</p>
              </div>
            </div>

            <div class="grid grid-cols-4 gap-8 px-16">
              <div class="col-span-1 space-y-3">
                <div class="border-2 border-green-500 p-2 flex items-center space-x-3 ">
                  <p class="py-1 px-5 bg-green-500 text-white text-xl font-bold ring-1 ring-green-400">
                    7.5
                  </p>
                  <div class="flex flex-col mb-0">
                    <span class="text-green-500 font-bold text-xl">Good</span>
                    <span class="text-gray-500 text-[14px] opacity-70">
                      from 912 reviews
                    </span>
                  </div>
                </div>
                <p class="text-sm text-gray-600 text-justif">Like this property? Add it to your wishlist or recommend it to your frinds.</p>
                <div class="flex flex-col w-full">
                  <el-button type="" plain class="py-5 my-2" color="rgb(30 64 175)">RECOMMEND THIS PROPERTY</el-button>
                  <el-button type="" plain class="py-5 my-2" color="rgb(30 64 175)">ADD TO WISHLISH</el-button>
                </div>
              </div>

              <div class="col-span-3">
                <h1 class="text-gray-700 text-xl font-bold">Properties Description</h1>
                <p class="text-sm text-gray-600 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae dolores quia amet quidem iste nemo similique odit at fuga sed, adipisci error sit, ducimus explicabo minima laboriosam impedit illum vitae autem. Doloremque at asperiores quisquam excepturi ab distinctio blanditiis! Repudiandae dolorum, saepe ad nisi sunt deserunt consequuntur magni maiores beatae minus, quae eveniet quo corrupti perferendis nemo magnam nesciunt nihil perspiciatis porro culpa esse voluptates amet minima repellendus. Facere voluptate omnis, quisquam quas blanditiis eius saepe sint recusandae vitae, exercitationem nam quasi adipisci perspiciatis repellat magnam error ipsum voluptates possimus? Quia dignissimos illum qui natus quisquam sint temporibus, atque perspiciatis!</p>
                <p class="text-sm text-blue-800 text-end cursor-pointer hover:text-blue-900">READ MORE</p>
                <h1 class="text-gray-700 text-xl font-bold">Most Popular Facilities</h1>
                
                <div class="flex space-x-3 py-4">
                  <div class="flex flex-col justify-center items-center w-full">
                    <div class="border border-gray-500 w-fit p-4 px-12">
                      <font-awesome-icon icon="fa-solid fa-wifi " size="2xl" color="rgb(55 65 81)"/>
                    </div>
                   <p class="text-sm text-gray-600">Free Wifi</p>
                  </div>
                  <div class="flex flex-col justify-center items-center w-full">
                    <div class="border border-gray-700 w-fit p-4 px-12">
                      <Fries class="w-8"/>
                    </div>
                   <p class="text-sm text-gray-600">Meal</p>
                  </div>
                  <div class="flex flex-col justify-center items-center w-full">
                    <div class="border border-gray-500 w-fit p-4 px-12">
                      <KnifeFork class="w-8"/>
                    </div>
                   <p class="text-sm text-gray-600">Food & Drink</p>
                  </div>
                  <div class="flex flex-col justify-center items-center w-full">
                    <div class="border border-gray-500 w-fit p-4 px-12">
                      <font-awesome-icon icon="fa-solid fa-mug-hot " size="2xl" color="rgb(55 65 81)"/>
                    </div>
                   <p class="text-sm text-gray-600">Cafe</p>
                  </div>
                  <div class="flex flex-col justify-center items-center w-full">
                    <div class="border border-gray-500 w-fit p-4 px-12">
                      <Place class="w-8"/>
                    </div>
                   <p class="text-sm text-gray-600">Swinmming Poor</p>
                  </div>
                  <div class="flex flex-col justify-center items-center w-full">
                    <div class="border border-gray-500 w-fit p-4 px-12">
                      <ShoppingCart class="w-8"/>
                    </div>
                   <p class="text-sm text-gray-600">Shopping </p>
                  </div>
                </div>
              </div>

            </div>

            <div class="flex flex-row justify-between w-full px-16">
              <h1 class="text-gray-700 text-xl font-bold">Room Availabilities</h1>
             <div class="flex space-x-4">
              <div class=" bg-white px-5 py-2 rounded-full border border-gray-200  hover:border-blue-700" id="datePiker">
                <DatePicker class="w-full font-medium  " id=""/>
              </div>
                <button class="text-sm text-white bg-blue-800 rounded-full w-60 p-2">CHECK AVAILABITIES</button>
             </div>
            </div>

            <div class="grid grid-cols-4 gap-8 px-16">
                <div class="col-span-3">
                  <div class="flex flex-col w-full space-y-4">
                    <div class="flex items-center bg-white p-4">
                      <!-- right -->
                      <div class="relative w-full fex flex-col p-4 bg-white space-y-2">
                        <div class="flex w-full">
                          <div class="w-96 p-2">
                            <img
                            src="../assets/bedroom.png"
                            alt=""
                            class="h-full bg-cover"
                            />
                            <p  class="text-blue-700 text-sm py-2">Show more detail</p>
                          </div>

                          <div class="flex flex-col p-2 space-y-2 w-full" id="roomSellect">
                            <h2 class="text-gray-800 text-2sm">
                              Family suite, 1 kind bed with 1 Queen bed and sofa bed
                            </h2>
                            <div class="flex space-x-4">
                              <div class="flex space-x-2">
                                <Avatar class="w-4" color="rgb(107 114 128)"/>
                                <p class="text-gray-800 text-sm">2 guests</p>
                              </div>
                              <div class="flex space-x-2">
                                <Switch class="w-5 "  color="rgb(107 114 128) " />
                                <Fries class="w-5 " color="rgb(107 114 128) " />
                                <KnifeFork class="w-5 " color="rgb(107 114 128) " />
                                <Coffee class="w-5 "  color="rgb(107 114 128) " />
                                <Place class="w-5 " color="rgb(107 114 128) " />
                              </div>
                            </div>
                            <h2 class="text-gray-800 text-sm">
                              Free cancellation
                            </h2>
                            <!-- <el-button plain color class="rounded-full w-fit py-5 px-32" data-toggle="dropdown"> 3 Room Sellected</el-button> -->
                            <RoomSellection/>
                            <p  class="text-green-500 text-sm">WITH INCLUSIVE SERVICES</p>
                          </div>
                        </div>
                      </div>

                      <!-- left -->
                      <div class="w-2/5 p-4 pl-8">
                        <div class="flex justify-end space-x-4 divide-x">
                          <div class="flex flex-col p-2 space-y-2">
                              <p  class="text-blue-700 text-sm text-right">Inclusive Services Included</p>
                              <p  class="text-green-500 text-sm text-right">Save US$3/room on first 3 rooms</p>
                            
                            <div class="flex space-x-4 text-right items-center">
                              <h1 class="text-xl text-gray-400  line-through">US$ 34</h1>
                              <h1 class="text-3xl text-red-500 font-bold">US$ 29 <span class="text-sm font-light">/night</span></h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex items-center bg-white p-4">
                      <!-- right -->
                      <div class="relative w-full fex flex-col p-4 bg-white space-y-2">
                        <div class="flex w-full">
                          <div class="w-96 p-2">
                            <img
                            src="../assets/bedroom.png"
                            alt=""
                            class="h-full bg-cover"
                            />
                            <p  class="text-blue-700 text-sm py-2">Show more detail</p>
                          </div>

                          <div class="flex flex-col p-2 space-y-2 w-full" id="roomSellect">
                            <h2 class="text-gray-800 text-2sm">
                              Family suite, 1 kind bed with 1 Queen bed and sofa bed
                            </h2>
                            <div class="flex space-x-4">
                              <div class="flex space-x-2">
                                <Avatar class="w-4" color="rgb(107 114 128)"/>
                                <p class="text-gray-800 text-sm">2 guests</p>
                              </div>
                              <div class="flex space-x-2">
                                <Switch class="w-5 "  color="rgb(107 114 128) " />
                                <Fries class="w-5 " color="rgb(107 114 128) " />
                                <KnifeFork class="w-5 " color="rgb(107 114 128) " />
                                <Coffee class="w-5 "  color="rgb(107 114 128) " />
                                <Place class="w-5 " color="rgb(107 114 128) " />
                              </div>
                            </div>
                            <h2 class="text-gray-800 text-sm">
                              Free cancellation
                            </h2>
                            <el-button plain disabled  class="rounded-full w-[263px] px-2 py-5" data-toggle="dropdown">Sellect Room</el-button>
                          </div>
                        </div>
                      </div>

                      <!-- left -->
                      <div class="w-2/5 p-4 pl-8">
                        <div class="flex justify-end space-x-4 divide-x">
                          <div class="flex flex-col p-2 space-y-2 bottom-0">
                              <!-- <p  class="text-blue-700 text-sm text-right">Inclusive Services Included</p> -->
                              <p  class="text-green-500 text-sm text-right bottom-0">Available from 31 Aug</p>
                            
                            <div class="flex space-x-4 text-right bottom-0">
                              <!-- <h1 class="text-xl text-gray-400  line-through">US$ 34</h1> -->
                              <h1 class="text-3xl text-gray-200 font-bold">SOLD OUT</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex items-center bg-white p-4">
                      <!-- right -->
                      <div class="relative w-full fex flex-col p-4 bg-white space-y-2">
                        <div class="flex w-full">
                          <div class="w-96 p-2">
                            <img
                            src="../assets/bedroom.png"
                            alt=""
                            class="h-full bg-cover"
                            />
                            <p  class="text-blue-700 text-sm py-2">Show more detail</p>
                          </div>

                          <div class="flex flex-col p-2 space-y-2 w-full" id="roomSellect">
                            <h2 class="text-gray-800 text-2sm">
                              Family suite, 1 kind bed with 1 Queen bed and sofa bed
                            </h2>
                            <div class="flex space-x-4">
                              <div class="flex space-x-2">
                                <Avatar class="w-4" color="rgb(107 114 128)"/>
                                <p class="text-gray-800 text-sm">2 guests</p>
                              </div>
                              <div class="flex space-x-2">
                                <Switch class="w-5 "  color="rgb(107 114 128) " />
                                <Fries class="w-5 " color="rgb(107 114 128) " />
                                <KnifeFork class="w-5 " color="rgb(107 114 128) " />
                                <Coffee class="w-5 "  color="rgb(107 114 128) " />
                                <Place class="w-5 " color="rgb(107 114 128) " />
                              </div>
                            </div>
                            <h2 class="text-gray-800 text-sm">
                              Free cancellation
                            </h2>
                            <RoomSellection/>
                            <p  class="text-green-500 text-sm">WITH INCLUSIVE SERVICES</p>
                          </div>
                        </div>
                      </div>

                      <!-- left -->
                      <div class="w-2/5 p-4 pl-8">
                        <div class="flex justify-end space-x-4 divide-x">
                          <div class="flex flex-col p-2 space-y-2">
                              <!-- <p  class="text-blue-700 text-sm text-right">Inclusive Services Included</p>
                              <p  class="text-green-500 text-sm text-right">Save US$3/room on first 3 rooms</p> -->
                            
                            <div class="flex space-x-4 text-right items-center">
                              <h1 class="text-xl text-gray-400  line-through">US$ 34</h1>
                              <h1 class="text-3xl text-red-500 font-bold">US$ 29 <span class="text-sm font-light">/night</span></h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex items-center bg-white p-4">
                      <!-- right -->
                      <div class="relative w-full fex flex-col p-4 bg-white space-y-2">
                        <div class="flex w-full">
                          <div class="w-96 p-2">
                            <img
                            src="../assets/bedroom.png"
                            alt=""
                            class="h-full bg-cover"
                            />
                            <p  class="text-blue-700 text-sm py-2">Show more detail</p>
                          </div>

                          <div class="flex flex-col p-2 space-y-2 w-full" id="roomSellect">
                            <h2 class="text-gray-800 text-2sm">
                              Family suite, 1 kind bed with 1 Queen bed and sofa bed
                            </h2>
                            <div class="flex space-x-4">
                              <div class="flex space-x-2">
                                <Avatar class="w-4" color="rgb(107 114 128)"/>
                                <p class="text-gray-800 text-sm">2 guests</p>
                              </div>
                              <div class="flex space-x-2">
                                <Switch class="w-5 "  color="rgb(107 114 128) " />
                                <Fries class="w-5 " color="rgb(107 114 128) " />
                                <KnifeFork class="w-5 " color="rgb(107 114 128) " />
                                <Coffee class="w-5 "  color="rgb(107 114 128) " />
                                <Place class="w-5 " color="rgb(107 114 128) " />
                              </div>
                            </div>
                            <h2 class="text-gray-800 text-sm">
                              Free cancellation
                            </h2>
                            <RoomSellection/>
                            <p  class="text-green-500 text-sm">WITH INCLUSIVE SERVICES</p>
                          </div>
                        </div>
                      </div>

                      <!-- left -->
                      <div class="w-2/5 p-4 pl-8">
                        <div class="flex justify-end space-x-4 divide-x">
                          <div class="flex flex-col p-2 space-y-2">
                              <p  class="text-sky-400 text-sm text-right">Inclusive Services Included</p>
                              <!-- <p  class="text-green-500 text-sm text-right">Save US$3/room on first 3 rooms</p> -->
                            
                            <div class="flex space-x-4 text-right items-center">
                              <h1 class="text-xl text-gray-400  line-through">US$ 34</h1>
                              <h1 class="text-3xl text-red-500 font-bold">US$ 29 <span class="text-sm font-light">/night</span></h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div v-if="isShow">No Room</div>

                    <div class="flex justify-center pb-6 w-full py-4 px-1">
                      <p @click="showMore" class="p-3 w-full text-center ring-1 ring-blue-700 text-blue-700 font-medium cursor-pointer hover:bg-blue-700 hover:text-white">
                        <span v-if="isShow" >SHOW LESS </span>
                        <span v-else >SHOW ALL ROOM</span>
                      </p>
                    </div>
                  </div>

                  
                </div>
                
                <div class="col-span-1 border border-gray-300 p-4 h-fit">
                  <div class=" flex flex-col items-center justify-center space-y-4">
                   
                    <h1 class="text-gray-700 text-xl font-bold">YOUR BOOKING</h1>
                    <div class="flex flex-col items-center">
                      <p  class="text-gray-500 text-sm">Please select your design room(s)</p>
                      <h1 class="text-3xl text-gray-500 font-bold">US$ 0</h1>
                    </div>
                    <button @click="centerDialogVisible = true" type="submit"  class="border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-200">BOOK NOW</button>
                    <div class="flex flex-col">
                      <p  class="text-gray-500 text-sm">No register is required</p>
                      <p  class="text-green-500 text-sm">Book without credit card</p>
                    </div>
                    <div class="flex flex-col text-center">
                      <p  class="text-gray-500 text-sm">With this booking you will learn</p>
                      <h1 class="text-xl text-gray-500 font-bold">US$ 0 <span class="font-light text-sm text-gray-500">for donation</span></h1>
                    </div>
                  </div>
                </div>
            </div>

            <!-- Tap -->
            <div class="px-16 bg-white w-full py-8 space-y-4 ">
             <NoneCommentTap/>
            </div>
            <!-- Tap -->

            <div class="px-16 space-y-4">
              <h1 class="text-gray-700 text-xl font-bold">You may also like these properties</h1>
              <div class="grid grid-cols-3 gap-8">
                <div class="col-span-1 flex flex-col bg-white hover:shadow-xl">
                  <img src="../assets/room.jpg" class=" h-fit" alt="room">
                  <div class="flex flex-col p-4 px-8">
                    <p class="text-2sm text-blue-700 cursor-pointer hover:underline">Homedule Hotel</p>
                    <el-rate v-model="Cardrate" class="" disabled />
                  </div>
                  <div class="px-8 pb-4 flex justify-between items-center space-x-3 ">
                    <div class="flex space-x-2">
                      <p class="py-1 px-5 bg-green-500 text-white text-xl font-bold ring-1 ring-green-400">
                      7.5
                    </p>
                    <p class="text-green-500 font-bold text-xl">Good</p>
                    </div>
                    
                    <div class="flex items-center space-x-2">
                      <h1 class="text-xl text-gray-400  line-through">US$ 22</h1>
                      <h1 class="text-2xl text-red-500 font-bold">US$ 18</h1>
                    </div>
                  </div>
                </div>

                <div class="col-span-1 flex flex-col bg-white hover:shadow-xl">
                  <img src="../assets/room.jpg" class=" h-fit" alt="room">
                  <div class="flex flex-col p-4 px-8">
                    <p class="text-2sm text-blue-700 cursor-pointer hover:underline">Homedule Hotel</p>
                    <el-rate v-model="Cardrate" class="" disabled />
                  </div>
                  <div class="px-8 pb-4 flex justify-between items-center space-x-3 ">
                    <div class="flex space-x-2">
                      <p class="py-1 px-5 bg-green-500 text-white text-xl font-bold ring-1 ring-green-400">
                      7.5
                    </p>
                    <p class="text-green-500 font-bold text-xl">Good</p>
                    </div>
                    
                    <div class="flex items-center space-x-2">
                      <h1 class="text-xl text-gray-400  line-through">US$ 22</h1>
                      <h1 class="text-2xl text-red-500 font-bold">US$ 18</h1>
                    </div>
                  </div>
                </div>

                <div class="col-span-1 flex flex-col bg-white hover:shadow-xl">
                  <img src="../assets/room.jpg" class=" h-fit" alt="room">
                  <div class="flex flex-col p-4 px-8">
                    <p class="text-2sm text-blue-700 cursor-pointer hover:underline">Homedule Hotel</p>
                    <el-rate v-model="Cardrate" class="" disabled />
                  </div>
                  <div class="px-8 pb-4 flex justify-between items-center space-x-3 ">
                    <div class="flex space-x-2">
                      <p class="py-1 px-5 bg-green-500 text-white text-xl font-bold ring-1 ring-green-400">
                      7.5
                    </p>
                    <p class="text-green-500 font-bold text-xl">Good</p>
                    </div>
                    
                    <div class="flex items-center space-x-2">
                      <h1 class="text-xl text-gray-400  line-through">US$ 22</h1>
                      <h1 class="text-2xl text-red-500 font-bold">US$ 18</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white w-full px-16 py-8 space-y-4">
              <h1 class="text-gray-700 text-xl font-bold">Charity Projects</h1>
              <p class="text-sm text-gray-600">With every booking, you earn a reward, whch you can use to donate to the charity project. Otherwist please take amounth of your time go to <span class="text-red-500 cursor-pointer hover:underline">Cotafer foundation</span> to view all.</p>
              
              <div class="grid grid-cols-4 gap-8 ">

                <div class="col-span-1 flex flex-col hover:shadow-xl cursor-pointer">
                  <img src="../assets/angkorHospital.jpg" class=" h-fit" alt="room">
                  <div class="flex flex-col p-4">
                    <p class="text-2sm text-blue-700 cursor-pointer hover:underline">Angkor Hospital for children</p>
                    <p class="text-sm text-gray-600">The Angkor Hospital for childen (AHC). is a charitable organiztion, was found by Jappanese phtographer Kento...</p>
                  </div>
                </div>

                <div class="col-span-1 flex flex-col hover:shadow-xl cursor-pointer">
                  <img src="../assets/angkorHospital.jpg" class=" h-fit" alt="room">
                  <div class="flex flex-col p-4">
                    <p class="text-2sm text-blue-700 cursor-pointer hover:underline">Angkor Hospital for children</p>
                    <p class="text-sm text-gray-600">The Angkor Hospital for childen (AHC). is a charitable organiztion, was found by Jappanese phtographer Kento...</p>
                  </div>
                </div>

                <div class="col-span-1 flex flex-col hover:shadow-xl cursor-pointer">
                  <img src="../assets/angkorHospital.jpg" class=" h-fit" alt="room">
                  <div class="flex flex-col p-4">
                    <p class="text-2sm text-blue-700 cursor-pointer hover:underline">Angkor Hospital for children</p>
                    <p class="text-sm text-gray-600">The Angkor Hospital for childen (AHC). is a charitable organiztion, was found by Jappanese phtographer Kento...</p>
                  </div>
                </div>

                <div class="col-span-1 flex flex-col hover:shadow-xl cursor-pointer">
                  <img src="../assets/angkorHospital.jpg" class=" h-fit" alt="room">
                  <div class="flex flex-col p-4">
                    <p class="text-2sm text-blue-700 cursor-pointer hover:underline">Angkor Hospital for children</p>
                    <p class="text-sm text-gray-600">The Angkor Hospital for childen (AHC). is a charitable organiztion, was found by Jappanese phtographer Kento...</p>
                  </div>
                </div>

              </div>
            </div> 
            
          </div>
          <!-- Modal -->
          <el-dialog
            v-model="centerDialogVisible"
            width="40%"
            destroy-on-close
            center
            class="main"
          >
            <div class="space-y-2" id="modal">
              <el-carousel :interval="5000" arrow="always" w-full>
                <el-carousel-item v-for="item in 2" :key="item" class="absolute w-full">
                </el-carousel-item>
              </el-carousel>
              <div class="px-8 pb-6">
                <div class="flex justify-between py-2 items-center">
                  <div class="flex flex-col">
                    <p class="text-blue-700 text-sm">Deluxe bungalow with garden view</p>
                    <div class="flex text-blue-800 txt-sm font-light space-x-2">
                      <User class="w-4"/> 
                      <p class="">2 guest. Free Cancellation</p>
                    </div>
                  </div>
                  <button type="submit" @click="centerDialogVisible = false, clickAddWidhlish = true"  class="text-white rounded-full p-2 px-8 text-sm bg-blue-700 cursor-pointer hover:bg-blue-600">Apply </button>
                </div>
                <Selection/>
                <p class="text-center text-sm text-gray-500">Choose from exclusive services with bargain price below</p>
                <div class="space-y-4">
                  <div class="space-y-1">
                      <p class="text-sm text-gray-900">INCLUSIVE SERVICES</p>
                      <div class="flex justify-between items-center">
                        <p class="text-sm text-gray-500">Breakfast: <span class="text-gray-700"> 10US$/day/set</span></p>
                        <p class="bg-gray-200 text-gray-800 px-5 py-1 text-sm rounded-full">0</p>
                      </div>

                      <div class="flex justify-between items-center">
                        <p class="text-sm text-gray-500">Lunch: <span class="text-gray-700"> 12US$/day/set</span></p>
                        <p class="bg-gray-200 text-gray-800 px-5 py-1 text-sm rounded-full">0</p>
                      </div>

                      <div class="flex justify-between items-center">
                        <p class="text-sm text-gray-500">Dinner: <span class="text-gray-700"> 9US$/day/set</span></p>
                        <p class="bg-gray-200 text-gray-800 px-5 py-1 text-sm rounded-full">0</p>
                      </div>
                  </div>

                  <div class="space-y-2">
                    <p class="text-sm text-gray-900">BED OPTIONS</p>
                    <div class="flex space-x-2">
                      <p class="text-gray-700 text-[12px] bg-gray-200 py-1 px-3 rounded-sm">Single bed x3</p>
                      <p class="text-gray-700 text-[12px] bg-gray-200 py-1 px-3 rounded-sm">Super king bed x2</p>
                      <p class="text-gray-700 text-[12px] bg-gray-200 py-1 px-3 rounded-sm">King bed x4</p>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <p class="text-sm text-gray-900">ROOM AENITIES</p>
                    <div class="grid grid-cols-5 gap-2 w-full">
                      <p class="col-span-1 text-gray-700 text-[12px] bg-gray-200 py-1 px-3 rounded-sm ">Air conditioning</p>
                      <p class="col-span-2 text-gray-700 text-[12px] bg-gray-200 py-1 px-3 rounded-sm ">Coffee/tea maker</p>
                      <p class="col-span-1 text-gray-700 text-[12px] bg-gray-200 py-1 px-3 rounded-sm ">Refrigerator</p>
                      <p class="col-span-1 text-gray-700 text-[12px] bg-gray-200 py-1 px-3 rounded-sm ">Televison</p>
                      <p class="col-span-1 text-gray-700 text-[12px] bg-gray-200 py-1 px-3 rounded-sm ">Desk</p>
                      <p class="col-span-2 text-gray-700 text-[12px] bg-gray-200 py-1 px-3 rounded-sm ">Blackout drapes certain</p>
                      <p class="col-span-2 text-gray-700 text-[12px] bg-gray-200 py-1 px-3 rounded-sm ">Upper floor toom accessible by elevator</p>
                      <p class="col-span-1 text-gray-700 text-[12px] bg-gray-200 py-1 px-3 rounded-sm ">Freeclip</p>
                      <p class="col-span-1 text-gray-700 text-[12px] bg-gray-200 py-1 px-3 rounded-sm ">Microware</p>
                      <p class="col-span-1 text-gray-700 text-[12px] bg-gray-200 py-1 px-3 rounded-sm ">Shower</p>
                    </div>
                  </div>
                  <div class="space-y-1">
                    <p class="text-sm text-gray-900">Free cancellation before 23:59 on 06 Febraury 2023</p>
                    <div class="flex flex-col space-y-1 ">
                      <p class="text-gray-600 text-[12px] ">You can cancel or change your booking by easyli and free!</p>
                      <p class="text-gray-600 text-[12px] ">Simple follow the link from your comfirmation email.</p>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <p class="text-sm text-gray-900">Room Description</p>
                    <div class="flex flex-col space-y-1">
                      <p class="text-gray-600 text-[12px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam ipsum voluptatibus tenetur incidunt, asperiores ratione exercitationem, doloribus unde eius, non voluptatem. Sit, quos fugiat sint eos dignissimos nisi quas?</p>
                    </div>
                  </div>
                </div>
                </div>  
            </div>
            <!-- <template #footer>
              <span class="dialog-footer">
                <el-button @click="centerDialogVisible = false" class="w-full bg-blue-700 text-white hover:bg-blue-600 py-5">
                  Save
                </el-button>
              </span>
            </template> -->

          <!-- Modal -->
          </el-dialog>
          <!-- Modal Add to wishlish -->
          <el-dialog
            v-model="clickAddWidhlish"
            width="40%"
            destroy-on-close
            center
            class="main py-2"
          
          >
          <div class="flex flex-col justify-center items-center pt-8 px-2 space-x-4">
            <h1 class="text-2xl text-gray-800 font-bold">ADD TO WISHLISH?</h1>
            <p class="text-sm text-gray-500">Do you want to add this property to your wishlish</p>
          </div>
            <template #footer class="">
              <span class="dialog-footer ">
                <el-button @click="clickAddWidhlish = false" class=" bg-blue-700 text-white hover:bg-blue-600 py-5 px-8">
                  OK
                </el-button>
              </span>
            </template>
          </el-dialog>
          <!-- Modal Add to wishlish -->
        </el-main>
      </el-container>

      <footer class="">
        <FooterContent />
      </footer>
    </el-container>
  </div>
 
</template>
<script>
import { ref } from "vue";
import data from "../data/countries.json";
import DatePicker from '../components/DatePicker.vue';
import Selection from '../components/Selection.vue'
import Navigation from "../components/Navigation.vue";
import AutoComplete from "../components/AutoComlete.vue";
import BookingInfo from "../components/BookingInfo.vue";
import FooterContent from "../components/FooterContent.vue";
import RoomSellection from '../components/RoomSellection.vue';
import NoneCommentTap from '../components/NoneCommentTap.vue';
import { User,Switch, Fries, KnifeFork, Coffee, Place, ShoppingCart, Avatar } from "@element-plus/icons-vue";
export default {
  components:{Navigation,DatePicker,AutoComplete,BookingInfo,FooterContent, NoneCommentTap,Selection,RoomSellection,User,Switch,Fries,KnifeFork,Coffee,Place,ShoppingCart,Avatar},
  setup(){
    const centerDialogVisible = ref(false);
    const clickAddWidhlish = ref(false);
    const isShow = ref(false);
    const showMore = () =>{
    isShow.value =! isShow.value;
    }
    const Cardrate = ref(5);

    return  {Cardrate,showMore , isShow, centerDialogVisible, clickAddWidhlish};
  },
  computed: {
    bookingDetailPageID() {
      return parseInt(this.$route.params.id);
    },
    bookingDetailPage() {
      return data.items.find((item) => item.id === this.bookingDetailPageID);
    },
  },
};
</script>
<style scoped>
.el-button + .el-button{
  margin: 0;
} 

#bookingBtn .el-button{
  border-radius: 0;
  border-color:  rgb(243 244 246 );
}

/* Modal */
/* carousel */
.el-carousel__item:nth-child(2n) {
  background-image: url('../src/assets/bg.jpg');
  background-size: cover;

}

.el-carousel__item:nth-child(2n + 1) {
  background-image: url('../src/assets/pp2.jpg');
  background-size: cover;
}
 /* .el-range-editor--large.el-input__wrapper {
  width: 500px;
  border: 1px solid red;
} */

</style>