<template>
  <el-container class="px-16">
    <el-main class="">
      <div class="flex justify-between py-4">
        <h1 class="font-bold text-gray-800 text-2xl">
          Booking Report <span class="text-gray-300 pl-2">Donation Report</span>
        </h1>
      </div>

      <div class="flex space-x-4 py-4">
        <div
          class="w-full flex flex-col border px-4 py-4"
          v-for="item in paginatedData"
          :key="item.id"
          :class="{
            completed: item.status === 'Completed',
            pending: item.status === 'Pending',
            canceled: item.status === 'Canceled',
            upcoming: item.status === 'Upcoming',
            no_show: item.status === 'No-Show',
          }"
        >
          <p class="font-bold font-5sm">
            {{ item.status }}
          </p>
          <p class="text-sm font-normal">34 Booking(S)</p>
          <p class="font-bold text-xl text-right">
            US$ 5.4K
            <span
              v-if="item.status === 'Upcoming' || item.status === 'No-Show'"
              class="text-[12px] font-normal"
              >Penalised</span
            >
          </p>
        </div>
        <!-- <div
          class="w-full bg-sky-200 flex flex-col border border-sky-600 px-2 py-4"
        >
          <p class="text-sky-500 font-bold font-5sm">Upcoming</p>
          <p class="text-sm text-sky-500 font-normal">34 Booking(S)</p>
          <p class="font-bold text-xl text-sky-500 text-right">US$ 5.4K</p>
        </div>
        <div
          class="w-full bg-yellow-100 flex flex-col border border-yellow-500 px-2 py-4"
        >
          <p class="text-yellow-400 font-bold font-5sm">Pending</p>
          <p class="text-sm text-yellow-400 font-normal">34 Booking(S)</p>
          <p class="font-bold text-xl text-yellow-400 text-right">US$ 5.4K</p>
        </div>
        <div
          class="w-full bg-red-200 flex flex-col border border-red-600 px-2 py-4"
        >
          <p class="text-red-500 font-bold font-5sm">Canceled</p>
          <p class="text-sm text-red-500 font-normal">34 Booking(S)</p>
          <p class="font-bold text-xl text-red-500 text-right">US$ 5.4K</p>
        </div>
        <div
          class="w-full bg-gray-200 flex flex-col border border-gray-600 px-2 py-4"
        >
          <p class="text-gray-700 font-bold font-5sm">No-show</p>
          <p class="text-sm text-gray-700 font-normal">34 Booking(S)</p>
          <p class="font-bold text-xl text-gray-700 text-right">US$ 5.4K</p>
        </div> -->
      </div>

      <div class="overflow-x-auto py-4 space-y-2">
        <div class="flex justify-between items-center py-4">
          <input
            v-model="searchTerm"
            @input="handleSearch"
            placeholder="Search..."
            class="py-2 px-5 mr-8 focus:outline-none w-full rounded-md focus:border focus:border-blue-500 border border-gray-200"
          />
          <div class="flex space-x-2">
            <el-button
              type="primary"
              plain
              color="rgb(30 64 175)"
              class="h-[41.6px]"
            >
              <span class="flex"
                >PROJECT NAME<ArrowDownBold class="w-4 ml-4" />
              </span>
            </el-button>
            <el-button
              type="primary"
              plain
              color="rgb(30 64 175)"
              class="h-[41.6px]"
            >
              <span class="flex"
                >DONATE DATE<ArrowDownBold class="w-4 ml-4" />
              </span>
            </el-button>
            <el-button
              type="primary"
              plain
              color="rgb(30 64 175)"
              class="h-[41.6px]"
            >
              <span class="flex"
                >DONATE VALUE<ArrowDownBold class="w-4 ml-4" />
              </span>
            </el-button>
            <el-button
              type="primary"
              plain
              color="rgb(30 64 175)"
              class="h-[41.6px]"
            >
              <span class="flex"
                >STATUS<ArrowDownBold class="w-4 ml-4" />
              </span>
            </el-button>
          </div>
        </div>

        <table class="min-w-full border divide-y divide-x divide-gray-200">
          <thead class="bg-gray-200 font-medium">
            <tr class="">
              <th
                class="px-6 py-5 border-l border-gray-300 text-sm font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Property Name
              </th>
              <th
                class="px-6 py-5 border-l border-gray-300 text-sm font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Stay Detail
              </th>
              <th
                class="px-6 py-5 border-l border-gray-300 text-sm font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Prices
              </th>
              <th
                class="px-6 py-5 border-l border-gray-300 text-sm font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Property Rating
              </th>
              <th
                class="px-6 py-5 border-l border-gray-300 text-sm font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Customer Rating
              </th>
              <th
                class="px-6 py-5 border-l border-gray-300 text-sm font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="item in paginatedData" :key="item.id">
              <td
                class="px-6 py-5 border-r border-gray-300 text-sm text-gray-500 whitespace-nowrap flex flex-col font-medium"
              >
                {{ item.name }}
                <span class="font-normal"
                  >Booking ID: 23344 Siem Reap, Cambodia</span
                >
              </td>
              <td
                class="px-6 py-5 border-r border-gray-300 text-sm text-gray-500 whitespace-nowrap font-medium"
              >
                20/03/2018 - 23/03/2018 <br />
                <span class="font-normal">3 night(s) and 1 room(s)</span>
              </td>
              <td
                class="px-6 py-5 border-r border-gray-300 text-sm text-gray-500 whitespace-nowrap font-medium"
              >
                US$ 300
              </td>
              <td
                class="px-6 py-5 border-r border-gray-300 text-sm text-gray-500 whitespace-nowrap font-medium"
              >
                7.9
              </td>
              <td
                class="px-6 py-5 border-r border-gray-300 text-sm text-gray-500 whitespace-nowrap font-medium"
              >
                1
              </td>
              <td
                class="px-6 py-5 border-r border-gray-300 text-sm text-gray-500 whitespace-nowrap font-medium"
                :class="{
                  green_color: item.status === 'Completed',
                  yellow_color: item.status === 'Pending',
                  red_color: item.status === 'Canceled',
                  sky_color: item.status === 'Upcoming',
                  gray_color: item.status === 'No-Show',
                }"
              >
                {{ item.status }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between">
          <div class="flex">
            <p class="text-sm text-gray-600 font-medium">
              Showing 1 to 10 of 60 entries
            </p>
          </div>
          <div class="flex space-x-2 px-1 py-2">
            <button
              @click="changePage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="ring-1 ring-blue-800 px-4 py-2 text-blue-800 hover:bg-blue-800 hover:text-white"
            >
              Previous
            </button>
            <template v-for="page in displayedPages" :key="page">
              <button
                @click="changePage(page)"
                :class="{ pageActive: currentPage === page }"
                class="ring-1 ring-blue-800 px-4 py-2 text-blue-800 hover:bg-blue-800 hover:text-white"
              >
                {{ page }}
              </button>
            </template>
            <button
              @click="changePage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="ring-1 ring-blue-800 px-4 py-2 text-blue-800 hover:bg-blue-800 hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
  <!-- <div>
    <input v-model="searchTerm" @input="handleSearch" placeholder="Search..." />
    <ul>
      <li v-for="item in paginatedData" :key="item.id">{{ item.name }}</li>
    </ul>
    <div>
      <button
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
      >
        Previous
      </button>
      <template v-for="page in displayedPages" :key="page">
        <button
          @click="changePage(page)"
          :class="{ active: currentPage === page }"
        >
          {{ page }}
        </button>
      </template>
      <button
        @click="changePage(currentPage + 1)"
        :disabled="currentPage === totalPages"
      >
        Next
      </button>
    </div>
  </div> -->
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import jsonData from "../../data/countries.json";
import { ArrowDownBold } from "@element-plus/icons-vue";
const itemsPerPage = ref(5);
const currentPage = ref(1);
const totalPages = ref(0);
const searchTerm = ref("");
let filteredData = ref([]);

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return filteredData.value.slice(startIndex, endIndex);
});

