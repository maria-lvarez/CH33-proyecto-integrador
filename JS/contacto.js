/* let txtNombre = document.getElementById("exampleFormControlInput1");
let btnEnviar = document.getElementById("btnEnviar");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidaciones1 = document.getElementById("alertValidaciones1");
let txtEmail = document.getElementById("exampleFormControlInput2");
let txtNumber = document.getElementById("exampleFormControlInput3");
let txtMensaje = document.getElementById("exampleFormControlTextarea1");
let btnClear = document.getElementById("btnClear");

function validarTelefono(){
    let validTel = /^(?!.*(\d)\1{4})\d{10}$/;
    if(validTel.test(txtNumber.value)){
        return true;
    }
    else {
        return false;
    }
}//ValidarTelefono

function validarEmail() {
    let re = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return re.test(txtEmail.value);
}

function validarEnvio() {
    let isValid = true;

    if (txtNombre.value.length < 3) {
        alertValidaciones.innerHTML = "El campo <strong> Nombre </strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid thin red";
        isValid = false;
    }

    if (!validarTelefono()) {
        alertValidaciones.innerHTML += "El campo <strong>Teléfono</strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtNumber.style.border = "solid thin red";
        isValid = false;
    }

     /*if (!validarEmail()) {
        alertValidaciones.innerHTML += "El campo <strong>Email</strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtEmail.style.border = "solid thin red";
        isValid = false;
    }

    if (txtMensaje.value.length < 10) {
        alertValidaciones.innerHTML += "El campo <strong> Mensaje </strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtMensaje.style.border = "solid thin red";
        isValid = false;
    } */

 /*    return isValid;
}

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidaciones.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtNombre.style.border = "";
    txtEmail.style.border = "";
    txtNumber.style.border = "";
    txtMensaje.style.border = "";

    if (validarEnvio()) {
        var templateParams = {
            name: txtNombre.value,
            email: txtEmail.value,
            phone: txtNumber.value,
            message: txtMensaje.value
        };

        emailjs.send('service_1tkzfeo', 'template_k55hz2c', templateParams)
            .then(function (response) {
                // alertValidaciones1.innerHTML += "<strong>¡Mensaje Enviado!</strong> El mensaje ha sido enviado con éxito <br/>";
                // alertValidaciones1.style.display = "block";
                Swal.fire({
                    //position: "top-end",
                    icon: "success",
                    title: "Mensaje enviado correctamente!",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

        
    } else if (!validarEnvio()){
        // alertValidaciones.innerHTML += "<strong>ERROR:</strong> El mensaje no ha sido enviado, completa correctamente los campos. <br/>";
        // alertValidaciones.style.display = "block";
        Swal.fire({
            icon: "error",
            title: "Oops... ",
            text: "No se ha podido enviar el mensaje, ¡Intente nuevamente!",
            });
    }
    
    
});

btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidaciones.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtNombre.style.border = "";
    txtNumber.style.border = "";
    txtEmail.style.border = "";
    txtMensaje.style.border = "";

    txtNombre.value = "";
    txtNumber.value = "";
    txtEmail.value = "";
    txtMensaje.value = "";
});
 */
// txtNombre.value = "";
//         txtNumber.value = "";
//         txtEmail.value = "";
//         txtMensaje.value = ""; */

let txtNombre = document.getElementById("exampleFormControlInput1");
let btnEnviar = document.getElementById("btnEnviar");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidaciones1 = document.getElementById("alertValidaciones1");
let txtEmail = document.getElementById("exampleFormControlInput2");
let txtNumber = document.getElementById("exampleFormControlInput3");
let txtMensaje = document.getElementById("exampleFormControlTextarea1");
let btnClear = document.getElementById("btnClear");


function validarCantidad() {
    let validTel = /^(?!.*(\d)\1{4})\d{10}$/;
    if (txtNumber.value.length === 10 && validTel.test(txtNumber.value)) {
        return true;
    }
    if (parseFloat(txtNumber.value) <= 0) {
        return false;
    }
    return false;
}

function validarEmail() {
    let re = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return re.test(txtEmail.value);
}

function validarEnvio() {
    let isValid = true;

    if (txtNombre.value.length < 3) {
        alertValidaciones.innerHTML = "El campo <strong> Nombre </strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid thin red";
        isValid = false;
    }

    if (!validarCantidad()) {
        alertValidaciones.innerHTML += "El campo <strong>Teléfono</strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtNumber.style.border = "solid thin red";
        isValid = false;
    }

    if (!validarEmail()) {
        alertValidaciones.innerHTML += "El campo <strong>Email</strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtEmail.style.border = "solid thin red";
        isValid = false;
    }

    if (txtMensaje.value.length < 10) {
        alertValidaciones.innerHTML += "El campo <strong> Mensaje </strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtMensaje.style.border = "solid thin red";
        isValid = false;
    }

    return isValid;
}

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidaciones.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtNombre.style.border = "";
    txtEmail.style.border = "";
    txtNumber.style.border = "";
    txtMensaje.style.border = "";

    if (validarEnvio()) {
        var templateParams = {
            name: txtNombre.value,
            email: txtEmail.value,
            phone: txtNumber.value,
            message: txtMensaje.value
        };

        emailjs.send('service_1tkzfeo', 'template_k55hz2c', templateParams)
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje Enviado!',
                    text: 'El mensaje ha sido enviado con éxito'
                });
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

        txtNombre.value = "";
        txtNumber.value = "";
        txtEmail.value = "";
        txtMensaje.value = "";
    }  else {
        alertValidaciones.innerHTML += "<strong>ERROR:</strong> El mensaje no ha sido enviado, completa correctamente los campos. <br/>";
        alertValidaciones.style.display = "block";
    }
});

btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidaciones.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtNombre.style.border = "";
    txtNumber.style.border = "";
    txtEmail.style.border = "";
    txtMensaje.style.border = "";

    txtNombre.value = "";
    txtNumber.value = "";
    txtEmail.value = "";
    txtMensaje.value = "";
});