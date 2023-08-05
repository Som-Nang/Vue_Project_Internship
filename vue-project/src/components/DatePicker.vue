<template>
  
    <div class="flex p-0 w-full items-center flex-wrap" > 
      <div class="flex items-center text-align-center font-medium">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          format="DD MMMM YYYY"
          size="large"
         
        />
      </div>
      
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref('')
  </script>
<style>
.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 96px;
  margin-bottom: 200px;
}
DD{
  color: brown;
}
.el-range-editor--large.el-input__wrapper {
  width: 500px;
}

</style>
