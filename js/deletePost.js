import { rootUrl } from "./utils/constant.js";
import { getToken } from "./utils/storage.js";
const container = document.querySelector('.detailPage')

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
      // write code to show user it is successfully deleted or alert not allowed if not logged in
      if(theToken === getToken()) {
        container.innerHTML = 'You have succsefully deleted this post.' 
      } else {
        alert('You are not allowed to delete this post.')
      }

    }
    catch(error) {
      console.log(error, "error");
    }

  }