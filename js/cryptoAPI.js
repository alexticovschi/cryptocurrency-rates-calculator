class CryptoAPI {
    // Query the REST API with a currency and a cryptocurrency
    async queryAPI(currency, cryptocurrency) {
        // Make a GET request and wait for the request to finish
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);

        // Get the JSON version of the response
        const result = await url.json();

        // Return an object
        return { result };
    }
    // Get all the cryptocurrencies
    async getCryptoCurrenciesList() {
        // Make a GET request to https://api.coinmarketcap.com/v1/ticker/ and wait for the request to finish
        // When the request is done, pass the resolved value to the url variable.
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');
        // const url = await fetch('https://api.coinmarketcap.com/v2/ticker/');

        // get the JSON version of the response and then pass the result to the cryptoCurrencies variable
        const cryptoCurrencies = await url.json();

        // return the object
        return { cryptoCurrencies };
    }
}