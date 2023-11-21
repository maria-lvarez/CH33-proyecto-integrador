let txtNombre = document.getElementById("InputNombreComp");
let txtCorreo = document.getElementById("InputCorreo");
let txtTelefono = document.getElementById("InputTelReg");
let txtPassword = document.getElementById("InputPasswordReg");
let txtConfPassword = document.getElementById("InputPasswordConf");

let btnCrearCuenta = document.getElementById("btnCrearCuenta"); 
let btnClear = document.getElementById("btnClear");

//Trear el alert
let alertValidaciones = document.getElementById("alertValidaciones");

//Arreglo que va a almacena los elementos 
datos = JSON.parse(localStorage.getItem("datos")) || [];

/* function validarNombre(){
    let validNombre = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    if(validNombre.test(txtNombre.value)){
        return true;
    }
    else {
        return false;
    }
}//ValidarNombre */

function validarCorreo(){
    let validCorreo = /^([\-\.a-zA-Z0-9]+)@([\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    if(validCorreo.test(txtCorreo.value)){
        return true;
    }
    else {
        return false;
    }
}//ValidarCorreo

function validarTelefono(){
    let validTel = /^(?!.*(\d)\1{4})\d{10}$/;
    if(validTel.test(txtTelefono.value)){
        return true;
    }
    else {
        return false;
    }
}//ValidarTelefono

function validarContrasena1(){
    let validContrasena1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(validContrasena1.test(txtPassword.value)){
        return true;
    }
    else {
        return false;
    }
}//ValidarContrasena1

function validarContrasena2(){
    let validContrasena2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(validContrasena2.test(txtConfPassword.value)){
        return true;
    }
    else {
        return false;
    }
}//ValidarContrasena2



btnCrearCuenta.addEventListener("click", function(event){
    
    let isValid = true;

    event.preventDefault();
    //Arreglo que va a almacena los elementos de mi tabla
    //const forms = document.getElementsByClassName('.needs-validation')
   

    alertValidaciones.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtNombre.style.border = "";
    txtCorreo.style.border = "";
    txtTelefono.style.border = "";
    txtPassword.style.border = "";
    txtConfPassword.style.border = "";

/* 
    if (!validarNombre) {
        alertValidaciones.innerHTML = "El campo <strong> Nombre </strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid thin red";
        isValid = false;
    } */

    if (txtNombre.value.length < 3) {
        alertValidaciones.innerHTML = "El campo <strong> Nombre </strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid thin red";
        isValid = false;
    }

    if (!validarCorreo()) {
        alertValidaciones.innerHTML += "El campo <strong>Email</strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtCorreo.style.border = "solid thin red";
        isValid = false;
    }

    if (!validarTelefono()) {
        alertValidaciones.innerHTML += "El campo <strong>Teléfono</strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtTelefono.style.border = "solid thin red";
        isValid = false;
    }

    if (!validarContrasena1()) {
        alertValidaciones.innerHTML += "El campo <strong>Contraseña </strong> es requerido. Debe contener mínimo un número, una letra mayúscula y una minúscula, al menos 8 o más carácteres.<br/>";
        alertValidaciones.style.display = "block";
        txtPassword.style.border = "solid thin red";
        isValid = false;
    }

    if (!validarContrasena2()) {
        alertValidaciones.innerHTML += "El campo <strong>Confirmación de contraseña</strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtConfPassword.style.border = "solid thin red";
        isValid = false;
    }

    if(txtConfPassword.value!==txtPassword.value){
        Swal.fire({
            icon: "error",
            title: "Oops... ",
            text: "No se ha podido registrar, ¡Las contraseñas no coinciden!",
            });
    }


    if(isValid && txtConfPassword.value===txtPassword.value){

        let element = { name : txtNombre.value,
            telefono:  txtTelefono.value,
            correo: txtCorreo.value,
            password: txtPassword.value,
            confpass: txtConfPassword.value  //Se agregó el .value

        }
        
        datos.push((element));
        //Guardar mi arreglo en el local storage
        localStorage.setItem("datos", JSON.stringify(datos));

        
        Swal.fire({
            //position: "top-end",
            icon: "success",
            title: "Registro éxitoso",
            showConfirmButton: false,
            timer: 1500
        });

        
        //window.location.href = "login.html";
    }//isValid



});//btnEnviar.addEventListener
