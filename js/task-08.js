const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget

    
        if (event.currentTarget.email.value === '' || event.currentTarget.password.value === '') {
        return alert('Всі поля повинні бути заповнені')
    }

    const formData = new FormData(event.currentTarget);

        formData.forEach((value, name) => {
           
    
            console.log({ Email: email.value, Password: password.value });
            form.reset();
           
        
    })
}


