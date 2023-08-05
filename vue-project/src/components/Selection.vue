<template>
<el-select v-model="value" class="w-full" placeholder="Select Room" size="large">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
</el-select>
</template>
<script setup>
import { ref } from "vue";
 const value = ref('')
    const options = [
      {
        value: '1 Room Sellected',
        label: '1 Room Sellected',
      },
      {
        value: '2 Room Sellected',
        label: '2 Room Sellected',
      },
      {
        value: '3 Room Sellected',
        label: '3 Room Sellected',
      },
      {
        value: '4 Room Sellected',
        label: '4 Room Sellected',
      },
      {
        value: '5 Room Sellected',
        label: '5 Room Sellected',
      },
    ]
</script>
<style>
.main .el-dialog__header {
    padding: 0px;
    margin-right: 0px;
}
.main .el-dialog--center .el-dialog__body {
    text-align: initial;
    padding: 0px;
    
}

.main .el-dialog__body {
    padding: 0px;
    color: var(--el-text-color-regular);
    font-size: var(--el-dialog-content-font-size);
  
}
.el-dialog__header {
    padding: var(--el-dialog-padding-primary);
    padding-bottom: 0px;
    margin-right: 0px;
}
button, [type='button'], [type='reset'], [type='submit'] {
    z-index: 999;
}
.main .el-input--large .el-input__wrapper {
    background-color: rgb(57, 218, 116);
    padding: 0 8px;
    color: white;
    border-radius: 9999px;
    box-shadow: none;
}
.main .el-input__inner {
    color: white;
}
.main .el-select .el-input .el-select__caret {
      color: white;
}

</style>