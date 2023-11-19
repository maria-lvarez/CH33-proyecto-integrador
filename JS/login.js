document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formLogin');
    const alertValidaciones = document.getElementById('alertValidaciones');

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const email = document.getElementById('inputEmaillogin').value;
        const password = document.getElementById('inputPasswordlogin').value;

        if (!email || !password) {
            alertValidaciones.innerHTML = "Por favor, ingresa tu correo electrónico y contraseña.<br/>";
            alertValidaciones.style.display = "block";
            return;
        }

        if (validarCredenciales(email, password)) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            window.location.href = 'index.html';
        } else {
            alertValidaciones.innerHTML = "El usuario no existe o las credenciales son incorrectas.<br/>";
            alertValidaciones.style.display = "block";
        }
        form.classList.add('was-validated');
    });
});

function validarCredenciales(email, password) {
    let usuarios = JSON.parse(localStorage.getItem('datos')) || [];
    return usuarios.some(usuario => usuario.correo === email && usuario.password === password);
}

function obtenerUsuario() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (!email || !password) {
        return null;
    }

    return { email, password };
}

const usuario = obtenerUsuario();
if (usuario) {
    console.log('Usuario obtenido:', usuario.email);
} else {
    console.log('No hay datos de usuario guardados.');
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()