let containerFaq = document.querySelector(".containerFaq");


export function makeFaq(data) {
    const qa = data[0];

    containerFaq.innerHTML = '';
    const arrayOne =
     qa.forEach(item => {
        let question = item.acf.question;
        const id = item.id;
        
        containerFaq.innerHTML +=
            `<article>
                <div class="containerfaq__container">
                <h2 class="containerfaq__title">${question}</h2>
                <a  href="faq.html?id=${id}" class="containerfaq__seemore" id="${id}">></a>
                </div> 
            </article>`

        const seeMore = document.querySelectorAll(".containerfaq__seemore");

        seeMore.forEach(item => {
            item.addEventListener("click", seeAnswer);
        });

        function seeAnswer(e) {
            console.log(e);
              
        }
    });


    const searchInput = document.getElementById("search");
    searchInput.addEventListener('keyup', searchFaq);

    function searchFaq(event) {
        let searchTerm = event.target.value;
        
      
        // filtering API question posts to search value//
        const matchedData = qa.filter(item => {
                const question = item.acf.question.toLowerCase();
                const castedSearchTerm = searchTerm.toLowerCase();
                return question.includes(castedSearchTerm);
        })

        let newArray = matchedData;

       

        newArray.forEach(item => {
            const question = item.acf.question
            const id = item.id
            
            containerFaq.innerHTML =
                 `<article>
                    <div class="containerfaq__container">
                    <h2 class="containerfaq__title">${question}</h2>
                    <a  href="faq.html?id=${id}" class="containerfaq__seemore" id="${id}">></a>
                    </div> 
                 </article>`
            })
           
            // why is this not working correctly? 
            if(searchTerm.length === 0) {
               arrayOne;
            } else {
                if (searchTerm <= matchedData) {
                    newArray;
                } else if(!matchedData) {
                    containerFaq.innerHTML = 'No matches.';
                }
            }
           
            console.log(newArray) // <-- the array is updating
            
    }





}