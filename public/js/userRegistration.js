window.onload = function(){
    let isError = false;
    let errorFields = document.querySelectorAll('.errorsFront');
    let nombreField = document.querySelector('#nombre');
    let apellidoField = document.querySelector('#apellido');
    let emailField = document.querySelector('#email');
    let domicilioField = document.querySelector('#domicilio');
    let passwordField = document.querySelector('#password');
    let imagenField = document.querySelector('#imagen');
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

    nombreField.addEventListener('change', function(){
        if(this.value.length <= 1){
            errorsArray[0] = true;
            errorFields[0].innerHTML = '<small>Este campo debe tener al menos 2 caracteres y es obligatorio</small>'
        } else {
            errorsArray[0] = false;
            errorFields[0].innerHTML = ""
        }
    })

    apellidoField.addEventListener('change', function(){
        if(this.value.length <= 1){
            errorsArray[1] = true;
            errorFields[1].innerHTML = '<small>Este campo debe tener al menos 2 caracteres y es obligatorio</small>'
        } else {
            errorsArray[1] = false;
            errorFields[1].innerHTML = ""
        }
    })

    emailField.addEventListener('change', function(){
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(this.value.match(validRegex)){
            errorsArray[2] = false;
            errorFields[2].innerHTML = ""
        } else {
            errorsArray[2] = true;
            errorFields[2].innerHTML = '<small>El formato no es correcto y es obligatorio</small>'
        }
    })

    domicilioField.addEventListener('change', function(){
        if(this.value.length <= 4){
            errorsArray[3] = true;
            errorFields[3].innerHTML = '<small>Este campo debe tener al menos 5 caracteres y es obligatorio</small>'
        } else {
            errorsArray[3] = false;
            errorFields[3].innerHTML = ""
        }
    })

    passwordField.addEventListener('change', function(){
        let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(this.value.match(regularExpression)){
            errorsArray[4] = false;
            errorFields[4].innerHTML = ""
        } else {
            errorsArray[4] = true;
            errorFields[4].innerHTML = '<small>La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 caracter especial</small>'
        }
    })

    imagenField.addEventListener('change', function(){
        if(this.files[0].type != 'image/jpg' && this.files[0].type != 'image/jpeg' && this.files[0].type != 'image/png'){
            errorsArray[5] = true;
            errorFields[5].innerHTML = '<small>Este campo solo acepta imágenes JPG, JPEG y PNG y es obligatorio</small>'
        } else {
            errorsArray[5] = false;
            errorFields[5].innerHTML = ""
        }
    })
}