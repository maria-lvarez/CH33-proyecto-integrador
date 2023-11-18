let txtProducto = document.getElementById("inputFormProducto");
let txtCategoria = document.getElementById("inputFormCategoria");
let txtEstado = document.getElementById("inputFormEstado");
let txtDescripcion = document.getElementById("inputFormDescripcion");
let txtPrecio = document.getElementById("inputFormPrecio");
let txtTel = document.getElementById("inputFormTel");
let txtDireccion = document.getElementById("inputFormDireccion");
let txtCP = document.getElementById("inputFormCP");
let txtEnvio= document.getElementById("inputFormEnvio");


let btnEnviarForm = document.getElementById("btn-enviar-form");
let btnClear = document.getElementById("btnClear");

let terminos1 = document.getElementById("terminos1");
let terminos2 = document.getElementById("terminos2");

let alertValidaciones = document.getElementById("alertValidaciones");

let cardsForm = document.getElementById("cardsForm");

let txtImg= document.getElementById("img-product");

//imagen para cargar
let imagen = document.querySelector('#img-product');


//Arreglo que va a almacena los elementos de mi tabla
datos = JSON.parse(localStorage.getItem("datos")) || [];

function validarCategoria(){

    if (txtCategoria.value) {
        return true
    }else{
        return false;
    }
}//validarCategoria 



function validarEstado(){
    if (txtEstado.value) {
        return true
    }else{
        return false;
    }
}//validarEstado

function validarEnvio(){

    if (txtEnvio.value) {
        return true
    }else{
        return false;
    }
}//validarCategoria 


function validarPrecio(){
    if(txtPrecio.value.length ==0){
        return false;
    }//if length

    if(isNaN(txtPrecio.value)){
        return false;
    }//isNaN

    if(parseFloat(txtPrecio.value)<=0){
        return false;
    }//parseFloat

    return true;
}//ValidarPrecio

function validarTelefono(){
    if(txtTel.value.length ===10){
        return true;
    }
    else {
        return false;
    }
}//ValidarCantidad


function validarCP() { 
    let re = /^[0-9]{5}$/;
   if (re.test(txtCP.value)){
       return true;
   }
   else {
       return false;
   }
}//validarCP

function validarTerminos1(){
    if (terminos1.checked) {
        return true
    }else{
        return false;
    }
}//validarTerminos1

function validarTerminos2(){
    if (terminos2.checked) {
        return true
    }else{
        return false;
    }
}//validarTerminos2

function validarImagen() {
    if (imagen.src.trim() === '') {
        return false;
    } else {
        return true;
    }
}//ValidarImagen

