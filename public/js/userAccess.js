window.onload = function(){
    let isError = false;
    let errorFields = document.querySelectorAll('.errorsFront');
    let emailField = document.querySelector('#email');
    let passwordField = document.querySelector('#password');
    let errorsArray = [false, false, false, false, false, false];

    document.querySelector('.form').addEventListener('submit', function(e){
        console.log(errorsArray);
        errorsArray.forEach(error => {
            if(error == true){
                isError = true;
            }
        });
        if(isError){
            e.preventDefault()
        }
    })

    emailField.addEventListener('change', function(){
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(this.value.match(validRegex)){
            errorsArray[0] = false;
            errorFields[0].innerHTML = ""
        } else {
            errorsArray[0] = true;
            errorFields[0].innerHTML = '<small>El formato no es correcto y es obligatorio</small>'
        }
    })

    passwordField.addEventListener('change', function(){
        if(this.checkValidity()){
            errorsArray[1] = false;
            errorFields[1].innerHTML = ""
        } else {
            errorsArray[1] = true;
            errorFields[1].innerHTML = '<small>Este campo es obligatorio</small>'
        }
    })
}