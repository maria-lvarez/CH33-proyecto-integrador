let txtName= document.getElementById("InputNombreComp");
let txtCorreo= document.getElementById("InputCorreo");
let txtTelefono= document.getElementById("InputTelReg");
let txtContraseña=document.getElementById("InputPasswordReg");
let confirmPassword = document.getElementById("InputPasswordConf")
let mensajecont= document.getElementById("mensajecontr")
let btnCrearCuenta= document.getElementById("btnCrearCuenta");

(()=>{  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms= document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
Array.from(forms).forEach(form=>{ form.addEventListener('submit',event=>{      
    if(!form.checkValidity()){        event.preventDefault();        event.stopPropagation()      }
      form.classList.add('was-validated')    },false)  })})()



btnCrearCuenta.addEventListener("click", function(event){
    let isValid = true;

    event.preventDefault();
    txtName.style = "";
    txtCorreo.style = "";
    txtTelefono.style = "";
    txtContraseña.style = "";
    confirmPassword.style = "";
    

    //JSON
    if(isValid){ //Si es valido el nombre y la cantidad los agregará a la tabla, si no, no los agregará


        let persona = {name : txtName.value,
        correo:  txtCorreo.value,
        teléfono: txtTelefono.value,
        contraseña: txtContraseña.value,
        };

        usuarios.push((persona));
    //Guardar mi arreglo en el local storage
    
    localStorage.setItem("usuarios", JSON.stringify(usuarios)); //Convierte los alementos de mi array en string

}})