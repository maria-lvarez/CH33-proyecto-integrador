document.addEventListener('DOMContentLoaded', function () {
    // Verificar si el elemento con id 'navbar' existe
    var navbarElement = document.getElementById('navbar');
    if (navbarElement) {
        // Crear los elementos del navbar
        var header = document.createElement('header');
        var nav = document.createElement('nav');
<<<<<<< HEAD
<<<<<<< HEAD
        nav.className.add = 'navbar navbar-expand-lg';
        nav.innerHTML = `
            <div class="container-fluid" id="container-nav">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li><a class="nav-link" href="#">Home</a></li>
                        <li><a class="nav-link" aria-current="page" href="./nosotras.html">Nosotros</a></li>
                        <li><a class="nav-link" href="./contacto.html">Contacto</a></li>
                    </ul>
                </div>
=======
        nav.className = 'navbar navbar-expand-md';
        nav.innerHTML = `
=======
        nav.className = 'navbar navbar-expand-md';
        nav.innerHTML = `
>>>>>>> 6f48d01e947c852115eb4b3fcbcab5361851ed21
           <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img class="img-fluid" src="./src/images/LogoSinFondo1.png" alt="" width="300"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li><a class="nav-link" href="./index.html">Home</a></li>
                            <li><a class="nav-link" aria-current="page" href="./nosotras.html">Nosotros</a></li>
                            <li><a class="nav-link" href="./contacto.html">Contacto</a></li>
                            <li><a class="nav-link" href="./entretenimiento.html">Categorias</a></li>
                </ul>
                <a class="nav-link" href="./login.html">Log in</a>
                <form class="d-flex justify-content-between" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <i class="bi bi-search"></i>
                </form>
                <span class="material-icons shopping">
                    <i class="bi bi-cart3"></i>
                </span>
            </div>
        </div>
    </nav>
<<<<<<< HEAD
>>>>>>> 6f48d01e947c852115eb4b3fcbcab5361851ed21
=======
>>>>>>> 6f48d01e947c852115eb4b3fcbcab5361851ed21
        `;
//div collapse navbar
let div1 = document.createElement("div");
div1.classList.add("collapse");
div1.classList.add("navbar-collapse");
div1.id = "navbarTogglerDemo01";
divContainer1.insertAdjacentElement("beforeend",div1);

//ul
let ul1 = document.createElement("ul");
ul1.classList.add("navbar-nav");
ul1.classList.add("d-flex");
ul1.classList.add("justify-content-center");
ul1.classList.add("align-items-center");
div1.prepend(ul1);


        //div2 img
       divContainer1.insertAdjacentHTML("beforeend",` <div class="container-fluid d-flex justify-content-center">
    <img src="/src/images/LogoSinFondo1.png" alt="" width="362px" height="150px">
    </div>`);

        divContainer1.insertAdjacentHTML("beforeend",`
<ul class="list-group list-group-horizontal  d-flex align-items-center">
  <li class="list-group-item border-light"><a class="nav-link1" href="#">Log in</a></li>

  <li class="list-group-item border-light"><form class="d-flex" role="search">
  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
  <i class="bi bi-search" id="busqueda"></i>                
  </form></li>

  <li class="list-group-item border-light">        <span class="material-icons shopping">
        <i class="bi bi-cart-fill"  id="carrito"></i>
        </span>
        </li>
</ul>
</div>`);

        // Agregar el elemento nav al header
        header.appendChild(nav);

        // Insertar el header antes del elemento con id 'navbar'
        navbarElement.insertAdjacentElement('beforebegin', header);

        // Remover el elemento original navbar ya que se reemplaza con el nuevo navbar
        navbarElement.remove();
    }
});