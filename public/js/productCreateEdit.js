window.onload = function(){
    let isError = false;
    let errorFields = document.querySelectorAll('.errorsFront');
    let nombreField = document.querySelector('#nombre');
    let precioField = document.querySelector('#precio');
    let descuentoField = document.querySelector('#descuento');
    let descripcionField = document.querySelector('#descripcion');
    let ingredientesField = document.querySelector('#ingredientes');
    let imagenField = document.querySelector('#imagen');
    let tipoField = document.querySelector('#tipo');
    let stockField = document.querySelector('#stock');
    let errorArray = [false, false, false, false, false, false, false, false];

    document.querySelector('.form').addEventListener('submit', function(e){
        errorArray.forEach(error => {
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
            errorArray[0] = true;
            errorFields[0].innerHTML = '<small>Este campo debe tener al menos 2 caracteres y es obligatorio</small>'
        } else {
            errorArray[0] = false;
            errorFields[0].innerHTML = ""
        }
    })

    precioField.addEventListener('change', function(){
        if(!this.checkValidity()){
            errorArray[1] = true;
            errorFields[1].innerHTML = '<small>Este campo solo acepta números y es obligatorio</small>'
        } else {
            errorArray[1] = false;
            errorFields[1].innerHTML = ""
        }
    })

    descuentoField.addEventListener('change', function(){
        if(!this.checkValidity()){
            errorArray[2] = true;
            errorFields[2].innerHTML = '<small>Este campo solo acepta números y es obligatorio</small>'
        } else {
            errorArray[2] = false;
            errorFields[2].innerHTML = ""
        }
    })

    descripcionField.addEventListener('change', function(){
        if(this.value.length <= 19){
            errorArray[3] = true;
            errorFields[3].innerHTML = '<small>Este campo debe tener al menos 20 caracteres y es obligatorio</small>'
        } else {
            errorArray[3] = false;
            errorFields[3].innerHTML = ""
        }
    })

    ingredientesField.addEventListener('change', function(){
        if(this.value.length <= 19){
            errorArray[4] = true;
            errorFields[4].innerHTML = '<small>Este campo debe tener al menos 20 caracteres y es obligatorio</small>'
        } else {
            errorArray[4] = false;
            errorFields[4].innerHTML = ""
        }
    })

    imagenField.addEventListener('change', function(){
        if(this.files[0].type != 'image/jpg' && this.files[0].type != 'image/jpeg' && this.files[0].type != 'image/png'){
            errorArray[5] = true;
            errorFields[5].innerHTML = '<small>Este campo solo acepta imágenes JPG, JPEG y PNG</small>'
        } else {
            errorArray[5] = false;
            errorFields[5].innerHTML = ""
        }
    })

    tipoField.addEventListener('change', function(){
        if(!this.value){
            errorArray[6] = true;
            errorFields[6].innerHTML = '<small>Este campo es obligatorio</small>'
        } else {
            errorArray[6] = false;
            errorFields[6].innerHTML = ""
        }
    })

    stockField.addEventListener('change', function(){
        if(!this.checkValidity()){
            errorArray[7] = true;
            errorFields[7].innerHTML = '<small>Este campo solo acepta números y es obligatorio</small>'
        } else {
            errorArray[7] = false;
            errorFields[7].innerHTML = ""
        }
    })
}