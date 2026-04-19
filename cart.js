let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log(product.name + " added to cart!");
    console.log("Cart:", cart);
}