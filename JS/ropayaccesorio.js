let arJson = [
    {'name':'Cárdigan', 'img':'./src/images/cardigan.jpg', 'categoria':'Ropa y accesorios', 'price':'$310.00'},
    {'name':'Pantalón de mezclilla', 'img':'./src/images/pantalon.jpg', 'categoria':'Ropa y accesorios', 'price':'$400.00'},
    {'name':'Portafolio', 'img':'./src/images/Maleta.jpg', 'categoria':'Ropa y accesorios', 'price':'$315.00'}
    ]
    
    function addItem(arreglo){
        let contenedorCard = document.getElementById("contenedorCardRopa");
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
    
    
    
    //Nuevas cards en RopayAccesorios
    let elementos = JSON.parse(localStorage.getItem('datos')) || [];
    console.log(elementos)
    
        if(elementos.length > 0) {
        
    
        let contenedorCardRopa = document.getElementById("contenedorCardRopa");
    
    
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
    
            if(item.categoria == "Ropa y accesorios"){
            contenedorCardRopa.insertAdjacentHTML("beforeend",card);
            }
    
        });//forEach
    
    }//if

