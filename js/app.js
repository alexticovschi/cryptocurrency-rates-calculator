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
        // display an error
        console.log('error');
    } else {
        console.log('success');
    }

    console.log('currency:', selectedCurrency, 'cryptocurrency:', selectedCryptocurrency);
})