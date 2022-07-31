import { getToken } from "./utils/storage.js";
import { rootEdit } from "./utils/constant.js";
const theToken = getToken();

export async function editContent() {
    // making the content editable
    let editableContent = document.getElementById('testInput');
    editableContent.contentEditable = 'true';
    // changing clicked button 
    const editButton = document.querySelector(".edit");
    editButton.innerText = 'Save content';
    

    // fetching id for api update
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get('id');

    //get API 
        const data = JSON.stringify({ answer: editableContent.innerHTML});
        
        const options = {
            method: "PATCH",
            body: data, 
            headers: {
                "Authorization": `Bearer ${theToken}`,
                "Content-Type": "application/json",
            }
        }
        try {
        const response = await fetch ( rootEdit + id + "/answer" , options);
        let json = await response.json();
        console.log(json)

        } catch (err) {
            console.log(err, 'error')
        } 
    
  
   }

    
