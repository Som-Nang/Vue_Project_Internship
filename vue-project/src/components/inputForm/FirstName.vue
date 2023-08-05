<template>
    <div class="col-span-2 space-y-1">
        <div class="relative flex justify-start space-y-5 border border-gray-300 px-5 py-[17.5px] pr-5"  :class="{input_frame: errors.name}">
            <label for="" class="absolute text-xs text-gray-500 top-0 pt-2">FIRST NAME</label>
            <input type="text" maxlength="250" v-model="input" @input="$emit('update:modelValue', $event.target.value)" @keyup="validateInput"
                @blue="validateInput" class="focus:outline-none text-sm text-gray-700" placeholder="FIRST NAME">
        </div>
        
        <p class="text-sm text-red-500 text-right " v-if="errors.name">{{ errors.name }}</p>
    </div>
    
</template>

<script>
    import {ref} from "vue";
    import useFormValidation from "../../module/useFormValidation";

    export default{
        setup(){
            let input = ref("");
            const {validateNameField, errors} = useFormValidation();
            const validateInput = () => {
                validateNameField("name", input.value)
            }
            return {input, errors, validateInput};
        }
    }
</script>
<style>
.input_frame{
    border-color: red;
}
</style>