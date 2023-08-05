<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <h3 @click="toggleCollapse(item.id)">
        <h1>Click</h1>
        <span v-if="collapsedItems.includes(item.id)">Here</span>
        <span v-else>[-]</span>
      </h3>
      <div v-if="!collapsedItems.includes(item.id)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import data from "../data/countries.json";

const items = ref(data);
const collapsedItems = ref([]);

const toggleCollapse = (itemId) => {
  if (collapsedItems.value.includes(itemId)) {
    collapsedItems.value = collapsedItems.value.filter((id) => id !== itemId);
  } else {
    collapsedItems.value.push(itemId);
  }
};
</script>
