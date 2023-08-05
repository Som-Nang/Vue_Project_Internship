<template>
    <form class="form-style" name="form" method="POST" >
        <ul>
            <li class="row-1">
                <div class="email" style="position: relative;">
                    <!-- less than 75 character -->
                    <label class="text">Email<span style="color:red"> *</span></label>
                    <input type=""   name="email" id="email" class="field-style field-split align-left"   placeholder="Email" />
                    <span id="Msg" style="color:red; position: absolute; top: 100%;"></span>    
                </div>
                <div class="password">
                    <!-- less than 25 digit -->
                    <label class="text">Passsword<span style="color:red"> *</span></label>
                    <input type="password" name="password" id="password" class="field-style field-split align-right" placeholder="Password" />
                    <i class="far fa-eye" id="togglePassword" style="cursor: pointer;"></i>
                    <span id="Msg" style="color:red; position: absolute; top: 100%;"></span>
                </div>
            </li>
            <li class="row-2">
                <label class="text">Address<span style="color:red"> *</span></label>
                <input type="text" maxlength="75" name="Address" id="address" class="field-style field-full align-none"   placeholder="123 Maint St" />
                <p id="Msg" style="color:red"></p>
            </li>
            <li>
                <label class="text">Address 2</label>
                <input type="text" name="Address_2" maxlength="75" class="field-style field-full align-none"  placeholder="Appartment, Studio or Floor" />
            </li>

            <li class="row-3">
                <div class="city">
                    <label class="text">Country<span style="color:red"> *</span></label>
                    <input type="text" name="city" maxlength="20" id="city" class="field-style field-split align-left"  placeholder="Country" autocomplete="off"/>
                    <p id="Msg" style="color:red"></p>
                </div>
                <div class="select">
                    <label class="text">State</label>
                    <select id="state" class="field-style" name="state" >
                        <option value="" selected>-- Please select --</option>
                        <option value="Kandal">Kandal</option>
                        <option value="Preveng">Preveng</option>
                        <option value="Phnom penh">Phnom penh</option>
                        <option value="Kompong Cham">Kompong Cham</option>
                        <option value="Siem Reap">Siem Reap</option>
                    </select>
                    <p id="Msg" style="color:red"></p>
                </div>
                <div class="zip">
                    <label class="text">Zip<span style="color:red"> *</span></label>
                    <input type="number" name="zip" id="zip" class="field-style field-split align-left"  value="12345" placeholder="Zip" autocomplete="off">
                    <p id="Msg" style="color:red"></p>

                </div>
            </li>

            <li class="row-4">
                <input type="checkbox"  disabled id="check" name="termsconditions">
                <label for="check"  style="font-size: 12px;"> check me out</label><br>
                <input type="submit" id="submit" name="submit" value="Sign in" disabled class="button"/>
               
            </li>
        </ul>
        
    </form>
</template>
<script setup>
//request data to server side with js by click button
const formEl = document.querySelector('.form-style');
formEl.addEventListener('submit', event => {
    event.preventDefault();
    let passwordValid = checkPassword(),
        cityValid = checkCity(),
        zipValid = checkZipCode(),
        addressValid = checkAddress(),
        stateValid = checkState();
    emailValid = checkEmail();

    let isFormvalid = passwordValid && emailValid && zipValid && cityValid && stateValid && addressValid;

    if (isFormvalid) {
        const formData = new FormData(formEl);
        const data = Object.fromEntries(formData);

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error)); value = " "
        window.alert("Log in success!");
    } else {
        window.alert("Please verify your information");
    }
})

///Declare element from form //////////////////  
const passwordEl = document.querySelector('#password');
const emailEl = document.querySelector('#email');
const zipEl = document.querySelector('#zip');
const cityEl = document.querySelector('#city');
const stateEl = document.querySelector('#state');
const addressEl = document.querySelector('#address');
const checkedBtnEl = document.querySelector('#check');
const togglePassword = document.querySelector('#togglePassword')
// const checkSubmitEl = document.querySelector('#submit');

