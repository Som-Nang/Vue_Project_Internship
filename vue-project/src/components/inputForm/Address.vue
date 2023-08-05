<template>
    <div  class="col-span-4 h-full flex flex-col justify-center space-y-1" >
        <input type="text" autocomplete="off"  maxlength="250" v-model="input" 
        @input="$emit('update:modelValue', $event.target.value)" 
        @keyup="validateInput" @blue="validateInput" placeholder="Address 1" class="h-[76px] text-sm border border-gray-300 focus:outline-none p-3   w-full  text-gray-600 " 
        :class="{input_frame: errors.address} "
        >
        <p class="text-sm text-red-500 text-right " id="error_msg" v-if="errors.address" >{{ errors.address }}</p>
    </div>
</template>

<script>
 import {ref} from "vue";
    import useFormValidation from "../../module/useFormValidation";

    export default{
        setup(){
            let input = ref("");
            const {validAddressField, errors} = useFormValidation();
            const validateInput = () => {
                validAddressField("address", input.value)
            }
            return {input, errors, validateInput};
        }
    }
    
</script>
<style >

.input_frame{
    border-color: red;
    transition: ease-in-out 0.5s;
}

</style>