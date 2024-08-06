const menuItems = [
    { id: 1, name: "Butter Scotch Cake", price: 1100, unit: "Pound", category: "cakes" , image: "pics/cake1.jpg"},
    { id: 2, name: "Black Forest Cake", price: 1100, unit: "Pound", category: "cakes" , image: "pics/cake2.jpg" },
    { id: 3, name: "Vanilla Cake", price: 1100, unit: "Pound", category: "cakes", image: "pics/cake3.jpg" },
    { id: 4, name: "Pineapple Cake", price: 1200, unit: "Pound", category: "cakes", image: "pics/cake4.jpg" },
    { id: 5, name: "Strawberry Cake", price: 1200, unit: "Pound", category: "cakes", image: "pics/cake5.jpg" },
    { id: 6, name: "Chocolate Fudge Fantasy", price: 1500, unit: "Pound", category: "cakes", image: "pics/cake6.jpg" },
    { id: 7, name: "Coco Mocha Cake", price: 1200, unit: "Pound", category: "cakes", image: "pics/cake7.jpg" },
    { id: 8, name: "Red Velvet Cake", price: 1300, unit: "Pound", category: "cakes", image: "pics/cake8.jpg" },
    { id: 9, name: "Regular Brownie", price: 150, unit: "PC", category: "brownies", image: "pics/Brownies1.jpg" },
    { id: 10, name: "Fanfati Brownie", price: 170, unit: "PC", category: "brownies", image: "pics/Brownies2.jpg" },
    { id: 11, name: "Double Chocolate Deluxe Brownie", price: 200, unit: "PC", category: "brownies", image: "pics/Brownies3.jpg" },
    { id: 12, name: "Choco Chip Brownie", price: 170, unit: "PC", category: "brownies", image: "pics/Brownies4.PNG" },
    { id: 13, name: "Almond Brownie", price: 170, unit: "PC", category: "brownies", image: "pics/Brownies4.jpg" },
    { id: 14, name: "Chocolate Cupcake", price: 150, unit: "PC", category: "cupcakes", image: "pics/Cupcakes1.jpg" },
    { id: 15, name: "Chocolate Fancy Cupcake", price: 200, unit: "PC", category: "cupcakes", image: "pics/Cupcakes2.jpg" },
    { id: 16, name: "Strawberry Cupcake", price: 150, unit: "PC", category: "cupcakes", image: "pics/Cupcakes3.jpg" },
    { id: 17, name: "Vanilla Cupcake", price: 150, unit: "PC", category: "cupcakes", image: "pics/Cupcakes4.jpg" },
    { id: 18, name: "Vanilla Tea Time Cake", price: 300, unit: "600/g", category: "tea-time-cakes", image: "pics/Tea-time%20Cakes1.jpg" },
    { id: 19, name: "Chocolate Tea Time Cake", price: 300, unit: "600/g", category: "tea-time-cakes", image: "pics/Tea-time%20Cakes2.jpg" },
    { id: 20, name: "Marvel Tea Time Cake", price: 300, unit: "600/g", category: "tea-time-cakes", image: "pics/Tea-time%20Cakes3.jpg" },
    { id: 21, name: "Chocolate Fancy Pastry", price: 200, unit: "PC", category: "pastries", image: "pics/Pastries1.jpg" },
    { id: 22, name: "Chocolate Taffie Pastry", price: 250, unit: "PC", category: "pastries", image: "pics/Pastries2.jpg" },
    { id: 23, name: "Black Forest Pastry", price: 200, unit: "PC", category: "pastries", image: "pics/Pastries3.jpg" },
    { id: 24, name: "Choco Mocha Pastry", price: 250, unit: "PC", category: "pastries", image: "pics/Pastries4.jpg" },
    { id: 25, name: "Red Valvet Pop Pastry", price: 250, unit: "PC", category: "pastries", image: "pics/Pastries5.jpg" },
    { id: 26, name: "Caramel Crunch Pastry", price: 250, unit: "PC", category: "pastries", image: "pics/Pastries6.jpg" },
    { id: 27, name: "Checked Shammi Kebab", price: 450, unit: "Frozen/Fried/Dozen", category: "savouries", image: "pics/Savouries1.jpg" },
    { id: 28, name: "Chicken Samosa", price: 450, unit: "Frozen/Fried/Dozen", category: "savouries", image: "pics/Savouries2.jpg" },
    { id: 29, name: "Aloo Samosa", price: 300, unit: "Frozen/Fried/Dozen", category: "savouries", image: "pics/Savouries3.jpg" },
    { id: 30, name: "Nuggets", price: 500, unit: "Frozen/Fried/Dozen", category: "savouries", image: "pics/Savouries4.jpg" },
    { id: 31, name: "Chicken Cheese Balls", price: 500, unit: "Frozen/Fried/Dozen", category: "savouries", image: "pics/Savouries5.jpg" },
    { id: 32, name: "White Sauce Cheesepasta", price: 300, unit: "Plate", category: "pastas", image: "pics/Pastas1.jpg" },
    { id: 33, name: "Red Sauce Cheese Pasta", price: 300, unit: "Plate", category: "pastas", image: "pics/Pastas.jpg" },
    { id: 34, name: "Chicken Macaroni", price: 200, unit: "Plate", category: "pastas", image: "pics/Pastas3.jpg" },
    { id: 35, name: "White Sauce Pasta", price: 200, unit: "Plate", category: "pastas", image: "pics/Pastas4.jpg" },
    { id: 36, name: "Meethi-Tikyan", price: 400, unit: "Dozen", category: "side-orders", image: "pics/Side%20Orders1.PNG" },
    { id: 37, name: "Besan Barfi", price: 400, unit: "Dozen", category: "side-orders", image: "pics/Side%20Orders2.PNG" },
    { id: 38, name: "Spring Roll", price: 400, unit: "Dozen", category: "side-orders", image: "pics/Side%20Orders3.jpg" },
];
const menuContainer = document.getElementById("menu-container");

const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
        acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
}, {});

Object.keys(groupedItems).forEach(category => {
    const categoryContainer = menuContainer.querySelector(`[data-category="${category}"]`);

    if (categoryContainer) {
        groupedItems[category].forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");

            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price} PKR / ${item.unit}</p>
                <button onclick="addToCart(${item.id})">Add to Cart</button>
            `;

            categoryContainer.appendChild(menuItem);
        });
    }
});

function addToCart(id) {
    const item = menuItems.find(item => item.id === id);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} has been added to your cart!`);
}