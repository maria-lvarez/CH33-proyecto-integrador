let txtNombre = document.getElementById("InputNombreComp");
let txtCorreo = document.getElementById("InputCorreo");
let txtTelefono = document.getElementById("InputTelReg");
let txtPassword = document.getElementById("InputPasswordReg");
let txtConfPassword = document.getElementById("InputPasswordConf");



let btnCrearcuenta = document.getElementById("btnCrearCuenta");
let btnClear = document.getElementById("btnClear");


//Arreglo que va a almacena los elementos de mi tabla
const forms = document.querySelectorAll('.needs-validation')
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
    event.preventDefault();
    form.classList.add('was-validated') 

    let isValid = true;

    
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style = "";
    txtCorreo.style = "";
    txtTelefono.style = "";
    txtPassword.style = "";
    txtConfPassword.style = "";


    if(txtNombre.value.length < 2){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        
        isValid = false;
        return;
    }//txtNombre


    if(! validarCorreo()){
        isValid = false;
        return;
    }//If ! validarCategoria


    if(! validarPassword()){
        isValid = false;
        return;
    }//If ! validarEstado


    /*if(! validarPasswordConf()){
        alertValidaciones.innerHTML+="La contraseña <strong> es incorrecta </strong>o no coincide <br/>";
        alertValidaciones.style.display="block";
        txtConfPassword.style.border="solid thin red";
        isValid = false;
    }//If ! validarCategoria*/


    if(! validarTelefono()){
        isValid = false;
        return;
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

        
        

    } //isValid
    if(txtConfPassword.value===txtPassword.value){window.location.href = "login.html";}
});//btnEnviar.addEventListener
