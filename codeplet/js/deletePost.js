import { rootUrl } from "./utils/constant.js";
import { getToken } from "./utils/storage.js";


export async function deleteContent(event) {
    const id = event.target.dataset.id;
    const theToken = getToken();
    const deleteTheItem = rootUrl + '/' + id;

    const options = {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${theToken}`,
        "Content-Type": "application/json"
      }
    }

    try {
      const deleteNow = await fetch(deleteTheItem, options) 
      const response = await deleteNow.json();
      console.log(response)
     
     
    }
    catch(error) {
      console.log(error, "error")
    }
  }