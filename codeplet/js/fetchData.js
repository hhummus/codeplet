import { rootUrl } from "./utils/constant.js";
import { makeFaq } from "./faq.js";
import { loginModal } from "./login.js";

loginModal();


function fetchData(url) {
  return fetch(url)
    .then(checkStatus)
    .then((res) => res.json())
    .catch((error) => console.log(error, "error"));
}

Promise.all([fetchData(rootUrl)]).then((data) => {
  makeFaq(data);
});

//------------------------------------ //
// --- check for API call response --- //
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}
