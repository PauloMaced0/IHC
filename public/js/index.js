document.getElementById('triggerBookModal').addEventListener('click', function () {
    document.getElementById('bookDescriptionModal').classList.remove('hidden');
});

function closeModal() {
    document.getElementById('bookDescriptionModal').classList.add('hidden');
}     

function addToCart(product) {
    let cart = localStorage.getItem('shoppingCart');
    cart = cart ? JSON.parse(cart) : [];

    let existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({...product, quantity: 1});
    }
    console.log("Add to cart:" + cart);
    localStorage.setItem('shoppingCart', JSON.stringify(cart));

    closeModal();
}