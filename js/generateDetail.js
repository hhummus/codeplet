import { editContent } from "./editPost.js";
import { deleteContent } from "./deletePost.js";
import { loginModal } from "./login.js";

export const container = document.querySelector(".detailPage");

loginModal();

export function generateDetail(data) {
  document.title = data[0].type;

  // generating detail Page //
  for (let i = 0; i < data.length; i++) {
    const question = data[i].acf.question;
    const answer = data[i].acf.answer;
    const lastEdited = data[i].modified;
    const id = data[i].id;

    container.innerHTML = ` 
                        <button class="detailPage__backOnePage" onclick="history.go(-1)"><</button>
                             <article class="detailPage__faq">
                            <div class="detailPage__container">
                            <h2 class="detailPage__question">${question}</h2>
                            <p class="detailPage__answer" id="testInput">${answer}</p>
                            <p class="detailPage__lastEdit">Last edited ${lastEdited}</p>
                            </div>
                            </article>

                            <section class="editDeleteFaq">
                                <button class="editDeleteFaq__button edit">Edit</button>
                                <button  class="editDeleteFaq__button delete" data-id="${id}">Delete</button>
                            </section>
                          `;
  }

  //------ click event edit content -------//
  const editButton = document.querySelector(".edit");
  const editButtonListener = editButton;
  editButtonListener.addEventListener("click", editContent);
  //------ click event delete content ----//
  const deleteButton = document.querySelector(".delete");
  deleteButton.addEventListener("click", deleteContent);




}

