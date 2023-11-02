const footer = document.querySelector("footer");

//Primer div
let divContainer = document.createElement("div");
divContainer.classList.add ("icons");
divContainer.classList.add ("container-fluid");
divContainer.classList.add ("col-sm-12");
divContainer.classList.add ("col-md-3");
divContainer.classList.add ("col-lg-3");
footer.append(divContainer);//contenedor fluido

//div icons

//icon whatsApp
let a1 = document.createElement("a");
a1.href="#";
divContainer.append(a1);

let i1 = document.createElement("i");
i1.classList.add("bi");
i1.classList.add("bi-whatsapp");
a1.append(i1);

//icon facebook
let a2 = document.createElement("a");
a2.href="#";
divContainer.append(a2);

let i2 = document.createElement("i");
i2.classList.add("bi");
i2.classList.add("bi-facebook");
a2.append(i2);

//icon IG
let a3 = document.createElement("a");
a3.href="#";
divContainer.append(a3);

let i3 = document.createElement("i");
i3.classList.add("bi");
i3.classList.add("bi-instagram");
a3.append(i3);


//segundo div
let divFAQ = document.createElement("div");
divFAQ.classList.add ("FAQ");
divFAQ.classList.add ("container-fluid");
divFAQ.classList.add ("col-sm-12");
divFAQ.classList.add ("col-md-6");
divFAQ.classList.add ("col-lg-6");
footer.append(divFAQ);//contenedor fluido

//div FAQ
//Contáctanos
let a4 = document.createElement("a");
a4.class= "footer";
// a4.class ="footer";
a4.href="./contacto.html";
a4.innerText = "Contáctanos";
divFAQ.append(a4);

//FAQs
let a5 = document.createElement("a");
a5.class ="footer";
a5.href="#";
a5.innerText = "FAQs";
divFAQ.append(a5);

//Avisos de privacidad
let a6 = document.createElement("a");
a6.class = "footer";
a6.href="#";
a6.innerText = "Avisos de privacidad";
divFAQ.append(a6);

//tercer div

let divGran = document.createElement("div");
divGran.classList.add ("gran");
divGran.classList.add ("container-fluid");
divGran.classList.add ("col-sm-12");
divGran.classList.add ("col-md-3");
divGran.classList.add ("col-lg-3");
footer.append(divGran);//contenedor fluido


let p = document.createElement("p");
p.classList.add("granBazar");
p.classList.add("text-end");
p.innerText = "@2023 El Gran Bazar";
divGran.prepend(p);
