export function countScroll(){
    let container = document.querySelector("#section_count");
    let count = document.querySelectorAll(".count-item .count")
    

    let counterObserver = new IntersectionObserver((entries, observer)=>{
        let [entry] = entries;
        if(!entry.isIntersecting) return;

        let time = 100;

    count.forEach((counter, index)=>{
        function updateCounter(){
            const targetNumber = +counter.dataset.target;
            const initialNumber = +counter.innerText;
            const incPerCount = targetNumber / time;
            if(initialNumber < targetNumber){
                counter.innerText = Math.ceil(initialNumber + incPerCount);
                setTimeout(updateCounter, 20)
            }
           
        }
        updateCounter();
        if(counter.parentElement.style.animation){
            counter.parentElement.style.animation = "";
        }else{
            counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index / count.length + 0.5}s`
        }
    });

    // observer.unobserve();
    },{
        root: null,
        threshold: 0.2,
    });

    counterObserver.observe(container)
}