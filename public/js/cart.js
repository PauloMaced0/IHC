function initLoad() {
    loadCartItems();
    updateCartTotal();
}

function openStep(evt, stepName) {
    // Retrieve all elements with the class "step-content" and hide them
    var stepContents = document.getElementsByClassName("step-content");
    for (var i = 0; i < stepContents.length; i++) {
        stepContents[i].style.display = "none";
    }

    // Retrieve all buttons within the steps container and remove the active styling
    var stepButtons = document.querySelectorAll(".steps-container button");
    for (var i = 0; i < stepButtons.length; i++) {
        stepButtons[i].className = stepButtons[i].className.replace("text-indigo-600 bg-indigo-100", "text-indigo-600 hover:text-indigo-600 bg-indigo-100");
    }

    // Display the current step's content
    document.getElementById(stepName).style.display = "block";

    // Add 'active' styling to the button that opened the step
    evt.currentTarget.className = "block w-full py-4 px-2 text-center text-sm font-medium text-indigo-600 bg-indigo-100 focus:outline-none";

    // Optionally, update the URL or state as needed
    // window.history.pushState({step: stepName}, `Step: ${stepName}`, `#${stepName}`);
}

function openModal() {
    document.getElementById('paymentSuccessModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('paymentSuccessModal').classList.add('hidden');
    window.location.href = "./index.html"
}

function loadCartItems() {
    // Get the cart data from localStorage
    let cart = localStorage.getItem('shoppingCart');
    cart = cart ? JSON.parse(cart) : [];

    // Find the container where cart items should be displayed
    const cartItemsContainer = document.getElementById('cartItemsContainer');

    console.log("load cart items");
    // Clear existing items
    cartItemsContainer.innerHTML = '';

    // Generate HTML for each book in the cart
    cart.forEach(item => {
        let totalPrice = item.quantity * item.price
        cartItemsContainer.innerHTML += `
        <div class="border-b pb-4">
          <div class="grid grid-cols-12 items-center">
            <div class="col-span-5 flex items-center">
              <img src="${item.image}" alt="Book Cover" class="w-16 h-20 object-cover rounded-lg mr-4">
              <div>
                <h3 class="font-semibold text-gray-800">${item.name}</h3>
                <p class="text-sm text-gray-600">${item.author}</p>
              </div>
            </div>
            <div class="col-span-3">
              <input type="number" id="quantity-${item.id}" name="quantity" class="w-16 text-center border rounded-md" value="${item.quantity}" min="1" onchange="updatePrice(${item.id})">
            </div>
            <div class="col-span-3 text-gray-800" id="price-${item.id}">${(item.price * item.quantity).toFixed(2)}€</div>
            <div class="col-span-1">
              <button onclick="removeFromCart(${item.id})">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;
    });

    // Check if cart is empty to display a message
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center text-gray-500">Your cart is empty.</p>';
    }
}

function removeFromCart(productId) {
    // Retrieve the cart from localStorage
    let cart = localStorage.getItem('shoppingCart');
    cart = cart ? JSON.parse(cart) : [];

    // Filter out the item to be removed
    cart = cart.filter(item => item.id !== productId);

    // Save the updated cart back to localStorage
    localStorage.setItem('shoppingCart', JSON.stringify(cart));

    // Optionally, refresh the cart display if you have a function like loadCartItems()
    loadCartItems();  // This assumes you have a function that refreshes the cart display
    updateCartTotal();
}

function updatePrice(productId) {
    let quantity = document.getElementById(`quantity-${productId}`).value;
    quantity = parseInt(quantity, 10);  // Ensure the value is an integer

    // Get the cart from localStorage
    let cart = localStorage.getItem('shoppingCart');
    cart = cart ? JSON.parse(cart) : [];

    // Find the item in the cart
    let item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        localStorage.setItem('shoppingCart', JSON.stringify(cart));

        // Update the displayed price directly
        let priceElement = document.getElementById(`price-${productId}`);
        if (priceElement) {
            priceElement.textContent = `${(item.price * quantity).toFixed(2)}€`;
        }
    }
    updateCartTotal();
}

function updateCartTotal() {
    let cart = localStorage.getItem('shoppingCart');
    cart = cart ? JSON.parse(cart) : [];
    let total = 0;

    // Calculate the total price
    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    // Format the total to two decimal places and add the currency
    total = ' ' + total.toFixed(2) + '€';

    // Update the HTML content of the cart total
    let totalElement = document.getElementById('cartTotal');
    if (totalElement) {
        totalElement.textContent = total;
    }
}