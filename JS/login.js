const forms = document.querySelectorAll('.needs-validation')
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formLogin');

    
    form.addEventListener('submit', function(event) {
        form.classList.add('was-validated') 
        event.preventDefault();

        const email = document.getElementById('inputEmaillogin').value;
        const password = document.getElementById('inputPasswordlogin').value;

        if (!email || !password) {
            alertValidaciones.innerHTML+="Por favor, ingresa tu correo electrónico y contraseña.<br/>";
            alertValidaciones.style.display="block"; 
            return;
        }

        if (validarCredenciales(email, password)) {
            window.location.href = 'index.html';
        } 

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

    });
});


function obtenerUsuario() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (!email || !password) {
        return null;
    }

    return { email, password };
}

function validarCredenciales(email, password) {
    let usuarios = JSON.parse(localStorage.getItem('datos')) || [];
    return usuarios.some(usuario => usuario.correo === email && usuario.password === password);
}

const usuario = obtenerUsuario();
if (usuario) {
    console.log('Usuario obtenido:', usuario.email);
} else {
    console.log('No hay datos de usuario guardados.');
}
