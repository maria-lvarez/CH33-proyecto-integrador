let footer=document.getElementById("footer");

//Primer div
let divContainer2 = document.createElement("div");
divContainer2.classList.add ("icons");
divContainer2.classList.add ("container-fluid");
divContainer2.classList.add ("col-sm-12");
divContainer2.classList.add ("col-md-3");
divContainer2.classList.add ("col-lg-3");
footer.append(divContainer2);//contenedor fluido

//div icons

//icon whatsApp
let a4 = document.createElement("a");
a4.href="#";
divContainer2.append(a1);

let i1 = document.createElement("i");
i1.classList.add("bi");
i1.classList.add("bi-whatsapp");
a4.append(i1);

//icon facebook
let a5 = document.createElement("a");
a5.href="#";
divContainer2.append(a2);

let i2 = document.createElement("i");
i2.classList.add("bi");
i2.classList.add("bi-facebook");
a5.append(i2);

//icon IG
let a6 = document.createElement("a");
a6.href="#";
divContainer2.append(a6);

let i3 = document.createElement("i");
i3.classList.add("bi");
i3.classList.add("bi-instagram");
a6.append(i3);


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
let a7 = document.createElement("a");
a7.class= "footer";
// a4.class ="footer";
a7.href="./contacto.html";
a7.innerText = "Contáctanos";
divFAQ.append(a7);

//FAQs
let a8 = document.createElement("a");
a8.class ="footer";
a8.href="#";
a8.innerText = "FAQs";
divFAQ.append(a8);

//Avisos de privacidad
let a9 = document.createElement("a");
a9.class = "footer";
a9.href="#";
a9.innerText = "Avisos de privacidad";
divFAQ.append(a9);

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
