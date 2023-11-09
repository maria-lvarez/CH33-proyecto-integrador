let arJson = [{'name':'Entre los rotos - Alaide Ventura', 'img':'./src/images/libro.jpg', 'type':'Libro', 'price':'$150.00'},
{'name':'Teléfono antiguo', 'img':'./src/images/telefonoJuguete.jpg', 'type':'Juguete', 'price':'$100.00'},
{'name':'Bohemian Rhapsody - Queen', 'img':'./src/images/lp.jpg', 'type':'LP', 'price':'$600.00'},
{'name':'Tostador', 'img':'./src/images/tostador.jpg', 'type':'Vintage menta', 'price':'$520.00'},
{'name':'Máquina de café', 'img':'./src/images/maquinadecafe.jpg', 'type':'Retro rosa', 'price':'$1200.00'},
{'name':'Batidora', 'img':'./src/images/batidora.jpeg', 'type':'Oster blanca', 'price':'$350.00'},
{'name':'Teléfono fijo', 'img':'./src/images/telefono.jpg', 'type':'Retro azul', 'price':'$400.00'},
{'name':'Cámara instantánea', 'img':'./src/images/camara.jpg', 'type':'Retro lila', 'price':'$550.00'},
{'name':'Tocadiscos', 'img':'./src/images/tocadiscos.jpg', 'type':'Altavoces estéreo', 'price':'$1100.00'},
{'name':'Cárdigan', 'img':'./src/images/cardigan.jpg', 'type':'Tejido beige', 'price':'$310.00'},
{'name':'Pantalón de mezclilla', 'img':'./src/images/pantalon.jpg', 'type':'Azul estampado', 'price':'$400.00'},
{'name':'Portafolio', 'img':'./src/images/Maleta.jpg', 'type':'Cuero vegano', 'price':'$315.00'}]





function addItem(arreglo){
    let contenedorCard = document.getElementById("contenedorCard");
    arreglo.forEach(item => {
        
    let card = '<div class="card" style="width: 18rem; border: none;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" style="object-fit:contain;width:100%; height:16rem;padding:1rem" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <hr>\n'+
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.type+'</p>\n' +
        '        <p class="card-text">'+item.price+'</p>\n' +
        '        </div>\n' +
        '        <div class="btn-group row g-2 p-3">\n'+
        '        <a id="btnCarritoCard" href="#" class="btn"><strong>Añadir al carrito</strong></a>\n'+
        '        <a id="btnComprarCard" href="#" class="btn"><strong>Comprar</strong></a>\n'+
        '        </div>\n'+
        '</div>\n' +
        '<br/>\n';
        contenedorCard.insertAdjacentHTML("beforeend",card);
    });//forEach
};

addItem(arJson);