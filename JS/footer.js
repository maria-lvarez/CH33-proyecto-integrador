let footer=document.getElementById("footer-bazar");

//Primer ul
let ul1 = document.createElement("ul");
ul1.classList.add ("nav");
ul1.classList.add ("col-xs-12");
ul1.classList.add ("col-sm-12");
ul1.classList.add ("col-md-4");
ul1.classList.add ("col-lg-3");
ul1.classList.add ("d-flex");
ul1.classList.add ("justify-content-center");
ul1.classList.add ("align-items-center");
footer.append(ul1);

//icons

let li30 = document.createElement("li");
ul1.append(li30);

//icon whatsApp
let a4 = document.createElement("a");
a4.href="#";
li30.append(a4);

let i1 = document.createElement("i");
i1.classList.add("bi");
i1.classList.add("bi-whatsapp");
i1.classList.add("icon-footer");
a4.append(i1);

//icon facebook

let li31 = document.createElement("li");
ul1.append(li31);

let a5 = document.createElement("a");
a5.href="#";
li31.append(a5);

let i2 = document.createElement("i");
i2.classList.add("bi");
i2.classList.add("bi-facebook");
i2.classList.add("icon-footer");
a5.append(i2);

//icon IG
let li32 = document.createElement("li");
ul1.append(li32);

let a6 = document.createElement("a");
a6.href="https://www.instagram.com/granbazar/";
li32.append(a6);

let i3 = document.createElement("i");
i3.classList.add("bi");
i3.classList.add("bi-instagram");
i3.classList.add("icon-footer");
a6.append(i3);


//segundo ul
let ul2 = document.createElement("ul");
ul2.classList.add ("nav");
ul2.classList.add ("col-xs-12");
ul2.classList.add ("col-sm-12");
ul2.classList.add ("col-md-5");
ul2.classList.add ("col-lg-6");
ul2.classList.add ("d-flex");
ul2.classList.add ("justify-content-around");
ul2.classList.add ("align-items-center");
footer.append(ul2);

//Contáctanos
let li33 = document.createElement("li");
ul2.append(li33);

let a7 = document.createElement("a");
a7.classList.add("words-footer"); //a7.class = "words-footer;"
a7.href="contacto.html";
a7.innerText = "Contáctanos";
li33.append(a7);

//FAQ
let li34 = document.createElement("li");
ul2.append(li34);

let a8 = document.createElement("a");
a8.classList.add("words-footer");//a8.class ="words-footer";
a8.href="FAQ.html";
a8.innerText = "FAQ";
li34.append(a8);

//Avisos de privacidad
let li35 = document.createElement("li");
ul2.append(li35);

let a9 = document.createElement("a");
a9.classList.add("words-footer");//a9.class = "words-footer";
a9.href="avisoprivacidad.html";
a9.innerText = "Avisos de privacidad";
li35.append(a9);

//@2023 El Gran Bazar
let p = document.createElement("p");
p.id="granBazar";
p.classList.add("col-xs-12");
p.classList.add ("col-sm-12");
p.classList.add ("col-md-3");
p.classList.add ("col-lg-3");
p.classList.add ("d-flex");
p.classList.add ("justify-content-center");
p.classList.add ("align-items-end");
p.innerText = "@2023 El Gran Bazar";
footer.append(p);