btnEnviarForm.addEventListener("click", function(event){

    let isValid = true;

    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtProducto.style = "";
    txtCategoria.style = "";
    txtEstado.style = "";
    txtDescripcion.style = "";
    txtPrecio.style = "";
    txtTel.style = "";
    txtDireccion.style = "";
    txtCP.style = "";
    txtEnvio.style = "";
    terminos1.style = "";
    terminos2.style = "";
    imagen.style = "";


    if(txtProducto.value.length < 3){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        alertValidaciones.innerHTML="El campo <strong> producto </strong> es requerido <br/> ";
        alertValidaciones.style.display="block"; //block o inline para que lo muestre
        txtProducto.style.border = "solid thin red";//Si el campo marca un error se marcará el borde en rojo
        isValid = false;
    }//txtProducto<3


    if(! validarCategoria()){
        alertValidaciones.innerHTML+="El campo <strong> categoría </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtCategoria.style.border="solid thin red";
        isValid = false;
    }//If ! validarCategoria


    if(! validarEstado()){
        alertValidaciones.innerHTML+="El campo <strong> estado </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtEstado.style.border="solid thin red";
        isValid = false;
    }//If ! validarEstado


    if(! validarEnvio()){
        alertValidaciones.innerHTML+="El campo <strong> envío </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtEnvio.style.border="solid thin red";
        isValid = false;
    }//If ! validarCategoria

    if(txtDescripcion.value.length < 10){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        alertValidaciones.innerHTML+="El campo <strong> descripción </strong> es requerido <br/> ";
        alertValidaciones.style.display="block"; //block o inline para que lo muestre
        txtDescripcion.style.border = "solid thin red";//Si el campo marca un error se marcará el borde en rojo
        isValid = false;
    }//validar Descripción

    if(! validarPrecio()){
        alertValidaciones.innerHTML +="El campo <strong> precio </strong> es requerido <br/> ";
        alertValidaciones.style.display="block";
        txtPrecio.style.border = "solid thin red";
        isValid = false;
    }//if ! validarCanrtidad

    if(! validarTelefono()){
        alertValidaciones.innerHTML+="El campo <strong>teléfono</strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtTel.style.border="solid thin red";
        isValid = false;
    }//If ! validarTelefono

    if(txtDireccion.value.length < 10){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        alertValidaciones.innerHTML+="El campo <strong> dirección </strong> es requerido <br/> ";
        alertValidaciones.style.display="block"; //block o inline para que lo muestre
        txtDireccion.style.border = "solid thin red";//Si el campo marca un error se marcará el borde en rojo
        isValid = false;
    }//validar Dirección


    if(! validarCP()){
        alertValidaciones.innerHTML+="El campo <strong> código postal </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtCP.style.border="solid thin red";
        isValid = false;
    }//If ! validarCP

    if(! validarTerminos1()){
        alertValidaciones.innerHTML+="El campo <strong> Acepto los terminos y condiciones </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        terminos1.style.border="solid thin red";
        isValid = false;
    }//If ! validarterminos1


    if(! validarTerminos2()){
        alertValidaciones.innerHTML+="El campo <strong> Acepto los terminos de selección de productos </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        terminos2.style.border="solid thin red";
        isValid = false;
    }//If ! validarterminos1

    if (!validarImagen()){
        alertValidaciones.innerHTML+="El campo <strong> Imagen del producto </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        isValid = false;
    }//If ! validarImagen


    //Boton de la imagen para cargar
    
    let myWidget = cloudinary.createUploadWidget({
        cloudName: 'dvdf3ncs2', 
        uploadPreset: 'ElGranBazar',
        folder: 'widgetUpload', 
        cropping: true
    }, (error, result) => { 
        if (!error && result && result.event === "success") { 
            console.log('Imagen subida con éxito: ', result.info); 
            imagen.src = result.info.secure_url;
        }
    });

    document.getElementById("upload_widget").addEventListener("click", function(){
        myWidget.open();
    }, false);


    //JSON
    if(isValid){ //Si es valido el nombre y la cantidad los agregará a la tabla, si no, no los agregará


            let elemento = {name : txtProducto.value,
            img:  imagen.src,
            categoria : txtCategoria.value,
            precio : txtPrecio.value,
            };


        //Ir almacenando elementos a mi array > Hace que una cadena de texto se vuelva un object
        datos.push((elemento));
        //Guardar mi arreglo en el local storage
        localStorage.setItem("datos", JSON.stringify(datos)); //Convierte los alementos de mi array en string


        window.location.href = "electrodomesticos.html";

    } //isValid


});//btnEnviar.addEventListener


//Limpiar los campos
btnClear.addEventListener("click", function(event){
    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtProducto.style = "";
    txtCategoria.style = "";
    txtEstado.style = "";
    txtDescripcion.style = "";
    txtPrecio.style = "";
    txtTel.style = "";
    txtDireccion.style = "";
    txtCP.style = "";
    txtEnvio.style = "";
    terminos1.style = "";
    terminos2.style = "";

    txtProducto.value = "";
    txtCategoria.value = "";
    txtEstado.value = "";
    txtDescripcion.value = "";
    txtPrecio.value = "";
    txtTel.value = "";
    txtDireccion.value = "";
    txtCP.value= "";
    txtEnvio.value= "";
    terminos1.value = "";
    terminos2.value= "";
    

});//btnClear.addEventListener


//Boton de la imagen para cargar
// let myWidget = cloudinary.createUploadWidget({
//     cloudName: 'dvdf3ncs2', 
//     uploadPreset: 'ElGranBazar',
//     folder: 'widgetUpload', 
//     cropping: true
//   }, (error, result) => { 
//     if (!error && result && result.event === "success") { 
//         console.log('Imagen subida con éxito: ', result.info); 
//         imagen.src = result.info.secure_url;
//      }
// });

// document.getElementById("upload_widget").addEventListener("click", function(){
//     myWidget.open();
//   }, false);