// Pueden cambiar sin problema estos let por const, si en algun punto sin querer quieren reasignar el valor o cambiarlo es mas probable que lo detecten con el const que con let
// despues de cada getElementById hagan un console.log del value a 
// let txtName = document.getElementById("InputNombreComp").value;
// let txtCorreo = document.getElementById("InputCorreo").value;
// let txtTelefono = document.getElementById("InputTelReg").value;
// let txtContraseña = document.getElementById("InputPasswordReg").value;
// let confirmPassword = document.getElementById("InputPasswordConf").value;
// let mensajecont = document.getElementById("mensajecontr");
// let btnCrearCuenta = document.getElementById("btnCrearCuenta");
// let validFeedback = document.getElementsByClassName("valid-feedback");

// Igual aqui -> const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let form= document.getElementById("form")
let usuarios=[]
usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


function validarContraseña(pass, passConfirm) {
    if(pass === passConfirm){
        return true
    }else{
        return false
    }

    // Esto lo pueden refactorizar asi
    // return txtContraseña.value === confirmPassword.value
}

// Aqui pueden cambiarlo por document.getElementsByClassName('.needs-validation)
// el query selector es mejor usarlo cuando por ejemplo una misma clase, digamos 'validation-error' se la estas aplicando tanto
// a etiquetas p como div como h5 por ejemplo o por decir algo entonces usas query selector para seleccionar solo las etiquetas div con esa clase
// document.querySelectorAll('div.validation-error') pero si quieren escoger todos los elementos con esa clase sin importar que etiquetas son
// es mejor usar document.getElementsByClassName() que ya devuelve un array, el querySelectorAll devuelve una lista de nodos que puede ser mas confusa de manejar.
const forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener(
        'submit',
        event => {      
            event.preventDefault();        
            event.stopPropagation();
            console.group('Valores!!!!!*******');
            let txtName = document.getElementById("InputNombreComp").value;
            console.log(txtName);
            let txtCorreo = document.getElementById("InputCorreo").value;
            console.log(txtCorreo);
            let txtTelefono = document.getElementById("InputTelReg").value;
            console.log(txtTelefono);
            let txtPass = document.getElementById("InputPasswordReg").value;
            console.log(txtPass);
            let confirmPassword = document.getElementById("InputPasswordConf").value;
            console.log(confirmPassword);
            console.groupEnd()

            let mensajecont = document.getElementById("mensajecontr");
            let btnCrearCuenta = document.getElementById("btnCrearCuenta");
            let validFeedback = document.getElementsByClassName("valid-feedback");      
            // if(!form.checkValidity()){        
                form.classList.add('was-validated')    
            // }
            const goodPasswd = validarContraseña(txtPass, confirmPassword);
            if (goodPasswd) {
                // Creación de objeto usuario y añadir al array
                let persona = {
                    name: txtName,
                    correo: txtCorreo,
                    teléfono: txtTelefono,
                    contraseña: txtPass,
                };
                usuarios.push(persona);
        
                if (usuarios.length > 0) {
                    localStorage.setItem("usuarios", JSON.stringify(usuarios));
                }else{
                    if (!goodPasswd) {
                        mensajecont.innerHTML = "Las contraseñas no coinciden";
                    }
                }    
            }
        
            // window.location.href = "login.html" 
        },
        false
       
    ) 
    
    // window.location.href = "login.html";
    // btnCrearCuenta.addEventListener("click", function(event) {
    //event.preventDefault();

    // txtName.style = "";
    // txtCorreo.style = "";
    // txtTelefono.style = "";
    // txtContraseña.style = "";
    // confirmPassword.style = "";
    // mensajecont.style = "";

    // if (validarContraseña()) {
    //     // Creación de objeto usuario y añadir al array
    //     let persona = {
    //         name: txtName,
    //         correo: txtCorreo,
    //         teléfono: txtTelefono,
    //         contraseña: txtContraseña,
    //     };
    //     usuarios.push(persona);

    //     if (usuarios.length > 0) {
    //         localStorage.setItem("usuarios", JSON.stringify(usuarios));
    //     }else{
    //         if (!validarContraseña()) {
    //             mensajecont.innerHTML = "Las contraseñas no coinciden";
    //         }
    //     }    
    // }
});

//Alert