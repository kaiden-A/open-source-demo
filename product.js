const laptops = [
    { id: 1, brand: "Dell", model: "XPS 13", price: 950, cpu: "i7", ram: "16GB", ssd: "512GB" },
    { id: 2, brand: "Apple", model: "MacBook Air", price: 1200, cpu: "M2", ram: "8GB", ssd: "256GB" },
    { id: 3, brand: "HP", model: "Spectre x360", price: 1100, cpu: "i5", ram: "16GB", ssd: "512GB" },
    { id: 4, brand: "Lenovo", model: "ThinkPad X1", price: 1400, cpu: "i7", ram: "32GB", ssd: "1TB" },
    { id: 5, brand: "Asus", model: "ROG Zephyrus", price: 1900, cpu: "i9", ram: "32GB", ssd: "1TB" },
    { id: 6, brand: "Acer", model: "Swift 3", price: 600, cpu: "i5", ram: "8GB", ssd: "256GB" }
];

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

const detailsDiv = document.getElementById('details');
const product = laptops.find(p => p.id === productId);

if (product) {
    detailsDiv.innerHTML = `
        <h1>${product.brand}</h1>
        <h2>${product.model}</h2>
        <div class="price-tag">$${product.price}</div>
        <div class="specs">
            <p><strong>Processor:</strong> ${product.cpu}</p>
            <p><strong>RAM:</strong> ${product.ram}</p>
            <p><strong>Storage:</strong> ${product.ssd}</p>
        </div>
    `;
} else {
    detailsDiv.innerHTML = `<h1>Product Not Found</h1><p>Sorry, we couldn't find that laptop.</p>`;
}