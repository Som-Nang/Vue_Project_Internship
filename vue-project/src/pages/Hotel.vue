<script setup>
import Navigation from "../components/Navigation.vue";
import DatePicker from "../components/DatePicker.vue";
import AutoComplete from "../components/AutoComlete.vue";
import BookingInfo from "../components/BookingInfo.vue";
import FooterContent from "../components/FooterContent.vue";
import { SetUp } from "@element-plus/icons-vue";
import { Ticket } from "@element-plus/icons-vue";
// import { LocationInformation } from "@element-plus/icons-vue";
// import { ArrowDownBold } from "@element-plus/icons-vue";
// import { ArrowUpBold } from "@element-plus/icons-vue";
// import data from "../../src/data/countries.json";

import { ref } from "vue";

// Pagination
// const itemsPerPage = ref(5);
// const currentPage = ref(1);
// const totalPages = ref(0);

// const paginatedData = computed(() => {
//   const startIndex = (currentPage.value - 1) * itemsPerPage.value;
//   const endIndex = startIndex + itemsPerPage.value;
//   return data && data.items ? data.items.slice(startIndex, endIndex) : [];
// });

// onMounted(() => {
//   if (data && data.items) {
//     data.items = data.items.sort((a, b) => a.id - b.id);
//     totalPages.value = Math.ceil(data.items.length / itemsPerPage.value);
//   }
// });

// const displayedPages = computed(() => {
//   const totalButtons = 3;
//   const middleButton = Math.ceil(totalButtons / 2);
//   let startPage = currentPage.value - middleButton + 1;
//   if (startPage + totalButtons - 1 > totalPages.value) {
//     startPage = totalPages.value - totalButtons + 1;
//   }
//   startPage = Math.max(startPage, 1);
//   const endPage = Math.min(startPage + totalButtons - 1, totalPages.value);
//   return Array.from(
//     { length: endPage - startPage + 1 },
//     (_, i) => startPage + i
//   );
// });

// function changePage(pageNumber) {
//   if (pageNumber >= 1 && pageNumber <= totalPages.value) {
//     currentPage.value = pageNumber;
//   }
// }
// Pagination

// Collapse
// const items = ref(data);
// const collapsedItems = ref([]);
// const toggleCollapse = (itemId) => {
//   if (collapsedItems.value.includes(itemId)) {
//     collapsedItems.value = collapsedItems.value.filter((id) => id !== itemId);
//   } else {
//     collapsedItems.value.push(itemId);
//   }
// };
// Collapse
// const range = ref([50, 300]);
// const range2 = ref(3);
// const rate = ref(2);
// const Cardrate = ref([5]);

const isShow1 = ref(false);
const select1 = () => {
  isShow1.value = !isShow1.value;
};
</script>

<template class="">
  <div class="common-layout bg-gray-100">
    <el-container class="space-y-5">
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
          <h2 class="text-gray-800">Phnom Penh: 496 Properties</h2>
        </div>
      </el-header>

      <el-container class="px-16 ">
        <div class="w-full absolute right-20">
          <div class="flex space-x-3  z-50  justify-end" id="nav">
            <router-link to="/hotel/" id="">
              <SetUp
                @click="select1"
                :class="{ activeButton: isShow1 == 0 }"
                class="w-10 ring-1 ring-inset ring-blue-800 p-2 cursor-pointer"
                color="rgb(30 64 175)"
              />
            </router-link>
            <router-link to="/hotel/hotelViewByMap" id="">
              <Ticket
                @click="select1"
                :class="{ activeButton: isShow1 == 1 }"
                class="w-10 ring-1 ring-inset ring-blue-800 p-2 cursor-pointer"
                color="rgb(30 64 175)"
              />
            </router-link>
          </div>
        </div>
       <router-view></router-view>
      </el-container>

      <footer class="pt-2">
        <FooterContent />
      </footer>
    </el-container>
  </div>
</template>

<style>

.activeButton {
  background-color: rgb(30 64 175);
}
.el-header {
  --el-header-padding: 0 0px;
  --el-header-height: ;
}

.el-main {
  --el-main-padding: 0;
}
.el-slider__bar {
  height: var(--el-slider-height);
  background-color: rgb(30 64 175);
}
.el-slider__button {
  border: solid 2px rgb(30 64 175);
}
.activeButton {
  background-color: rgb(30 64 175);
  color: white;
}
#subRoute .activeRounter {
  color: rgb(250, 204, 2);
}
#nav .activeRounter {
  color: rgb(239 68 68);
}

.collapse1-enter-active {
  animation: collapse reverse 300ms ease;
}

.collapse-leave-active {
  animation: collapse 300ms ease;
}

@keyframes collapse {
  from {
    max-height: 200px;
  }
  to {
    max-height: 0px;
  }
}
/* Sub router transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* Sub router transition */
/* Pagination btn */
button.pageActive {
  font-weight: bold;
  background-color: rgb(30 64 175);
  color: white;
}
:root {
  --el-color-primary: rgb(30 64 175);
}
</style>
