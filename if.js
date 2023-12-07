
let btnCrearcuenta = document.getElementById("btnCrearCuenta");
let btnClear = document.getElementById("btnClear");


//Arreglo que va a almacena los elementos de mi tabla


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


// Fetch user data from the API
let promesa = fetch("http://localhost:8080/api/usuarios/", { method: 'GET' });

promesa
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(users => {
        personas = users; // Assuming the users array contains user data
    })
    .catch(error => {
        console.error('Error:', error);
        alertError("Ocurrió un problema en la solicitud para obtener usuarios");
    });



btnCrearCuenta.addEventListener("click", function(event){
    event.preventDefault();

    const form = document.getElementById('formReg');
    form.classList.add('was-validated');

    const txtNombre = document.getElementById("InputNombreComp").value;
    const txtCorreo = document.getElementById("InputCorreo").value;
    const txtTelefono = document.getElementById("InputTelReg").value;
    const txtPassword = document.getElementById("InputPasswordReg").value;
    const txtConfPassword = document.getElementById("InputPasswordConf").value;

    let isValid = true;

    if (txtNombre.length < 2) {
        isValid = false;
        alertError("Nombre demasiado corto");
    }

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
    
  if (isValid) {
        let correoRepetido = personas.find(usuario => usuario.correo === txtCorreo);

        if (correoRepetido) {
            alertError("Usuario ya registrado");
        } else {
            // Assuming you want to add the new user to the personas array
            let nuevoUsuario = {
               
                email: txtCorreo,
                password: txtPassword,
               
            };

            // Assuming you want to update the API with the new user data
            fetch('http://localhost:8080/api/usuarios/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoUsuario),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    Swal.fire({
                        icon: "success",
                        title: "Registro exitoso",
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch(error => {
                    console.error('Error:', error);
                    alertError('Error al registrar el usuario en el servidor');
                });
        }
    }
});//btnEnviar.addEventListener