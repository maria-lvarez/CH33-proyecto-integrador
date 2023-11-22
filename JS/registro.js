// Mover estos let
// let txtNombre = document.getElementById("InputNombreComp");
// let txtCorreo = document.getElementById("InputCorreo");
// let txtTelefono = document.getElementById("InputTelReg");
// let txtPassword = document.getElementById("InputPasswordReg");
// let txtConfPassword = document.getElementById("InputPasswordConf");

let btnCrearCuenta = document.getElementById("btnCrearCuenta"); 
let btnClear = document.getElementById("btnClear");

//Trear el alert
let alertValidaciones = document.getElementById("alertValidaciones");

<<<<<<< HEAD
//Arreglo que va a almacena los elementos 
datos = JSON.parse(localStorage.getItem("datos")) || [];

/* function validarNombre(){
    let validNombre = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    if(validNombre.test(txtNombre.value)){
        return true;
    }
    else {
=======
//Arreglo que va a almacena los elementos de mi tabla

// const forms = document.getElementsByClassName('.needs-validation')

datos = JSON.parse(localStorage.getItem("datos")) || [];

function validarNombre(nameInput){

    if (nameInput) {
        return true
    }else{
>>>>>>> 1e1ee0214d6f7d70f71a7ba170910e5c195ab22d
        return false;
    }
}//ValidarNombre */

<<<<<<< HEAD
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
=======
function validarCorreo(emailInput){
    if (emailInput) {
        return true
    }else{
        return false;
    }
}//validarEstado

function validarPassword(passwordInput){

    if (passwordInput) {
        return true
    }else{
        return false;
    }
}//validarPassword 

function validarPasswordConf(passwd, passConf){
    console.group('validarPasswordConf');
    console.log(passwd)
    console.log(passConf);
    console.groupEnd();
    if (passwd && passwd === passConf) {
        console.log('Is Valid');
        console.groupEnd();
        return true
        
    }else{
        console.log('Is not Valid');
        console.groupEnd();
>>>>>>> 1e1ee0214d6f7d70f71a7ba170910e5c195ab22d
        return false;
        
    }
}//ValidarContrasena1

<<<<<<< HEAD
function validarContrasena2(){
    let validContrasena2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(validContrasena2.test(txtConfPassword.value)){
=======

function validarTelefono(telNumber){
    if(telNumber.length ===10){
>>>>>>> 1e1ee0214d6f7d70f71a7ba170910e5c195ab22d
        return true;
    }
    else {
        return false;
    }
}//ValidarContrasena2



btnCrearCuenta.addEventListener("click", function(event){
<<<<<<< HEAD
=======
    event.preventDefault();

    const form = document.getElementById('formReg');
    form.classList.add('was-validated');

    // Para aca y usar const.
    const txtNombre = document.getElementById("InputNombreComp").value;
    const txtCorreo = document.getElementById("InputCorreo").value;
    const txtTelefono = document.getElementById("InputTelReg").value;
    const txtPassword = document.getElementById("InputPasswordReg").value;
    const txtConfPassword = document.getElementById("InputPasswordConf").value;

    console.log(txtNombre);
    console.log(txtCorreo);
    console.log(txtTelefono);
    console.log(txtPassword);
    console.log(txtConfPassword);

    // form.classList.add('was-validated') 

    let isValid = true;

>>>>>>> 1e1ee0214d6f7d70f71a7ba170910e5c195ab22d
    
    let isValid = true;

<<<<<<< HEAD
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
=======
    if(txtNombre.length < 2){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        
>>>>>>> 1e1ee0214d6f7d70f71a7ba170910e5c195ab22d
        isValid = false;
    } */

<<<<<<< HEAD
    if (txtNombre.value.length < 3) {
        alertValidaciones.innerHTML = "El campo <strong> Nombre </strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid thin red";
=======
    if(! validarCorreo(txtCorreo)){
>>>>>>> 1e1ee0214d6f7d70f71a7ba170910e5c195ab22d
        isValid = false;
    }

<<<<<<< HEAD
    if (!validarCorreo()) {
        alertValidaciones.innerHTML += "El campo <strong>Email</strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtCorreo.style.border = "solid thin red";
=======
    if(! validarPassword(txtPassword)){
>>>>>>> 1e1ee0214d6f7d70f71a7ba170910e5c195ab22d
        isValid = false;
    }

<<<<<<< HEAD
    if (!validarTelefono()) {
        alertValidaciones.innerHTML += "El campo <strong>Teléfono</strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtTelefono.style.border = "solid thin red";
        isValid = false;
    }
=======
    if(! validarPasswordConf(txtPassword, txtConfPassword)){
        isValid = false;
        return;
    }//If ! validarCategoria
>>>>>>> 1e1ee0214d6f7d70f71a7ba170910e5c195ab22d

    if (!validarContrasena1()) {
        alertValidaciones.innerHTML += "El campo <strong>Contraseña </strong> es requerido. Debe contener mínimo un número, una letra mayúscula y una minúscula, al menos 8 o más carácteres.<br/>";
        alertValidaciones.style.display = "block";
        txtPassword.style.border = "solid thin red";
        isValid = false;
    }

<<<<<<< HEAD
    if (!validarContrasena2()) {
        alertValidaciones.innerHTML += "El campo <strong>Confirmación de contraseña</strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtConfPassword.style.border = "solid thin red";
=======
    if(! validarTelefono(txtTelefono)){
>>>>>>> 1e1ee0214d6f7d70f71a7ba170910e5c195ab22d
        isValid = false;
    }

    if(txtConfPassword.value!==txtPassword.value){
        Swal.fire({
            icon: "error",
            title: "Oops... ",
            text: "No se ha podido registrar, ¡Las contraseñas no coinciden!",
            });
    }

<<<<<<< HEAD

    if(isValid && txtConfPassword.value===txtPassword.value){
=======
    //JSON
    if(isValid){ 
        //Si es valido el nombre y la cantidad los agregará a la tabla, si no, no los agregará
        const correo = txtCorreo;
        const password = txtPassword;

            let elemento = {
                name : txtNombre,
                telefono:  txtTelefono,
                correo: txtCorreo,
                password: txtPassword,
                confpass: txtConfPassword
            };
>>>>>>> 1e1ee0214d6f7d70f71a7ba170910e5c195ab22d

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



<<<<<<< HEAD
=======
    } //isValid

    if(txtConfPassword.value===txtPassword.value){window.location.href = "login.html";}
>>>>>>> 1e1ee0214d6f7d70f71a7ba170910e5c195ab22d
});//btnEnviar.addEventListener

