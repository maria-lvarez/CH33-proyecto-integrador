
let btnIniciarSesión = document.getElementById("btnIniciarSesión");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidaciones1=document.getElementById("alertValidaciones1");
let txtEmail = document.getElementById("exampleInputEmail1");
let txtContraseña=document.getElementById("exampleInputPassword1")
let btnClear = document.getElementById("btnClear");

function validarEmail() { 
     let re = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (re.test(txtEmail.value) ){
        return true;
    }
    else {
        return false;
    }
}//validarEmail

// function validarEnvio(){
//     let response = emailjs.send;
//     if (response==console.assert('SUCCESS!', response.status, response.text)){
//         return true;
//     }
//     else{
//         return false;
//     }

// }

 
btnIniciarSesión.addEventListener("click", function(event){

    let isValid = true;

    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtEmail.style.border = "";
    txtContraseña.style.border = "";


    if(! validarEmail()){
        alertValidaciones.innerHTML+="El campo <strong>Email</strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtEmail.style.border="solid thin red";
        isValid = false;
    }//If ! validarTeléfono

    if(txtContraseña.value.length < 8){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        alertValidaciones.innerHTML+="La contraseña debe tener mínimo <strong> 8 carácteres </strong> <br/> ";
        alertValidaciones.style.display="block";
        txtMensaje.style.border = "solid thin red";//Si el campo marca un error se marcará el borde en rojo
        isValid = false;
    }//if 

   // txtNombre.value = ""; 
    //txtNumber.value = "";
    //txtEmail.value = "";
   // txtMensaje.value = "";
   // txtNombre.focus();

    // var templateParams = {
    //     name: txtNombre.value,
    //     email: txtEmail.value,
    //     phone: txtNumber.value,
    //     message: txtMensaje.value
    // };
     
    // emailjs.send('service_r4wh739', 'template_ul6qg7m', templateParams)
    //     .then(function(response) {
    //        console.log('SUCCESS!', response.status, response.text);
    //     }, function(error) {
    //        console.log('FAILED...', error);
    //     });

});//btnEnviar.addEventListener

