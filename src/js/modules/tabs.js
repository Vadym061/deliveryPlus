export function tabServices(){
    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabsContent = document.querySelectorAll('[data-tab-content]');
    
    tabs.forEach(tab => {tab.addEventListener('click', ()=>{

        const target = document.querySelector(tab.dataset.tabTarget);

        tabsContent.forEach(tabsContent =>{
        tabsContent.classList.remove('tab-active')
        })
        tabs.forEach(tab => {
        tab.classList.remove('tab-active')
        })
        tab.classList.add('tab-active')
        target.classList.add('tab-active')
        })
    })
}