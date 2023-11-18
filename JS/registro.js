/*let txtNombre = document.getElementById("InputNombreComp");
let txtCorreo = document.getElementById("InputCorreo");
let txtTelefono = document.getElementById("InputTelReg");
let txtPassword = document.getElementById("InputPasswordReg");
let txtConfPassword = document.getElementById("InputPasswordConf");

let btnCrearCuenta = document.getElementById("btnCrearCuenta");
let btnClear = document.getElementById("btnClear");

// Arreglo que va a almacenar los elementos
let datos = JSON.parse(localStorage.getItem("datos")) || [];

function validarCorreo() {
    return txtCorreo.value !== '';
}

function validarPassword() {
    return txtPassword.value !== '';
}

function validarPasswordConf() {
    return txtPassword.value === txtConfPassword.value;
}

function validarTelefono() {
    return txtTelefono.value.length === 10;
}

btnCrearCuenta.addEventListener("click", function(event) {
    let isValid = true;

    event.preventDefault();
    // Resto del código para mostrar alertas...

    if (validarCorreo() && validarPassword() && validarPasswordConf() && validarTelefono()) {
        let usuario = {
            nombre: txtNombre.value,
            telefono: txtTelefono.value,
            correo: txtCorreo.value,
            password: txtPassword.value
        };

        datos.push(usuario);
        localStorage.setItem("datos", JSON.stringify(datos));

        window.location.href = "login.html";
    }
});

function guardarCredenciales(correo, password) {
    localStorage.setItem('email', correo);
    localStorage.setItem('password', password);
}
*/


let txtNombre = document.getElementById("InputNombreComp");
let txtCorreo = document.getElementById("InputCorreo");
let txtTelefono = document.getElementById("InputTelReg");
let txtPassword = document.getElementById("InputPasswordReg");
let txtConfPassword = document.getElementById("InputPasswordConf");



let btnCrearcuenta = document.getElementById("btnCrearCuenta");
let btnClear = document.getElementById("btnClear");




//Arreglo que va a almacena los elementos de mi tabla
datos = JSON.parse(localStorage.getItem("datos")) || [];

function validarNombre(){

    if (txtNombre.value) {
        return true
    }else{
        return false;
    }
}//validarNombre


function validarCorreo(){
    if (txtCorreo.value) {
        return true
    }else{
        return false;
    }
}//validarEstado

function validarPassword(){

    if (txtPassword.value) {
        return true
    }else{
        return false;
    }
}//validarPassword 
function validarPasswordConf(){

    if (txtPassword.value && txtConfPassword === txtPassword) {
        return true
    }else{
        return false;
    }
}//validarPassword 



function validarTelefono(){
    if(txtTelefono.value.length ===10){
        return true;
    }
    else {
        return false;
    }
}//ValidarCantidad



btnCrearCuenta.addEventListener("click", function(event){

    let isValid = true;

    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style = "";
    txtCorreo.style = "";
    txtTelefono.style = "";
    txtPassword.style = "";
    txtConfPassword.style = "";


    if(txtNombre.value.length < 2){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        alertValidaciones.innerHTML="El campo <strong> nombre </strong> es requerido <br/> ";
        alertValidaciones.style.display="block"; //block o inline para que lo muestre
        txtNombre.style.border = "solid thin red";//Si el campo marca un error se marcará el borde en rojo
        isValid = false;
    }//txtNombre


    if(! validarCorreo()){
        alertValidaciones.innerHTML+="El campo <strong> correo </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtCorreo.style.border="solid thin red";
        isValid = false;
    }//If ! validarCategoria


    if(! validarPassword()){
        alertValidaciones.innerHTML+="El campo <strong> contraseña </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtPassword.style.border="solid thin red";
        isValid = false;
    }//If ! validarEstado


    /*if(! validarPasswordConf()){
        alertValidaciones.innerHTML+="La contraseña <strong> es incorrecta </strong>o no coincide <br/>";
        alertValidaciones.style.display="block";
        txtConfPassword.style.border="solid thin red";
        isValid = false;
    }//If ! validarCategoria*/


    if(! validarTelefono()){
        alertValidaciones.innerHTML+="El campo <strong>teléfono</strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtTelefono.style.border="solid thin red";
        isValid = false;
    }//If ! validarTelefono


    //JSON
    if(isValid){ 
        //Si es valido el nombre y la cantidad los agregará a la tabla, si no, no los agregará
        const correo = txtCorreo.value;
        const password = txtPassword.value;

            let elemento = {
                name : txtNombre.value,
                telefono:  txtTelefono.value,
                correo: txtCorreo.value,
                password: txtPassword.value,
                confpass: txtConfPassword
            };


        //Ir almacenando elementos a mi array > Hace que una cadena de texto se vuelva un object
        datos.push((elemento));
        localStorage.setItem('email', correo);
        localStorage.setItem('password', password);
        //Guardar mi arreglo en el local storage
        localStorage.setItem("datos", JSON.stringify(datos));
        alertValidaciones1.innerHTML+="El registro <strong>fue exitoso</strong>, ¡Bienvenid@!<br/>";
        alertValidaciones1.style.display="block"; //Convierte los alementos de mi array en string


        window.location.href = "login.html";

    } //isValid

});//btnEnviar.addEventListener
/*

//Limpiar los campos
btnClear.addEventListener("click", function(event){
    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style = "";
    txtCorreo.style = "";
    txtTelefono.style = "";
    txtPassword.style = "";
    txtConfPassword.style = "";

    txtNombre.value = "";
    txtCorreo.value = "";
    txtTelefono.value = "";
    txtPassword.value = "";
    txtConfPassword.value = "";
    
});*/