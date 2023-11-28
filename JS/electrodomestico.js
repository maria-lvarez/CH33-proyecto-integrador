let arJson = [
    {'name':'Tostador', 'img':'./src/images/tostador.jpg', 'categoria':'Electrodomésticos', 'price':'$520.00'},
    {'name':'Máquina de café', 'img':'./src/images/maquinadecafe.jpg', 'categoria':'Electrodomésticos', 'price':'$1200.00'},
    {'name':'Batidora', 'img':'./src/images/batidora.jpeg', 'categoria':'Electrodomésticos', 'price':'$350.00'}]
    
    function addItem(arreglo){
        let contenedorCard = document.getElementById("cardsFormElectrodomesticos");
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
    
    
    
    //Nuevas cards en Electrodomésticos 
    let elementos = JSON.parse(localStorage.getItem('datos')) || [];
    //console.log(elementos)
    
        if(elementos.length > 0) {
        
    
        let contenedorCardElectrodomesticos = document.getElementById("cardsFormElectrodomesticos");
    
        elementos.forEach(item => {
            
        let card = '<div class="card" style="width: 18rem; border: none;">\n' +
            '    <img src="'+item.img +'" class="card-img-top" style="object-fit:contain;width:100%; height:16rem;padding:1rem" alt="image">\n' +
            '    <div class="card-body">\n' +
            '        <hr>\n'+
            '        <h5 class="card-title">'+item.name+'</h5>\n' +
            '        <p class="card-text">'+item.categoria+'</p>\n' +
            '        <p class="card-text">'+'$ ' +item.precio+'</p>\n' +
            '        </div>\n' +
            '        <div class="btn-group row g-2 p-3">\n'+
            '        <a id="btnCarritoCard" href="../../carrito.html"" class="btn"><strong>Añadir al carrito</strong></a>\n'+
            '        <a id="btnComprarCard" href="../../compra.html" class="btn"><strong>Comprar</strong></a>\n'+
            '        </div>\n'+
            '</div>\n' +
            '<br/>\n';
    
    
            if(item.categoria == "Electrodomésticos"){
            contenedorCardElectrodomesticos.insertAdjacentHTML("beforeend",card);
            } 
        });//forEach
    
    }//if