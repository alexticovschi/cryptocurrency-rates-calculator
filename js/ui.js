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

    // Display a message - 2 parameters, message and classes
    displayMessage(message, className) {
        const div = document.createElement('div');

        // Add the classes
        div.className = className;

        // Append message to div
        div.appendChild(document.createTextNode(message));

        const messageDiv = document.querySelector('.messages');
        
        messageDiv.appendChild(div);

        // Remove the message
        setTimeout(() => document.querySelector('.messages div').remove(), 3000);
    }
}