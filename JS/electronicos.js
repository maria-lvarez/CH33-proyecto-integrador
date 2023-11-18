let arJson = [
{'name':'Teléfono fijo', 'img':'./src/images/telefono.jpg', 'categoria':'Electrónico', 'price':'$400.00'},
{'name':'Cámara instantánea', 'img':'./src/images/camara.jpg', 'categoria':'Electrónico', 'price':'$550.00'},
{'name':'Tocadiscos', 'img':'./src/images/tocadiscos.jpg', 'categoria':'Electrónico', 'price':'$1100.00'}]

function addItem(arreglo){
    let contenedorCard = document.getElementById("contenedorCard");
    arreglo.forEach(item => {
        
    let card = '<div class="card" style="width: 18rem; border: none;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" style="object-fit:contain;width:100%; height:16rem;padding:1rem" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <hr>\n'+
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.categoria+'</p>\n' +
        '        <p class="card-text">'+item.price+'</p>\n' +
        '        </div>\n' +
        '        <div class="btn-group row g-2 p-3">\n'+
        '        <a id="btnCarritoCard" href="../../carrito.html"" class="btn"><strong>Añadir al carrito</strong></a>\n'+
        '        <a id="btnComprarCard" href="../../compra.html" class="btn"><strong>Comprar</strong></a>\n'+
        '        </div>\n'+
        '</div>\n' +
        '<br/>\n';
        contenedorCard.insertAdjacentHTML("beforeend",card);
    });//forEach
};

addItem(arJson);
