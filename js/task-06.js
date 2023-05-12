const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    

    if (inputEl.value.length == inputEl.getAttribute('data-length')){
        inputEl.classList.remove("validation-input");
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.remove("validation-input");
    inputEl.classList.add("invalid");
    }
}



