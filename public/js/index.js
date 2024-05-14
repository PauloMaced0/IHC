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

function inprocess() {
	window.location = "inprocess.html";
}
function mywishes() {
	window.location = "mywishes.html";
}
function mybooks() {
	window.location = "mybooks.html";
}
function incomingrequests() {
	window.location = "incomingrequests.html";
}

function addnew() {
	window.location = "addnew.html";
}

let popup = document.getElementById('popup');
    function openPopup() {
	    popup.classList.add('open-popup');
    }

	function inprocess() {
		window.location = "inprocess.html";
	}
	function mywishes() {
		window.location = "mywishes.html";
	}
	function mybooks() {
		window.location = "mybooks.html";
	}
	function incomingrequests() {
		window.location = "incomingrequests.html";
	}
	
	function addnew() {
		window.location = "addnew.html";
	}
	
	function mybooks2() {
		window.location = "mybooks2.html";	
	}