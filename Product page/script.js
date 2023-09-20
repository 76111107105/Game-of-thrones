// Price calculation based on quantity
document.getElementById('calculate-price').addEventListener('click', () => {
    calculateTotalPrice();
});

// Increment quantity when the plus button is clicked
document.getElementById('increment-quantity').addEventListener('click', () => {
    const quantityInput = document.getElementById('quantity');
    const currentQuantity = parseInt(quantityInput.value);
    if (!isNaN(currentQuantity)) {
        quantityInput.value = currentQuantity + 1;
        calculateTotalPrice();
    }
});

// Decrement quantity when the minus button is clicked
document.getElementById('decrement-quantity').addEventListener('click', () => {
    const quantityInput = document.getElementById('quantity');
    const currentQuantity = parseInt(quantityInput.value);
    if (!isNaN(currentQuantity) && currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
        calculateTotalPrice();
    }
});

// Function to calculate and update the total price
function calculateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const pricePerItem = 29.99; // Price per egg

    if (!isNaN(quantity) && quantity >= 1) {
        const totalPrice = (quantity * pricePerItem).toFixed(2);
        document.getElementById('total-price').textContent = totalPrice;
    } else {
        alert('Please enter a valid quantity.');
    }
}
