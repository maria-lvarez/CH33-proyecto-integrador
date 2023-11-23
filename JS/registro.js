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
personas = JSON.parse(localStorage.getItem("personas")) || [];

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
    
        return true
        
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops... ",
            text: "No se ha podido registrar, ¡Las contraseñas no coinciden!",
        });
        return false;
        
    }
    
}//validarPassword 


function validarTelefono(txtNumber){
    let validTel = /^(?!.*(\d)\1{4})\d{10}$/;
    if(validTel.test(txtNumber)){
        return true;
    }
    else {
        return false;
    }
}//ValidarTelefono



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
        //console.log("txtNombre false");
    }//txtNombre

    if(! validarCorreo(txtCorreo)){
        isValid = false;
        //console.log("txtCorreo false");
    }//If ! validarCategoria

    if(! validarPassword(txtPassword)){
        isValid = false;
        //console.log("txtPassword false");
    }//If ! validarEstado

    if(! validarPasswordConf(txtPassword, txtConfPassword)){
        isValid = false;
        //console.log("txtPasswordConf false");
    }//If ! validarCategoria

    if(! validarTelefono(txtTelefono)){
        isValid = false;
        //console.log("txtTelefono false");
    }//If ! validarTelefono
//console.log(isValid);
    //JSON
    if(isValid){ 
        //Si es valido el nombre y la cantidad los agregará a la tabla, si no, no los agregará
        //const correo = txtCorreo;
        //const password = txtPassword;

            let elemento = {
                name : txtNombre,
                telefono:  txtTelefono,
                correo: txtCorreo,
                password: txtPassword,
                confpass: txtConfPassword
            };

            let correoRepetido = personas.find(usuario => usuario.correo === txtCorreo)
            if (correoRepetido){
                //alert ("Usuario ya registrado");
                Swal.fire({
                    icon: "error",
                    title: "Oops... ",
                    text: "Usuario ya registrado!",
                    });
                
            } else {
                //Ir almacenando elementos a mi array > Hace que una cadena de texto se vuelva un object
                personas.push((elemento));
                
                localStorage.setItem("personas", JSON.stringify(personas));
                Swal.fire({
                    //position: "top-end",
                    icon: "success",
                    title: "Registro exitoso",
                    showConfirmButton: false,
                    timer: 1500
                });
            }//correoRepetido
            
        
    } //isValid

});//btnEnviar.addEventListener
        

        
        



