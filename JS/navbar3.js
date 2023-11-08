document.addEventListener('DOMContentLoaded', function () {
    // Verificar si el elemento con id 'navbar' existe
    var navbarElement = document.getElementById('navbar');
    if (navbarElement) {
        // Crear los elementos del navbar
        var header = document.createElement('header');
        var nav = document.createElement('nav');
        nav.className = 'navbar navbar-expand-md';
        nav.innerHTML = `
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
                            <li><a class="nav-link" href="./contacto.html">Categorias</a></li>
                </ul>
                <a class="nav-link" href="./login.html">Log in</a>
                <form class="d-flex justify-content-between" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </form>
                <span class="material-icons shopping">
                <a class="nav-link" href="./carrito.html">
                <i class="fa-solid fa-cart-shopping"></i></a>
                </span>
            </div>
        </div>
    </nav>
        `;
        
        // Agregar el elemento nav al header
        header.appendChild(nav);

        // Insertar el header antes del elemento con id 'navbar'
        navbarElement.insertAdjacentElement('beforebegin', header);

        // Remover el elemento original navbar ya que se reemplaza con el nuevo navbar
        navbarElement.remove();
    }
});