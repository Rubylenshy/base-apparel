
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e)=>{
    e.preventDefault();

    const input_value = document.querySelector('input').value;
    const input = document.querySelector('input');
    const error = document.querySelector('.error');
    const emailRegex = /^([a-zA-Z0-9\._]+)@([a-z0-9]+)(\.[a-z]+)(\.[a-z]+)?$/;
    if (emailRegex.test(input_value)) {
        console.log('valid');
        alert('Your email address has been received! 🎉')
        location.reload();
    }
    else{
        input.classList.add('error-input');
        error.style.display = 'block';
    }
});