<template>
    <div class="col-span-1 space-y-1">
        <div class="relative flex justify-start space-y-5 border border-gray-300 px-5 py-[17.5px] pr-5"  :class="{input_frame: errors.Zip_Code}">
            <label for="" class="absolute text-xs text-gray-500 top-0 pt-2">ZIP CODE</label>
            <input type="text" maxlength="250" v-model="input" @keyup="validateInput"
            @input="$emit('update:modelValue', $event.target.value)" @blue="validateInput" class="focus:outline-none text-sm text-gray-700" placeholder="ZIP CODE">
        </div>
        
        <p class="text-sm text-red-500 right-24 absolute" v-if="errors.Zip_Code">{{ errors.Zip_Code }}</p>
    </div>
    
</template>

<script>
    import {ref} from "vue";
    import useFormValidation from "../../module/useFormValidation";

    export default{
        setup(){
            let input = ref("");
            const {validateZipCodeField, errors} = useFormValidation();
            const validateInput = () => {
                validateZipCodeField("Zip_Code", input.value)
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