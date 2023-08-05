import { reactive } from "@vue/reactivity";
import useValidator from "./validators";
const errors = reactive({});


export default function useFormValidation() {
    const { isEmpty, minLength, isEmail, isNum, isConfirm, isAddress, isZipCode } = useValidator();
    const validateNameField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : minLength(fieldName, fieldValue, 2)
    }

    const validateEmailField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isEmail(fieldName, fieldValue)
    }
    const validatePhoneField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isNum(fieldName, fieldValue)

    }
    const validateConfirmEmailField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isConfirm(fieldName, fieldValue, validateEmailField)
    }
    const validAddressField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isAddress(fieldName, fieldValue)
    }
    const validateZipCodeField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isZipCode(fieldName, fieldValue)

    }

    return { errors, validateNameField, validateEmailField, validatePhoneField, validateConfirmEmailField, validAddressField, validateZipCodeField };
}