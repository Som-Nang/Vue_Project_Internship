<template>
    <div  class="col-span-2 h-full flex flex-col justify-center space-y-1" >
        <input type="email" autocomplete="off"  maxlength="250" v-model="input" 
        @input="$emit('update:modelValue', $event.target.value)" 
        @keyup="validateInput" @blue="validateInput" placeholder="Confirm Email" class="h-[76px] text-sm border border-gray-300 focus:outline-none p-3   w-full  text-gray-600 " 
        :class="{input_frame: errors.Confirm_Email}"
        >
        <p class="text-sm text-red-500 text-right " v-if="errors.Confirm_Email" >{{ errors.Confirm_Email }}</p>
    </div>
</template>

<script>
 import {ref} from "vue";
    import useFormValidation from "../../module/useFormValidation";

    export default{
        setup(){
            let input = ref("");
            const {validateConfirmEmailField, errors} = useFormValidation();
            const validateInput = () => {
                validateConfirmEmailField("Confirm_Email", input.value)
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