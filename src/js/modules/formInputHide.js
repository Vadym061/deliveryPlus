export function showHideInput (){

    const root = document.querySelector(".root");
    const addBtn = document.getElementById("btn_add");
   

        document.addEventListener("DOMContentLoaded", ()=>{
            addBtn.addEventListener("click", ()=>{
                const createDiv = document.createElement("div");
                createDiv.classList.add("input_hide");
                createDiv.classList.add("relative");
                createDiv.insertAdjacentHTML("beforeend", `
                      <button type="button" class="absolute right-3 top-8" id="btn-close">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_207_955)">
                          <path d="M13.6568 12.5254L9.1314 8.00002L13.6569 3.4745C13.9691 3.16231 13.9691 2.65539 13.6568 2.3431C13.3446 2.03091 12.8377 2.03091 12.5255 2.3431L8 6.86862L3.47448 2.3431C3.16229 2.03091 2.65537 2.03091 2.34318 2.3431C2.03089 2.65539 2.03089 3.16231 2.34308 3.4745L6.8686 8.00002L2.34318 12.5254C2.03089 12.8377 2.03089 13.3447 2.34308 13.6568C2.65537 13.9691 3.16229 13.9691 3.47459 13.6568L8 9.13143L12.5254 13.6568C12.8377 13.9691 13.3446 13.9691 13.6569 13.6568C13.9691 13.3447 13.9691 12.8377 13.6568 12.5254Z" fill="#97A6AE"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_207_955">
                          <rect width="16" height="16" fill="white"/>
                          </clipPath>
                          </defs>
                        </svg>
                      </button>
                      
                      <textarea class="w-full resize-none outline-none mt-5 border h-[60px] sm:h-[83px] border-[#97A6AE] rounded-[10px] p-3 sm:p-4 items-start justify-start text-base font-inter font-normal placeholder:text-[13px] placeholder:sm:text-base text-[#525F64] focus:border-primary input" placeholder="Вставьте ссылку или напишите вопрос" type="text" name=""name="" cols="30" rows="10" ></textarea>
                
                `);
        
                
                if(root.childNodes.length === 20){
                    addBtn.style.display = "none";
                }else{
                    root.append(createDiv)
                }

                
                document.querySelector(".root").onclick = function(e){
                    const btnClose = e.target.closest('#btn-close');
                    if (!btnClose) {
                        return;
                      }
                      btnClose.parentElement.remove();
                      addBtn.style.display = "flex";
                }
              
            });
    
        });


}