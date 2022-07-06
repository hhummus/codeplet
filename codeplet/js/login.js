import { checkInput } from "./checkUser.js";
import { getUsername } from "./utils/storage.js";
const loginButton = document.querySelector(".login");
const activeLoggedIn = document.querySelector(".active")

export function loginModal() {

    openModal();
    checkInput();
    youAreLoggedIn()
  
}




function openModal() {
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("openModal");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }   
}


export function youAreLoggedIn() {
    // username returns undefined, why? 
    const username = getUsername();

    var modal = document.getElementById("myModal");

    if(username) {
      // trying to change the login button to show that you are now
      // logged in
      activeLoggedIn.innerHTML = `Hi, ${username}`;
      modal.style.display = "none";
      document.href = '/';

    }
    else {
        if(!username) {
            loginButton;
           
        }
    }
}






