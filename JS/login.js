let btnIniciarSesion = document.getElementById("btnIniciarSesion");

btnIniciarSesion.addEventListener("click", function (event) {

        event.preventDefault();

        const emailInput = document.getElementById('inputEmaillogin').value;
        const passwordInput = document.getElementById('inputPasswordlogin').value;

        let usuarios = JSON.parse(localStorage.getItem('personas')) || [];//array del local storage
         //console.log(usuarios);
        //function logIn(){

        usuarios.forEach(e => { 
            
            if((e.correo === emailInput) && (e.password === passwordInput)){

                Swal.fire({
                    //position: "top-end",
                    icon: "success",
                    title: `Bienvenid@ ${e.name}`,
                    showConfirmButton: false,
                    timer: 1500
                });

            
                window.location.href = 'index.html';//Redirige a Home, Si comentan esta redirección pueden observar la Swwet alert, si no es imperceptibe y envía de una a Home.
                

            }else{
                //alertValidaciones.innerHTML = "El usuario no existe o las credenciales son incorrectas.<br/>";
                //alertValidaciones.style.display = "block";
                Swal.fire({
                    icon: "error",
                    title: "Oops... ",
                    text: "¡El usuario no existe o las credenciales son incorrectas!, intenta nuevamente",
                });
            }
            
        })//forEach
        
        if (usuarios.length <= 0){
            //alertValidaciones.innerHTML = "El usuario no existe o las credenciales son incorrectas.<br/>";
            //alertValidaciones.style.display = "block";
            Swal.fire({
                icon: "error",
                title: "Oops... ",
                text: "¡El usuario no existe o las credenciales son incorrectas!, intenta nuevamente",
            });
        }

});