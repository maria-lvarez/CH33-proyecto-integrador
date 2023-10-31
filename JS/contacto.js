

let txtNombre = document.getElementById("exampleFormControlInput1");
let btnEnviar = document.getElementById("btnEnviar");
let alertValidaciones = document.getElementById("alertValidaciones");
let txtEmail = document.getElementById("exampleFormControlInput2");
let txtNumber = document.getElementById("exampleFormControlInput3")
let txtMensaje = document.getElementById("exampleFormControlTextarea1");
let btnClear = document.getElementById("btnClear");

function validarCantidad(){
    if(txtNumber.value.length ===10){
        return true;
    }

    if(parseFloat(txtNumber.value)<=0){
        return false;
    }//parseFloat

    else {
        return false;
    }
}//ValidarTeléfono

function validarEmail() { 
     let re = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (re.test(txtEmail.value) ){
        return true;
    }
    else {
        return false;
    }
}//validarEmail
 
btnEnviar.addEventListener("click", function(event){

    let isValid = true;

    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border = "";
    txtEmail.style.border = "";
    txtNumber.style.border = "";
    txtMensaje.style.border = "";


    if(txtNombre.value.length < 3){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        alertValidaciones.innerHTML="El campo <strong> Nombre </strong> es requerido <br/> ";
        alertValidaciones.style.display="block"; //block o inline para que lo muestre
        txtNombre.style.border = "solid thin red";//Si el campo marca un error se marcará el borde en rojo
        isValid = false;
    }//txtNombre < 3

    if(! validarCantidad()){
        alertValidaciones.innerHTML+="El campo <strong>Teléfono</strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtNumber.style.border="solid thin red";
        isValid = false;
    }//If ! validarTeléfono

    if(! validarEmail()){
        alertValidaciones.innerHTML+="El campo <strong>Email</strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtNumber.style.border="solid thin red";
        isValid = false;
    }//If ! validarTeléfono

    if(txtMensaje.value.length < 10){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        alertValidaciones.innerHTML+="El campo <strong> Mensaje </strong> es requerido <br/> ";
        alertValidaciones.style.display="block"; //block o inline para que lo muestre
        txtNombre.style.border = "solid thin red";//Si el campo marca un error se marcará el borde en rojo
        isValid = false;
    }//ValidarMensaje

    txtNombre.value = ""; 
    txtNumber.value = "";
    txtEmail.value = "";
    txtMensaje.value = "";
    txtNombre.focus();


    var templateParams = {
        name: txtNombre.value,
        email: txtEmail.value,
        phone: txtNumber.value,
        message: txtMensaje.value
    };
     
    emailjs.send('service_r4wh739', 'template_ul6qg7m', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });

});//btnEnviar.addEventListener

//Limpiar los campos
btnClear.addEventListener("click", function(event){
    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none"; 
    txtNombre.style.border = "";
    txtNumber.style.border = "";
    txtEmail.style.border ="";
    txtMensaje.style.border = "";

    txtNombre.value = "";
    txtNumber.value = "";
    txtEmail.value ="";
    txtMensaje.value = "";
});//btnClear.addEventListener