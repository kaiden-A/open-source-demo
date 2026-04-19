const laptops = [
    { id: 1, brand: "Dell", model: "XPS 13", price: 100 },
    { id: 2, brand: "Apple", model: "MacBook Air", price: 1200 },
    { id: 3, brand: "HP", model: "Spectre x360", price: 1100 },
    { id: 4, brand: "Lenovo", model: "ThinkPad X1", price: 1400 },
    { id: 5, brand: "Asus", model: "ROG Zephyrus", price: 1900 },
    { id: 6, brand: "Acer", model: "Swift 3", price: 600 }
];

// Load cart from localStorage (or start empty)
let cart = JSON.parse(localStorage.getItem('laptopCart')) || [];

function addToCart(id) {
    const item = laptops.find(l => l.id === id);

    if (!item) {
        alert("Item not found!");
        return;
    }

    // ✅ Add item to cart array
    cart.push(item);

    // ✅ Update UI and persist to localStorage
    updateCartUI();

    // Notify user
    alert(`${item.brand} added to cart!`);
}

function updateCartUI() {
    // Update cart count in UI
    document.getElementById('cartCount').innerText = cart.length;

    // Save updated cart back to localStorage
    localStorage.setItem('laptopCart', JSON.stringify(cart));
}

function addToCart(id) {
    const item = laptops.find(l => l.id === id);
    updateCartUI();
    alert(`${item.brand} added to cart!`);
}

function displayLaptops(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = data.map(lap => `
        <div class="card">
            <h3>${lap.brand} ${lap.model}</h3>
            <p class="price">$${lap.price}</p>
            <button class="btn-add" onclick="addToCart(${lap.id})">Add to Cart</button>
            <a href="product.html?id=${lap.id}" class="view-btn">View Details</a>
        </div>
    `).join('');
}

function filterData() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const maxPrice = document.getElementById('priceFilter').value;

    const filtered = laptops.filter(lap => {
        const matchesSearch = lap.brand.toLowerCase().includes(query);
        const matchesPrice = maxPrice === "all" || lap.price <= parseInt(maxPrice);
        return matchesSearch && matchesPrice;
    });
    displayLaptops(filtered);
}

document.getElementById('searchBtn').addEventListener('click', filterData);
document.getElementById('priceFilter').addEventListener('change', filterData);

// Initial Load
displayLaptops(laptops);
updateCartUI();