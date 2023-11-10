let txtProducto = document.getElementById("inputFormProducto");
let txtCategoria = document.getElementById("inputFormCategoria");
let txtEstado = document.getElementById("inputFormEstado");
let txtDescripcion = document.getElementById("inputFormDescripcion");
let txtPrecio = document.getElementById("inputFormPrecio");
let txtTel = document.getElementById("inputFormTel");
let txtDireccion = document.getElementById("inputFormDireccion");
let txtCP = document.getElementById("inputFormCP");
let txtEnvio= document.getElementById("inputFormEnvio");


let btnEnviarForm = document.getElementById("btn-enviar-form");

let terminos1 = document.getElementById("terminos1");
let terminos2 = document.getElementById("terminos2");

let alertValidaciones = document.getElementById("alertValidaciones");

let cardsForm = document.getElementById("cardsForm");



//Arreglo que va a almacena los elementos de mi tabla
let datos = []; 

function validarCategoria(){

    if (txtCategoria.value) {
        return true
    }else{
        return false;
    }
}//validarCategoria 



function validarEstado(){
    if (txtEstado.value) {
        return true
    }else{
        return false;
    }
}//validarEstado

function validarEnvio(){

    if (txtEnvio.value) {
        return true
    }else{
        return false;
    }
}//validarCategoria 


function validarPrecio(){
    if(txtPrecio.value.length ==0){
        return false;
    }//if length

    if(isNaN(txtPrecio.value)){
        return false;
    }//isNaN

    if(parseFloat(txtPrecio.value)<=0){
        return false;
    }//parseFloat

    return true;
}//ValidarPrecio

function validarTelefono(){
    if(txtTel.value.length ===10){
        return true;
    }
    else {
        return false;
    }
}//ValidarCantidad


function validarCP() { 
    let re = /^[0-9]{5}$/;
   if (re.test(txtCP.value)){
       return true;
   }
   else {
       return false;
   }
}//validarCP

function validarTerminos1(){
    if (terminos1.checked) {
        return true
    }else{
        return false;
    }
}//validarTerminos1

function validarTerminos2(){
    if (terminos2.checked) {
        return true
    }else{
        return false;
    }
}//validarTerminos2



