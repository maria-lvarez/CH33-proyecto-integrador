

let txtNombre = document.getElementById("exampleFormControlInput1");
let btnEnviar = document.getElementById("btnEnviar");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidaciones1=document.getElementById("alertValidaciones1");
let txtEmail = document.getElementById("exampleFormControlInput2");
let txtNumber = document.getElementById("exampleFormControlInput3")
let txtMensaje = document.getElementById("exampleFormControlTextarea1");
let btnClear = document.getElementById("btnClear");

/* function validarCantidad(){
    if(txtNumber.value.length ===10){
        return true;
    }

    if(parseFloat(txtNumber.value)<=0){
        return false;
    }//parseFloat

    else {
        return false;
    }
} *///ValidarCantidad
function validarNombre(){
    let re = /^(?!\s)[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
    if (re.test(txtNombre.value) ){
        return true;
    }
    else {
        return false;
    }
    
}//validarnombre

function validarCantidad(){
    let re = /^(?!.*(\d)\1{4})\d{10}$/;
    if (re.test(txtNumber.value) ){
        return true;
    }
    else {
        return false;
    }
    
}//validartel

function validarEmail() { 
     let re = /^([\-\.a-zA-Z0-9]+)@([\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    if (re.test(txtEmail.value) ){
        return true;
    }
    else {
        return false;
    }
}//validarEmail

/* function validarEnvio(){
    let response = emailjs.send;
    if (response==console.assert('SUCCESS!', response.status, response.text)){
        return true;
    }
    else{
        return false;
    }

} */
 
btnEnviar.addEventListener("click", function(event){

    let isValid = true;

    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border = "";
    txtEmail.style.border = "";
    txtNumber.style.border = "";
    txtMensaje.style.border = "";


   /*  if(txtNombre.value.length < 3){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        alertValidaciones.innerHTML="El campo <strong> Nombre </strong> es requerido <br/> ";
        alertValidaciones.style.display="block"; //block o inline para que lo muestre
        txtNombre.style.border = "solid thin red";//Si el campo marca un error se marcará el borde en rojo
        isValid = false;
    } *///txtNombre < 3
    if(! validarNombre()){
        alertValidaciones.innerHTML+="El campo <strong>Nombre</strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtNumber.style.border="solid thin red";
        isValid = false;
    } //If ! validarNombre


    if(! validarCantidad()){
        alertValidaciones.innerHTML+="El campo <strong>Teléfono</strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtNumber.style.border="solid thin red";
        isValid = false;
    } //If ! validarCantidad
    
       if(! validarEmail()){
        alertValidaciones.innerHTML+="El campo <strong>Email</strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtEmail.style.border="solid thin red";
        isValid = false;
    }//If ! validarEmail

    if(txtMensaje.value.length < 10){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        alertValidaciones.innerHTML+="El campo <strong> Mensaje </strong> es requerido <br/> ";
        alertValidaciones.style.display="block"; //block o inline para que lo muestre
        txtMensaje.style.border = "solid thin red";//Si el campo marca un error se marcará el borde en rojo
        isValid = false;
    }//validar mensaje

   /*  if(! validarEnvio()){
       alertValidaciones.innerHTML+= "<strong>ERROR</strong> eL mensaje no ha sido enviado, prueba de nuevo <br/> ";
       alertValidaciones.style.display="block"; //block o inline para que lo muestre
       txtMensaje.style.border="solid thin red";
       isValid = false;
    }//Validar si se envio */
    /* else{
        alertValidaciones1.innerHTML+="¡El <strong>mensaje</strong> ha sido enviado correctamente!";
        alertValidaciones1.style.display="block";
        isValid = true;
    } */

   // txtNombre.value = ""; 
    //txtNumber.value = "";
    //txtEmail.value = "";
   // txtMensaje.value = "";
   // txtNombre.focus();

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

    let modal = document.getElementByClassName("btn");
    modal.insertAdjacentHTML(`<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`);

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


function mensajeEnviado() {

    alert('tu mensaje se envio exitosasmente!');
}