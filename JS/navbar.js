let nav = document.getElementsByTagName("nav").item(0);

//div container
let divContainer1 = document.createElement("div");
divContainer1.className = "container-fluid";
nav.prepend(divContainer1);

//button
divContainer1.insertAdjacentHTML("afterbegin", `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>`);

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



//li1
let li1 = document.createElement("li");
ul1.append(li1);
//a1
let a1 = document.createElement("a");
a1.className = "nav-link";
a1.href="#";
a1.innerText = "Home";
li1.prepend(a1);


//li2
let li2 = document.createElement("li");
ul1.append(li2);
//a2
let a2 = document.createElement("a");
a2.className = "nav-link";
a2.href="./nosotras.html";
a2.innerText = "Nosotros";
li2.prepend(a2);

//li3
let li3 = document.createElement("li");
ul1.append(li3);
//a3
let a3 = document.createElement("a");
a3.className = "nav-link";
a3.href = "./contacto.html";
a3.innerText = "Contacto";
li3.prepend(a3);

//div2 img
divContainer1.insertAdjacentHTML("beforeend",` <div class="container-fluid d-flex justify-content-center">
<img src="/src/images/LogoSinFondo1.png" alt="" width="362px" height="150px">
</div>`);

//a
/* let a1 = document.createElement("a");
a1.className = "nav-link";
a1.href = "#";
a1.innerText = "Log in";
divContainer.append(ul1); */
/*divContainer.insertAdjacentHTML("beforeend", `<a class="nav-link1" href="#">Log in</a>
`);*/

//form
divContainer1.insertAdjacentHTML("beforeend",`
<ul class="list-group list-group-horizontal  d-flex align-items-center">
  <li class="list-group-item border-light"><a class="nav-link1" href="#">Log in</a></li>

  <li class="list-group-item border-light"><form class="d-flex" role="search">
  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
  <i class="bi bi-search" id="busqueda"></i>                
  </form></li>

  <li class="list-group-item border-light">        <span class="material-icons shopping">
        <i class="bi bi-cart-fill" id="carrito"></i>
        </span>
        </li>
</ul>
</div>`);

//span
/*divContainer.insertAdjacentHTML("beforeend",` <span class="material-icons shopping">
<i class="bi bi-cart-fill"></i>
</span> `);*/