// Disable and enable function

const checkCheckedBtn = () => {
    checkedBtnEl.disabled = !(
        passwordEl.value && emailEl.value && zipEl.value && cityEl.value && addressEl.value && stateEl.value !== ""
    )
}

// const checkSubmitBtn = () => {
//     checkSubmitEl.disabled = !(checkedBtnEl.value !== "");
// }
passwordEl.addEventListener('change', checkCheckedBtn);
emailEl.addEventListener('change', checkCheckedBtn);
zipEl.addEventListener('change', checkCheckedBtn);
cityEl.addEventListener('change', checkCheckedBtn);
addressEl.addEventListener('change', checkCheckedBtn);
stateEl.addEventListener('change', checkCheckedBtn);

// checkedBtnEl.addEventListener('click', checkSubmitBtn);

// End Disable and enable function

const checkPassword = () => {
    let valid = false;
    max = 25;

    const password = passwordEl.value.trim();
    if (!isRequired(password)) {
        showError(passwordEl, 'Password must contain at lease 8 character.');

    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Passsword not secure (Ex: Example*12345)');

    } else if (!isMax(password.length, max)) {
        showError(passwordEl, 'Password does not meet requirement');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    max = 75;

    const email = emailEl.value.trim();
    if (!isEmailStand(email)) {
        showError(emailEl, 'Email not valid (Ex: Example@gmail.com)');
    } else if (!isMax(email.length, max)) {
        showError(emailEl, "Should be Email Address");
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

const checkCity = () => {
    let valid = false;
    const city = cityEl.value.trim();
    if (!isCity(city)) {
        showError(cityEl, 'Please enter your country');
    } else {
        showSuccess(cityEl);
        valid = true;
    }
    return valid;
}
const checkAddress = () => {
    let valid = false;
    const address = addressEl.value.trim();
    if (!isAddress(address)) {
        showError(addressEl, 'Please enter a address');
    } else {
        showSuccess(addressEl);
        valid = true;
    }
    return valid;
}

const checkState = () => {
    let valid = false;
    const state = stateEl.value.trim();
    if (!isRequired(state)) {
        showError(stateEl, 'Please select State');
    } else {
        showSuccess(stateEl);
        valid = true;
    }
    return valid;
}

const checkZipCode = () => {
    let valid = false;
    max = 5;
    const zip = zipEl.value.trim();
    if (!isMax(zip.length, max)) {
        showError(zipEl, "Zip code must be less than 5")
    } else if (!isRequired(zip)) {
        showError(zipEl, 'Please enter Zip Code')
    }
    else {
        showSuccess(zipEl);
        valid = true;
    }
    return valid;
}

///Key function//////////////////
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password)
};

const isEmailStand = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,3})$/i;

    return re.test(email);
}

const isAddress = (address) => {
    const re = /[,#-\/\s\!\@\$.....]/gi;
    return re.test(address);
};


const isCity = (city) => {
    const re = new RegExp("[a-zA-Z]{2,25}");
    return re.test(city);
};



const isRequired = value => value === '' ? false : true;

const isMax = (length, max) => length > max ? false : true;

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.add('error');


    // show the error message
    const error = formField.querySelector('#Msg');

    error.textContent = message;
};
const showSuccess = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;

    // add the success class
    formField.classList.remove('error');


    // hide the error message
    const error = formField.querySelector('#Msg');
    error.textContent = "";

}


///dynamic show error 
const debounce = (fn, delay = 200) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'address':
            checkAddress();
            break;
        case 'city':
            checkCity();
            break;
        case 'zip':
            checkZipCode();
            break;
        case 'state':
            checkState();
            break;
    }
}));

//Show Password
togglePassword.addEventListener('click', function (e) {
    const type = passwordEl.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordEl.setAttribute('type', type);

    this.classList.toggle('fa-eye-slash');
})
</script>