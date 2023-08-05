export default function useValidator() {
    const isEmpty = (fieldName, fieldValue) => {
        return !fieldValue ? "The " + fieldName + " field is required!" : "";
    }
    const minLength = (fieldName, fieldValue, min) => {
        return fieldValue.length < min ? `The ${fieldName} field must be at least ${min} character long` : "";
    }
    const isEmail = (fieldName, fieldValue) => {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(fieldValue) ? "The input is not a valid " + fieldName + " address" : "";
    }
    const isNum = (fieldName, fieldValue) => {
        let isNum = /^\d{6,}$/;
        return !isNum.test(fieldValue) ? "The " + fieldName + " field only have number and at least 6 digits" : "";
    }
    const isConfirm = (fieldName, fieldValue, email) => {

        // return fieldValue !== email ? "The " + fieldName + " is not matched" : "";
    }
    const isAddress = (fieldName, fieldValue) => {
        const re = /^(\St)(\.)(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+?$/;
        return !re.test(fieldValue) ? "The input is not valid as " + fieldName + " field. Ex: st.124 Phnompenh Cambodia " : "";
    }
    const isZipCode = (fieldName, fieldValue) => {
        let isNum = /^\d{4,}$/;
        return !isNum.test(fieldValue) ? fieldName + " content at least 4 digits " : "";
    }
    return { isEmpty, minLength, isEmail, isNum, isConfirm, isAddress, isZipCode }
}