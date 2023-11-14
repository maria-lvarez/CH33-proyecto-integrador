let cart = [];

const products = [
    /*{ id: 1, name: 'Batidora 5 Vel', price: 600.00, image: 'src/images/batidora.jpeg' },
    { id: 2, name: 'Ajedrez clasico', price: 800.00, image: 'src/images/ajedrez.jpeg' },
    { id: 3, name: 'Camara instantanea retro', price: 500.00, image: 'src/images/camara.jpg' },*/
    {id: 1, name: 'Bohemian Rhapsody', price: 600.00, image: 'src/images/lP.jpg' }
    

];

function addToCart(productId, quantity) {
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

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
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
}

function continueShopping() {
    window.location.href = "entretenimiento.html";

}

function applyPromoCode() {
    const promoCode = document.getElementById('codigoPromocional').value;

    document.getElementById('coupon-info').innerText = 'Descuento aplicado!';
}

function finalizePurchase() {

    alert('Compra finalizada!');
}

addToCart(1, 2);
addToCart(2, 3);
addToCart(3, 1);