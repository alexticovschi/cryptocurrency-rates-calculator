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

    // Display the result of the evaluation / rate
    displayResult(result, currency) {

        // Get currency
        let currencyName;
        currencyName = `price_${currency.toLowerCase()}`;

        const printCurrencySymbol = (currency) => {
            switch(currency) {
                case 'USD':
                    return '&#36;';
                case 'GBP':
                    return '&#163;';
                case 'EUR':
                    return '&#8364;';
            } 
        }

        const currencySymbol = printCurrencySymbol(currency);

        // Read the result from the object
        const value = result[currencyName];

        // Remove the previous result
        const prevResult = document.querySelector('#result > div');
        if(prevResult) prevResult.remove();


        let HTMLTemplate = '';

        HTMLTemplate += `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                    <p>Price of ${result.name} in  ${currency} : ${currencySymbol}${value}</p>
                    <p>Last Hour: ${result.percent_change_1h}%</p>
                    <p>Last Day: ${result.percent_change_24h}%</p>
                    <p>Last 7 Days: ${result.percent_change_7d}%</p>
                </div>
            </div>
        `;

        this.showSpinner();

        // Display the result and remove the spinner after 3 seconds
        setTimeout(() => {
            const divResult = document.querySelector('#result');
            divResult.innerHTML = HTMLTemplate;

            // Hide spinner
            document.querySelector('.spinner img').remove();
        }, 2000);
    }

    // display spinner
    showSpinner() {
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = 'img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinnerGIF);
    }
}