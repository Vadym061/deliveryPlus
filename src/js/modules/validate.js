import IMask from 'imask';
var element = document.getElementById('form_phone');
var maskOptions = {
    mask: '+38 (000) 000 00 00',
    lazy: false
} 
var mask = new IMask(element, maskOptions);
export function validateForm(){
    function textareaheight(){
        const text = document.querySelector("textarea");
        text.addEventListener("keyup", e =>{
            text.style.height = "83px";
            let he = e.target.scrollHeight;
            text.style.height = `${he}px`;
        });
    }
    textareaheight();  

   
    let form = document.querySelector('.js-form');
    let formInputs = document.querySelectorAll('.js-input');
    let inputEmail = document.querySelector('.js-input-email');
    let inputPhone = document.querySelector('.js-input-phone');
    let textError = document.querySelector('.error-text');
    

    

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return re.test(input_str);
  }

form.onsubmit = function (e) {
    e.preventDefault();
    let emailVal = inputEmail.value,
        phoneVal = inputPhone.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

        formInputs.forEach(function (input) {
            if (input.value === '') {
                input.classList.add('error');

            }else {
                input.classList.remove('error');
            }
        });

        if (emptyInputs.length !== 0) {
            textError.classList.remove("hidden")
            return false;
        }

        if(!validateEmail(emailVal)) {
            textError.classList.remove("hidden")
            inputEmail.classList.add('error');
            return false;
        } else {
            inputEmail.classList.remove('error');
            textError.classList.add("hidden");
        }

        if (validatePhoneNumber(phoneVal)) {
            textError.classList.remove("hidden")
            inputPhone.classList.add('error');
            return false;
        } else {
            inputPhone.classList.remove('error');
            textError.classList.add("hidden");
            openModal.classList.remove("hidden");
        }
    } 
    let openModal = document.querySelector(".window");
    let btnWindowOk = document.querySelector("#btn_window");
    btnWindowOk.addEventListener('click', ()=>{
    openModal.style.display = "none";
    })
    
}