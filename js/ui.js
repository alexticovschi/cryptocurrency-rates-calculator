class UI {
    constructor() {
        this.init();
    }
    init() {
        this.displayCryptoCurrencies();
    }
    // Display the <option> for the form
    displayCryptoCurrencies() {
        cryptoAPI.getCryptoCurrenciesList()
            .then(data => {
                const cryptoCurrencies = data.cryptoCurrencies;
                
                // Build the <select> from the REST API
                const select = document.getElementById('cryptocurrency');

                cryptoCurrencies.forEach(currency => {
                    // everytime we loop through the array add a new option
                    const option = document.createElement('option');
                    option.value = currency.id;
                    option.appendChild(document.createTextNode(currency.name));
                    select.appendChild(option)
                })
            })
    }
}