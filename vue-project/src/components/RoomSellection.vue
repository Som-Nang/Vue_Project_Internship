<template>
     <el-select v-model="value" class="m-2" placeholder="Select" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Sellect Room')

const options = [
  {
    value: '1 Room',
    label: '1 Room',
  },
  {
    value: '2 Room',
    label: '2 Room',
  },
  {
    value: '3 Room',
    label: '3 Room',
  },
  {
    value: '4 Room',
    label: '4 Room',
  },
  {
    value: '5 Room',
    label: '5 Room',
  },
]
</script>

<style>
#roomSellect .el-input--large {
  width: fit-content;
}
#roomSellect .el-input__wrapper {
  background-color: rgb(34 197 94);
  border-radius: 9999px;
  padding: 4px 12px;

}
#roomSellect input{
  color: white;
}
#roomSellect .el-select {
  width: fit-content;
}
#roomSellect .el-input__inner {
  color: white;
}
#roomSellect .el-select .el-input .el-select__caret.el-icon {
  color: white;
}

</style>