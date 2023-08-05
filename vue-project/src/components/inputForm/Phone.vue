<template>
    <div  class="col-span-3 h-full flex flex-col justify-center space-y-1" >
        <input type="text" autocomplete="off"  maxlength="250" v-model="input" @keyup="validateInput" @input="$emit('update:modelValue', $event.target.value)" @blue="validateInput" placeholder="Phone Number" class="h-[76px] text-sm border border-gray-300 focus:outline-none p-3   w-full  text-gray-600 " 
        :class="{input_frame: errors.phone}"
        >
        <p class="text-sm text-red-500 text-right " v-if="errors.phone" >{{ errors.phone }}</p>
    </div>
</template>

<script>
 import {ref} from "vue";
    import useFormValidation from "../../module/useFormValidation";

    export default{
        setup(){
            let input = ref("");
            const {validatePhoneField, errors} = useFormValidation();
            const validateInput = () => {
                validatePhoneField("phone", input.value)
            }
            return {input, errors, validateInput};
        }
    }
</script>
<style >

.input_frame{
    border-color: red;
}

</style>