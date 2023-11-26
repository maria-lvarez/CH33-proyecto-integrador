let elementos = JSON.parse(localStorage.getItem('datos')) || [];
  
if(elementos.length > 0) {
    let card = "";

    elementos.forEach((elemento) => {
        
    card += '<div class="card" style="width: 18rem; border: none;">\n' +
    '    <img src="'+elemento.img +'" class="card-img-top" style="object-fit:contain;width:100%; height:16rem;padding:1rem" alt="image">\n' +
    '    <div class="card-body">' +
    '        <hr>'+
    '        <h5 class="card-title">'+elemento.name+'</h5>\n' +
    '        <p class="card-text">'+elemento.categoria+'</p>\n' +
    '        <p class="card-text">'+'$'+elemento.precio+'</p>\n' +
    '        </div>' +
    '        <div class="btn-group row g-2 p-3">'+
    '        <a id="btnCarritoCard" href="#" class="btn"><strong>Añadir al carrito</strong></a>\n'+
    '        <a id="btnComprarCard" href="#" class="btn"><strong>Comprar</strong></a>\n'+
    '        </div>'+
    '</div>' +
    '<br/>';
});//forEach

  document.getElementById('cardsFormRecien').innerHTML = card;
} else {

  document.getElementById('cardsFormRecien').innerHTML = 'No hay información para mostrar.';
}