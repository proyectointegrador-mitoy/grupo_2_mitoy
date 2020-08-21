window.addEventListener('load', function (){
    let iniciar = document.querySelector('#iniciar');
   
    iniciar.addEventListener('submit', function (e){
       
        let errores = [];
        let campoEmail = document.querySelector('#email');
        if (campoEmail.value == ""){
            errores.push('El campo de email tiene que estar completo')
        };
        let campoContraseña = document.querySelector('#password');
        if (campoContraseña.value == ""){
            errores.push('El campo de contraseña tiene que estar completo')
        };
        if (errores.length > 0){
            e.preventDefault();
    
            let ulErrores = document.querySelector('div.errores ul')
            for(let i=0; i < errores.length; i++){
               ulErrores.innerHTML += "<li>"+ errores[i] + "</li>"
            }
    
           }

    });
});