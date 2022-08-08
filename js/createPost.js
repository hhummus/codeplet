import { loginModal } from "./login.js";
import { rootUrl } from "./utils/constant.js";
import { getToken } from "./utils/storage.js";
const createContentButton = document.getElementById("creatingFaq");
const question = document.getElementById("question");
const answer = document.getElementById("answer");

const theToken = getToken();
loginModal()

createContentButton.addEventListener("click", createContent)

async function createContent () {
    // question and answer that is created upon submit
   const data = JSON.stringify({title: question.value, content: answer.value});

   const options = {
    method: "POST",
    body: data,
    headers: {
      "Authorization": `Bearer ${theToken}`,
      "Content-Type": "application/json"
    }
    }
    try {
        // creating new content on the API 
        const response = await fetch ( rootUrl, options);
        let json = await response.json();
        console.log(json)

        // catching errors if any 
        } catch (err) {
            console.log(err, 'error')
        } 
}