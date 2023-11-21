// Mover estos let
// let txtNombre = document.getElementById("InputNombreComp");
// let txtCorreo = document.getElementById("InputCorreo");
// let txtTelefono = document.getElementById("InputTelReg");
// let txtPassword = document.getElementById("InputPasswordReg");
// let txtConfPassword = document.getElementById("InputPasswordConf");



let btnCrearcuenta = document.getElementById("btnCrearCuenta");
let btnClear = document.getElementById("btnClear");


//Arreglo que va a almacena los elementos de mi tabla

// const forms = document.getElementsByClassName('.needs-validation')

datos = JSON.parse(localStorage.getItem("datos")) || [];

function validarNombre(nameInput){

    if (nameInput) {
        return true
    }else{
        return false;
    }
}//validarNombre


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
        return false;
        
    }
    
}//validarPassword 



function validarTelefono(telNumber){
    if(telNumber.length ===10){
        return true;
    }
    else {
        return false;
    }
}//ValidarCantidad



btnCrearCuenta.addEventListener("click", function(event){
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

    
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style = "";
    txtCorreo.style = "";
    txtTelefono.style = "";
    txtPassword.style = "";
    txtConfPassword.style = "";


    if(txtNombre.length < 2){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        
        isValid = false;
        return;
    }//txtNombre


    if(! validarCorreo(txtCorreo)){
        isValid = false;
        return;
    }//If ! validarCategoria


    if(! validarPassword(txtPassword)){
        isValid = false;
        return;
    }//If ! validarEstado


    if(! validarPasswordConf(txtPassword, txtConfPassword)){
        isValid = false;
        return;
    }//If ! validarCategoria


    if(! validarTelefono(txtTelefono)){
        isValid = false;
        return;
    }//If ! validarTelefono


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

