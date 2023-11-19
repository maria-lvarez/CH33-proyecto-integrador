/*let txtName = document.getElementById("InputNombreComp");
let txtCorreo = document.getElementById("InputCorreo");
let txtTelefono = document.getElementById("InputTelReg");
let txtContraseña = document.getElementById("InputPasswordReg");
let confirmPassword = document.getElementById("InputPasswordConf");
let mensajecont = document.getElementById("mensajecontr");
let btnCrearCuenta = document.getElementById("btnCrearCuenta");

let usuarios=[]
 usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


function validarContraseña() {
    if(txtContraseña.value === confirmPassword.value){
        return true
    }else{
        return false
    }
}


const forms= document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
  Array.from(forms).forEach(form=>{ form.addEventListener('submit',event=>{      
      if(!form.checkValidity()){        event.preventDefault();        event.stopPropagation()      }
        form.classList.add('was-validated')    },false)  
// btnCrearCuenta.addEventListener("click", function(event) {
//event.preventDefault();

    txtName.style = "";
    txtCorreo.style = "";
    txtTelefono.style = "";
    txtContraseña.style = "";
    confirmPassword.style = "";
    mensajecont.style = "";

    if ( validarContraseña()) {
        // Creación de objeto usuario y añadir al array
        let persona = {
            name: txtName.value,
            correo: txtCorreo.value,
            teléfono: txtTelefono.value,
            contraseña: txtContraseña.value,
        };
        usuarios.push(persona);

        if (usuarios.length > 0) {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        
    }
       
     else {
       
        if (!validarContraseña()) {
            mensajecont.innerHTML = "Las contraseñas no coinciden";
        }
       
    }
    
}});

console.log ()*/