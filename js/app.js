// Instantiate the classes
const cryptoAPI = new CryptoAPI();
const ui = new UI();

// Create the variables
const form = document.getElementById('form');

// Add event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Read currency
    const selectedCurrency = document.getElementById('currency').value;

    // Read cryptocurrency
    const selectedCryptocurrency = document.getElementById('cryptocurrency').value;

    // Validate that the selected value is not an empty string
    if(selectedCurrency === '' || selectedCryptocurrency === '') {
        // Display an error to user
        ui.displayMessage('All fields are mandatory', 'deep-orange darken-4 card-panel center')
    } else {
        console.log('success');
    }

    console.log('currency:', selectedCurrency, 'cryptocurrency:', selectedCryptocurrency);
})