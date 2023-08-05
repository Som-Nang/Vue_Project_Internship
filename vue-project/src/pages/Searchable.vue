<script setup>
import Navigation from "../components/Navigation.vue";
import DatePicker from "../components/DatePicker.vue";
import AutoComplete from "../components/AutoComlete.vue";
import BookingInfo from "../components/BookingInfo.vue";
import AdvanceSearch from "../components/AdvanceSearch.vue";
import { OfficeBuilding } from "@element-plus/icons-vue";
import { ref } from "vue";
const selected = ref(true);
const select = () => {
  selected.value = !selected.value;
};
</script>

<template>
  <Navigation class="absolute" />
  <div
    class="min-h-screen min-w-full bg-cover bg-center flex flex-col justify-center"
    style="
      background-image: linear-gradient(
          rgba(39, 38, 38, 0.5),
          rgba(68, 65, 65, 0.6)
        ),
        url('../src/assets/bg.jpg');
    "
  >
    <div class="flex flex-1 flex-col items-center justify-center max-lg:m-4">
      <div class="flex flex-col top-1 items-center justify-center max-lg:px-2">
        <h1
          class="text-4xl py-4 font-bold text-white drop-shadow-lg shadow-black max-lg:text-2xl"
        >
          Start your experience today
        </h1>
        <p
          class="text-white text-center justify-content text-[16px] drop-shadow-lg px-96 max-lg:px-2 shadow-black"
        >
          Cotafer guarantees the best price for any type of property, from
          small, family run bed, apartmentand five-stars luxary status from both
          the leisure and buiseness sectors worldwide.
        </p>
      </div>
    </div>

    <!-- Line and button -->
    <div class="flex items-center justify-center mb-[-2px]">
      <router-link to="/hotel">
        <button
          @click="select"
          :class="{ active: selected == 1 }"
          type="button"
          class="flex items-center text-white text-base px-4 py-2 hover:text-sky-300 cursor-pointer h-12"
        >
          <OfficeBuilding class="w-4 mr-2" />
          Hotel
        </button>
      </router-link>
      <button
        type="button"
        @click="select"
        :class="{ active: selected == 0 }"
        class="flex items-center text-white text-base space-x-2 px-4 py-2 hover:text-sky-300 cursor-pointer h-12"
      >
        <OfficeBuilding class="w-4" />
        <p class="">Host</p>
      </button>
    </div>
    <div
      class="bg-white/60 opacity-20 border-[1px] border-white/40 w-screen mb-8"
    ></div>
    <!-- Line and button -->

    <div class="flex flex-1 flex-col items-center">
      <div
        class="flex relative justify-center space-y-20 max-lg:space-y-60 w-screen px-32"
      >
        <div
          class="flex w-full bg-white pl-10 pr-[2px] justify-between h-auto rounded-full max-lg:h-auto max-lg:flex max-lg:flex-col max-lg:items-center max-lg:space-y-2 max-lg:p-4 max-lg:rounded-lg max-lg:w-auto"
        >
          <AutoComplete />
          <div
            class="flex items-center justify-between space-x-10 max-lg:flex-col max-lg:items-center max-lg:space-x-0 max-lg:space-y-2"
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
        <AdvanceSearch />
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  border-bottom: 2px solid white;
}
</style>
