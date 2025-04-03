function calculateTotal() {
    // Get input values
    let Price = parseFloat(document.getElementById('Price').value);
    let Liters = parseFloat(document.getElementById('Liters').value);
    
    // Calculate total cost
    let totalCost = Price * Liters;
    
    // Display result
    document.getElementById('cost').innerText = `Total Cost: $${totalCost.toFixed(2)}`;
}