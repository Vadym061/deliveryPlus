export function burgerMenu(){

    const headerBurgerMenuIcon = document.querySelector(".btn-burger");
    const burgerMenu = document.querySelector(".menu-mobile");
    const closebutton = document.querySelector(".btn-close");
    const link = document.querySelector(".link");

    function openMenu(){
        headerBurgerMenuIcon.addEventListener('click', ()=>{
            burgerMenu.classList.add("active");
        });
    }
    openMenu();

    function closeMenu(){
        closebutton.addEventListener("click", () => {
            burgerMenu.classList.remove("active");
        });
    }
    closeMenu();
    
    function linkMenu (){
        const link = document.querySelectorAll(".link");
        link.forEach((item)=>{
            item.addEventListener("click", (link)=>{
                if(link.target){
                    burgerMenu.classList.remove("active")

                }
            });
        });
    }
    linkMenu();
}