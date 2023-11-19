/*const loginForm = document.querySelector("#formLogin")
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.getElementById("inputEmaillogin").value
    const password = document.getElementById("inputPasswordlogin").value
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    const validUser = usuarios.find(usuario => usuario.correo === email && usuario.contraseña === password)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem("login_success", JSON.stringify(validUser))
    window.location.href = "index.html"   

})
*/



