import { authLocal } from './utils/constant.js';
import { saveToken, saveUser } from './utils/storage.js';

const form = document.querySelector('#logInForm');
const firstName = document.querySelector('#name');
const firstNameError = document.querySelector('#firstNameError');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');

export function checkInput() {

// function that runs every time submit is called on form event listener
function validateForm(event) {
    event.preventDefault();
    
    const usernameValue = firstName.value.trim();
    const passwordValue = password.value.trim();


	if (checkLength(firstName.value, 1)) {
		firstNameError.style.display = 'none';
	} else {
		firstNameError.style.display = 'block';
	}

	if (checkLength(password.value, 6)) {
		passwordError.style.display = 'none';
	} else {
		passwordError.style.display = 'block';
    }
    
	doLogin(usernameValue, passwordValue);
}

// event listener on form
form.addEventListener('submit', validateForm);

// function to re-use 
function checkLength(value, len) {
	if (value.trim().length > len) {
		return true;
	} else {
		return false;
	}
}


// loggin in // 
 async function doLogin(username, password) {
    // path to fetch token
    const url = authLocal + "wp-json/jwt-auth/v1/token" ; 
   
    const data = JSON.stringify({ username: username, password: password});

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-type": "application/json"
        }
    }

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        
        // saving username and token //
        if(json.user_nicename) {
            saveToken(json.token);
            saveUser(json.user_nicename);
            
        } 
         if(json.error) {
            console.log(error)
        } 

    }catch(err) {
        console.log(err, 'error')
    }
    } 

}