btnEnviarForm.addEventListener("click", function(event){

    let isValid = true;

    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtProducto.style = "";
    txtCategoria.style = "";
    txtEstado.style = "";
    txtDescripcion.style = "";
    txtPrecio.style = "";
    txtTel.style = "";
    txtDireccion.style = "";
    txtCP.style = "";
    txtEnvio.style = "";
    terminos1.style = "";
    terminos2.style = "";


    if(txtProducto.value.length < 3){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        alertValidaciones.innerHTML="El campo <strong> producto </strong> es requerido <br/> ";
        alertValidaciones.style.display="block"; //block o inline para que lo muestre
        txtProducto.style.border = "solid thin red";//Si el campo marca un error se marcará el borde en rojo
        isValid = false;
    }//txtProducto<3


    if(! validarCategoria()){
        alertValidaciones.innerHTML+="El campo <strong> categoría </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtCategoria.style.border="solid thin red";
        isValid = false;
    }//If ! validarCategoria


    if(! validarEstado()){
        alertValidaciones.innerHTML+="El campo <strong> estado </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtEstado.style.border="solid thin red";
        isValid = false;
    }//If ! validarEstado


    if(! validarEnvio()){
        alertValidaciones.innerHTML+="El campo <strong> envío </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtEnvio.style.border="solid thin red";
        isValid = false;
    }//If ! validarCategoria

    if(txtDescripcion.value.length < 10){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        alertValidaciones.innerHTML+="El campo <strong> descripción </strong> es requerido <br/> ";
        alertValidaciones.style.display="block"; //block o inline para que lo muestre
        txtDescripcion.style.border = "solid thin red";//Si el campo marca un error se marcará el borde en rojo
        isValid = false;
    }//validar Descripción

    if(! validarPrecio()){
        alertValidaciones.innerHTML +="El campo <strong> precio </strong> es requerido <br/> ";
        alertValidaciones.style.display="block";
        txtPrecio.style.border = "solid thin red";
        isValid = false;
    }//if ! validarCanrtidad

    if(! validarTelefono()){
        alertValidaciones.innerHTML+="El campo <strong>teléfono</strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtTel.style.border="solid thin red";
        isValid = false;
    }//If ! validarTelefono

    if(txtDireccion.value.length < 10){ //Debo de indicar que quiero su value. Si la palabra tiene menos de 3 letras.
        alertValidaciones.innerHTML+="El campo <strong> dirección </strong> es requerido <br/> ";
        alertValidaciones.style.display="block"; //block o inline para que lo muestre
        txtDireccion.style.border = "solid thin red";//Si el campo marca un error se marcará el borde en rojo
        isValid = false;
    }//validar Dirección


    if(! validarCP()){
        alertValidaciones.innerHTML+="El campo <strong> código postal </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        txtCP.style.border="solid thin red";
        isValid = false;
    }//If ! validarCP

    if(! validarTerminos1()){
        alertValidaciones.innerHTML+="El campo <strong> Acepto los terminos y condiciones </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        terminos1.style.border="solid thin red";
        isValid = false;
    }//If ! validarterminos1


    if(! validarTerminos2()){
        alertValidaciones.innerHTML+="El campo <strong> Acepto los terminos de selección de productos </strong> es requerido <br/>";
        alertValidaciones.style.display="block";
        terminos2.style.border="solid thin red";
        isValid = false;
    }//If ! validarterminos1


    //JSON

    if(isValid){ //Si es valido el nombre y la cantidad los agregará a la tabla, si no, no los agregará


        let elemento = `{"name" : "${txtProducto.value}",
                            "categoria" : "${txtCategoria.value}",
                            "price" : "${txtPrecio}"
                        }`;


            //Ir almacenando elementos a mi array > Hace que una cadena de texto se vuelva un object
            datos.push(JSON.parse(elemento));
            //Guardar mi arreglo en el local storage
            localStorage.setItem("datos", JSON.stringify(datos)); //Convierte los alementos de mi array en string


        //Para crear un elemento



      /*  
        const products = [
            { id: 1, name: 'Batidora 5 Vel', price: 600.00, image: 'src/images/batidora.jpeg' },
            { id: 2, name: 'Ajedrez clasico', price: 800.00, image: 'src/images/ajedrez.jpeg'},
            { id: 3, name: 'Tostadora vintage', price: 500.00, image: 'src/images/electrodomesticos.jpg'},
            
        ];

        function addToCart(name, img, categoria, price) {
            const product = products.find(p => p.id === productId);
            if (product) {
                const cartItem = cart.find(item => item.id === productId);
                if (cartItem) {
                    cartItem.quantity += quantity;
                } else {
                    cart.push({ ...product, quantity });
                }
            }
            renderCart();
        }

        function renderCart() {
            const cartTableBody = document.getElementById('cart-table').querySelector('tbody');
            cartTableBody.innerHTML = ''; 
            let total = 0;
            cart.forEach(item => {
                const totalPrice = item.price * item.quantity;
                total += totalPrice;
                cartTableBody.innerHTML += `
                    <tr>
                        <td><img src="${item.image}" class="product-image" alt="${item.name}" /></br> ${item.name}</td>
                        <td>$${item.price.toFixed(2)} MXN</td>
                        <td>${item.quantity}</td>
                        <td>$${totalPrice.toFixed(2)} MXN</td>
                        <td>
                            <button class="btn btn-sm" onclick="removeFromCart(${item.id})">
                            <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });
            document.getElementById('cart-total').innerText = `$${total.toFixed(2)} MXN`;
        }*/
    } //isValid
});//btnEnviar.addEventListener