/*
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})*/

let logArraySesion = JSON.parse(localStorage.getItem('logArray')) || [];

let logOut = document.getElementById("logout");

logOut.addEventListener("click", function(event){

    event.preventDefault();
    alert("LogOut")
    //let sesion = {status: "active"}
    logArraySesion["status"] = "unactive";
    /*Guardar mi arreglo en el local storage
    logArray.push(sesion);
    localStorage.setItem("logArray", JSON.stringify(logArray));
    console.log(logArray); */

});


