import { rootUrl } from "./utils/constant.js";
import { generateDetail } from "./generateDetail.js";
import { loginModal, youAreLoggedIn } from "./login.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

loginModal();
youAreLoggedIn();

if(!id) {
    document.location.href = "/";
}
 

export const urlFaq = rootUrl + '/' + id;


function fetchData(url) {
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .catch(error => console.log(error, 'error'))
}

Promise.all([
    fetchData(urlFaq)
])
.then(data => {
    generateDetail(data);
   
     
})

//------------------------------------ //
// --- check for API call response --- //
function checkStatus(response) {
    if(response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

   