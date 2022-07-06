import { urlFaq } from "./faqDetail.js";
import { container } from "./generateDetail.js";
import { getToken } from "./utils/storage.js";


export function editContent() { 

    async function getFaq() { 
        const response = await fetch(urlFaq);
        const faqPage = await response.json();
        let toBeEdited = container; 

    toBeEdited.innerHTML = "";
    toBeEdited.innerHTML = 

        `<button class="detailPage__backOnePage" onclick="history.go(-1)"><</button>
            <article class="detailPage__faq">
                <div class="detailPage__container">
                    <h2 class="detailPage__question">${faqPage.acf.question}</h2>
                    <p class="detailPage__answer editedCont" contenteditable="true">${faqPage.acf.answer}</p>
                    <p class="detailPage__lastEdit">Last edited ${faqPage.modified}</p>
                </div>
            </article>

   <section class="editDeleteFaq">
       <button class="editDeleteFaq__button edit active data-id="${faqPage.id}">Save Changes</button>
       <button  class="editDeleteFaq__button delete" >Delete</button>
   </section>`;

        const saveChanges = document.querySelector(".active");
        saveChanges.addEventListener("click", saveMyChanges);
       
    }getFaq()

 
    function saveMyChanges() {  
        // editable element //
        let editedElements = document.querySelector(".editedCont");
        // users change text in dom//
        let userEdit = editedElements.innerHTML;
        // theToken return undefined, why? 
        theToken = getToken();

        async function originalContent() {
             const options = {
                "method": "PATCH",
                "headers": {
                    "Content-Type": "application/Json",
                    "Authorization": `Bearer ${theToken}`
                }
            } 

            try {
            const response = await fetch(urlFaq, options);
            const faqPage = await response.json();
            let updatingPost = faqPage.acf.answer;
            updatingPost = userEdit;
            urlFaq.push(updatingPost);
 
            } catch (err) {
            console.log('error', err);
            }
 
        }originalContent()

    }saveMyChanges()
    
  
}

    