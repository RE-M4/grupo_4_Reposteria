window.onload = function(){
    let filterOption = document.querySelector('#filter');
    let tortaProducts = document.querySelectorAll('#torta')
    let masasProducts = document.querySelectorAll('#masa-dulce')
    filterOption.addEventListener('change', function(){
        if(filterOption.value == 'torta'){
            masasProducts.forEach(function(product){
                product.style.display = 'none'
            })
            tortaProducts.forEach(function(product){
                product.style.display = ''
            })
        } else {
            if(filterOption.value == 'masa-dulce'){
                tortaProducts.forEach(function(product){
                    product.style.display = 'none'
                })
                masasProducts.forEach(function(product){
                    product.style.display = ''
                })
            } else {
                masasProducts.forEach(function(product){
                    product.style.display = ''
                })
                tortaProducts.forEach(function(product){
                    product.style.display = ''
                })
            }
        }
    })
}