let arJson = [
    {'name':'Entre los rotos - Alaide Ventura', 'img':'./src/images/libro.jpg', 'categoria':'Entretenimiento', 'price':'$150.00'},
    {'name':'Teléfono antiguo', 'img':'./src/images/telefonoJuguete.jpg', 'categoria':'Entretenimiento', 'price':'$100.00'},
    {'name':'Bohemian Rhapsody - Queen', 'img':'./src/images/lp.jpg', 'categoria':'Entretenimiento', 'price':'$600.00'}
    ]
    
    function addItem(arreglo){
        let contenedorCard = document.getElementById("contenedorCardEntretenimiento");
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
    
    
    
    
    
    //Nuevas cards en Entretenimiento
    let elementos = JSON.parse(localStorage.getItem('datos')) || [];
    //console.log(elementos)
    
        if(elementos.length > 0) {
        
    
        let contenedorCardEntretenimiento = document.getElementById("contenedorCardEntretenimiento");
    
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
    
    
            if(item.categoria == "Entretenimiento"){ //nombre traído del option value para entretenimiento en el formulario vendedores de HTML
            contenedorCardEntretenimiento.insertAdjacentHTML("beforeend",card);
            } 
        });//forEach
    
    }//if
    