const displayedPages = computed(() => {
  const totalButtons = 3;
  const middleButton = Math.ceil(totalButtons / 2);
  let startPage = currentPage.value - middleButton + 1;
  if (startPage + totalButtons - 1 > totalPages.value) {
    startPage = totalPages.value - totalButtons + 1;
  }
  startPage = Math.max(startPage, 1);
  const endPage = Math.min(startPage + totalButtons - 1, totalPages.value);
  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
});

onMounted(() => {
  jsonData.items = jsonData.items.sort((a, b) => a.id - b.id);
  updateFilteredData();
});

watch(searchTerm, (newSearchTerm) => {
  currentPage.value = 1;
  updateFilteredData(newSearchTerm);
});

function updateFilteredData(searchTerm = "") {
  filteredData.value = jsonData.items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  totalPages.value = Math.ceil(filteredData.value.length / itemsPerPage.value);
}

function changePage(pageNumber) {
  if (pageNumber >= 1 && pageNumber <= totalPages.value) {
    currentPage.value = pageNumber;
  }
}

</script>

<style scoped>
tbody tr:nth-child(even) {
  background-color: rgb(238, 237, 237);
}
tbody tr:nth-child(odd) {
  background-color: #ffff;
}

button.pageActive {
  font-weight: bold;
}
.sky_color {
  color: rgb(14 165 233);
}
.red_color {
  color: rgb(239 68 68);
}
.yellow_color {
  color: rgb(250 204 21);
}
.green_color {
  color: rgb(34 197 94);
}
.gray_color {
  color: rgb(55 65 81);
}
.completed {
  color: rgb(34 197 94);
  background-color: rgba(0, 255, 0, 0.1);
  border: 1px solid rgb(22 163 74);
}
.upcoming {
  color: rgb(14 165 233);
  background-color: rgba(0, 213, 255, 0.1);
  border: 1px solid rgb(19, 162, 194);
}
.pending {
  color: rgb(250 204 21);
  background-color: rgba(225, 255, 0, 0.1);
  border: 1px solid rgb(188, 211, 11);
}
.canceled {
  color: rgb(239 68 68);
  background-color: rgba(255, 0, 0, 0.1);
  border: 1px solid rgb(211, 24, 11);
}
.no_show {
  color: rgb(55 65 81);
  background-color: rgb(244, 242, 242);
  border: 1px solid rgb(56, 53, 53);
}
</style>