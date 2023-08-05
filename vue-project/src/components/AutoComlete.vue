<template>
  <div class="flex items-center w-full" id="main ">
    <!-- Icon location -->
    <div class=" relative w-full">
      <img
        src="..//assets/location.svg"
        class="absolute w-4 mt-2 ml-[-16px] opacity-20 max-xl:ml-5"
        alt=""
      />

      <input
        type="text"
        id="search"
        v-model="searchTerm"
        :placeholder="selectedCountry"
        @click="toggle"
        :maxlength="75"
        class="p-2 focus:outline-none w-full rounded text-[14px] text-gray-800 max-xl:ml-10"
      />
      <!-- ?? -->
      <!-- <ul  v-if="active">
        <li
          v-for="country in searchCountries"
          :key="country.name"
          @click="selectCountry(country.name)"
          class="cursor-pointer hover:bg-gray-100 p-1 text-red"
        >
          <div class="flex text-blue-600 space-x-2 text-[15px]">
            <img
              :src="`./src/data/${country.icon}`"
              class="w-4 mx-1 opacity-50"
              alt="icon"
            />
            <div class="flex flex-col">
              {{ country.name }}
              <span class="text-gray-500 text-sm">{{ country.description }}</span>
            </div>
          </div>
         
        </li>
      </ul> -->
      <!-- ?? -->
      <div class="absolute drop-shadow-md my-5 space-y-1 z-50 divide-slate-200">
        <ul
          v-if="searchCountries.length"
          class="w-max rounded bg-white overflow-auto h-48 px-4 py-2 divide-y"
        >
          <div class="pointer1"></div>
          <li
            v-for="country in searchCountries"
            :key="country.name"
            @click="selectCountry(country.name)"
            class="cursor-pointer hover:bg-gray-100 p-1 text-red"
          >
            <div class="flex text-blue-600 space-x-2 text-[15px]">
              <img
                :src="`./src/data/${country.icon}`"
                class="w-4 mx-1 opacity-50"
                alt="icon"
              />
              <div class="flex flex-col">
                {{ country.name }}
                <span class="text-gray-500 text-sm">{{
                  country.description
                }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import countries from "../data/countries.json";
import { ref, computed } from "vue";

export default {
  // data() {
  //   return {
  //     active: false,
  //   };
  // },

  setup() {
    let searchTerm = ref("");
    // ??
    // function toggle(){
    //   active.value = !active.value
    // }

    // ??
    const searchCountries = computed(() => {
      if (searchTerm.value === "") {
        return [];
      }

      let matches = 0;

      return countries.items.filter((country) => {
        if (
          country.name.toLowerCase().includes(searchTerm.value.toLowerCase()) &&
          matches < 10
        ) {
          matches++;
          return country;
        }
        if (
          country.description
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) &&
          matches < 10
        ) {
          matches++;
          return country;
        }
      });
    });

    const selectCountry = (country) => {
      selectedCountry.value = country;
      searchTerm.value = "";
    };

    let selectedCountry = ref("Destination or Property name...");

    return {
      countries,
      searchTerm,
      searchCountries,
      selectCountry,
      selectedCountry,
    };
  },
  // methods: {
  //   toggle() {
  //     this.active = !this.active;
  //   },
  // }
};
</script>
<style>
.pointer1 {
  position: absolute;
  width: 20px;
  height: 20px;
  background: white;
  top: -3px;
  left: 10px;
  transform: rotate(45deg);
  z-index: -1;
}
</style>
