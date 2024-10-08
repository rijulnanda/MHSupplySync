document.getElementById('add-item-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const itemName = document.getElementById('item-name').value;
    const description = document.getElementById('description').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;

    // Show confirmation message
    document.getElementById('add-confirmation-message').innerText = 'Item added successfully (Note: No backend in W3Schools Spaces)';
    
    // Optionally, you can log the item to the console
    console.log({ name: itemName, description, quantity, location });
});
