<template>
  <div class="relative">
    <div class="flex space-x-20">
      <button
        @click="toggle"
        class="bg-white text-gray-600 flex items-center rounded text-xs"
      >
        <span class="text-3xl font-bold px-[2px]">{{ numberRoom }} </span>
        <span>ROOM(s) </span>
      </button>
      <button
        @click="toggle"
        class="bg-white text-gray-600 flex items-center rounded text-xs"
      >
        <span class="text-3xl font-bold px-[2px]"
          >{{ number + numberChild }}
        </span>
        <span>GUESTS </span>
      </button>
      <!-- <button @click="toggle" class="  bg-white text-gray-600 rounded p-px text-xs"> <span class="text-xl" >{{}}</span> GUESTS</button> -->
    </div>
    <div
      v-if="active"
      class="flex flex-col bg-white drop-shadow-md p-2 divide-y z-50 w-60 my-5 rounded-md absolute divide-slate-200"
    >
      <div class="pointer"></div>
      <div class="flex items-center justify-center space-x-2 p-2">
        <h5 class="text-sm text-gray-600 w-24">Adult</h5>
        <p
          class="text-sky-500 cursor-pointer border-2 w-6 text-center border-sky-500 text-2xl hover:text-gray-600 hover:border-gray-600"
          @click="decrement"
        >
          -
        </p>
        <p class="text-xs">{{ number }}</p>
        <p
          class="text-sky-500 cursor-pointer border-2 w-6 text-center border-sky-500 text-2xl hover:text-gray-600 hover:border-gray-600"
          @click="increment"
        >
          +
        </p>
      </div>

      <div class="flex items-center justify-center space-x-2 p-2">
        <h5 class="text-sm text-gray-600 w-24">Children</h5>
        <p
          class="text-sky-500 cursor-pointer mim= border-2 w-6 text-center border-sky-500 text-2xl hover:text-gray-600 hover:border-gray-600"
          @click="decrementChild"
        >
          -
        </p>
        <p class="text-xs">{{ numberChild }}</p>
        <p
          class="text-sky-500 cursor-pointer border-2 w-6 text-center border-sky-500 text-2xl hover:text-gray-600 hover:border-gray-600"
          @click="incrementChild"
        >
          +
        </p>
      </div>
      <div class="flex items-center justify-center space-x-2 p-2">
        <h5 class="text-sm text-gray-600 w-24">Rooms</h5>
        <p
          class="text-sky-500 cursor-pointer border-2 w-6 text-center border-sky-500 text-2xl hover:text-gray-600 hover:border-gray-600"
          @click="decrementRoom"
        >
          -
        </p>
        <p class="text-xs">{{ numberRoom }}</p>
        <p
          class="text-sky-500 cursor-pointer border-2 w-6 text-center border-sky-500 text-2xl hover:text-gray-600 hover:border-gray-600"
          @click="incrementRoom"
        >
          +
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      number: 1,
      numberChild: 1,
      numberRoom: 1,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    increment() {
      this.number++;
    },
    decrement() {
      if (this.number > 0) {
        this.number--;
      } else {
        this.number = 0;
      }
    },

    incrementChild() {
      this.numberChild++;
    },
    decrementChild() {
      if (this.numberChild > 0) {
        this.numberChild--;
      } else {
        this.numberChild = 0;
      }
    },

    incrementRoom() {
      this.numberRoom++;
    },
    decrementRoom() {
      if (this.numberRoom > 0) {
        this.numberRoom--;
      } else {
        this.numberRoom = 0;
      }
    },
  },
};
</script>
<style>
.pointer {
  position: absolute;
  width: 20px;
  height: 20px;
  background: white;
  top: -3px;
  left: 110px;
  transform: rotate(45deg);
  z-index: -1;
}
</style>
