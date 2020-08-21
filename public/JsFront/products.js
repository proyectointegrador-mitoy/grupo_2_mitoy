window.addEventListener('load', function (){
    let productos= document.querySelector('#products');
   
    productos.addEventListener('submit', function (e){
       
       let errores = [];

       let campoNombre = document.querySelector('#name');
       if (campoNombre.value == ""){
           errores.push('El campo de nombre tiene que estar completo')
       }; let campoMaterial = document.querySelector('#material');
       if (campoMaterial.value == ""){
           errores.push('El campo de material tiene que estar completo')
       }; let campoPrecio = document.querySelector('#price');
       if (campoPrecio.value == ""){
           errores.push('El campo de precio tiene que estar completo')
       }; let campoColor = document.querySelector('#color');
       if (campoColor.value == ""){
           errores.push('El campo de color tiene que estar completo')
       }; let campoDescuento = document.querySelector('#discount');
       if (campoDescuento.value == ""){
           errores.push('El campo de descuento tiene que estar completo')
       }; let campoCantidad = document.querySelector('#stock');
       if (campoCantidad.value == ""){
           errores.push('El campo de cantidades tiene que estar completo')
       }; let campoCategoria = document.querySelector('#category');
       if (campoCategoria.value == ""){
           errores.push('El campo de categorias tiene que estar completo')
       }; let campoEdad = document.querySelector('#age');
       if (campoEdad.value == ""){
           errores.push('El campo de edades tiene que estar completo')
       }; let campoImagen = document.querySelector('#imagenControl');
       if (campoImagen.value == ""){
           errores.push('El campo de imagenes tiene que estar completo')
       }; let campoDescripcion = document.querySelector('#description');
       if (campoDescripcion.value == ""){
           errores.push('El campo de descripciones tiene que estar completo')
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