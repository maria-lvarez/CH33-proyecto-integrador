document.addEventListener('DOMContentLoaded', function () {
    // Verificar si el elemento con id 'navbar' existe
    let navbarElement = document.getElementById('navbar');
    if (navbarElement) {
        // Crear los elementos del navbar
        let nav = document.createElement('nav');
        nav.className = 'navbar navbar-expand-lg';
        nav.innerHTML = `
          
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img class="img-fluid" src="./src/images/LogoSinFondo1.png" alt="" width="300"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul id="ul-nav" class="navbar-nav">
                            <li><a id="palabras" class="nav-link" href="./index.html">Home</a></li>
                            <li><a id="palabras" class="nav-link" aria-current="page" href="./nosotras.html">Nosotras</a></li>
                            <li><a id="palabras" class="nav-link" href="./contacto.html">Contacto</a></li>
                            <li><a id="palabras" class="nav-link" href="./categoria.html">Categorías</a></li>
                            <li><a id="palabras" class="nav-link" href="#">Log in</a></li>
                            <li> 
                            <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                            <button id="btn-lupita" class="btn btn-outline-success" type="submit">         
                            <i id ="lupita" class="bi bi-search"></i>
                            </button>
                            </form>    
                            </li>
                            <li><a id="carrito" class="nav-link" href="./carrito.html"><i id="carrito" class="bi bi-cart3"></i></li>
                </ul>
            </div>
        </div>
        `;
        
       

        // Insertar el header antes del elemento con id 'navbar'
        navbarElement.insertAdjacentElement('beforebegin', nav);

        // Remover el elemento original navbar ya que se reemplaza con el nuevo navbar
        navbarElement.remove();
    }
});