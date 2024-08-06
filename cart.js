const cartContainer = document.getElementById("cart-container");
const totalPriceContainer = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    cartContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price} PKR / ${item.unit}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        cartContainer.appendChild(cartItem);
        totalPrice += item.price;
    });

    totalPriceContainer.innerHTML = `Total Price: ${totalPrice} PKR`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

document.getElementById("checkout").addEventListener("click", () => {
    let message = "Order Details:\n\n";
    cart.forEach(item => {
        message += `${item.name} - ${item.price} PKR / ${item.unit}\n`;
    });
    message += `\nTotal Price: ${cart.reduce((sum, item) => sum + item.price, 0)} PKR`;

    // Clear the cart
    localStorage.removeItem("cart");

    window.location.href = `https://wa.me/+923015151177?text=${encodeURIComponent(message)}`;
});

renderCart();
