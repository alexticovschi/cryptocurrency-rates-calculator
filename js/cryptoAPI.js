class CryptoAPI {

    // Get all the cryptocurrencies
    async getCryptoCurrenciesList() {
        // Make a GET request to https://api.coinmarketcap.com/v1/ticker/ and wait for the request to finish
        // When the request is done, pass the resolved value to the url variable.
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');
        // const url = await fetch('https://api.coinmarketcap.com/v2/ticker/');

        // get the JSON version of the response and then pass the result to the cryptoCurrencies variable
        const cryptoCurrencies = await url.json();

        // return the object
        return {
            cryptoCurrencies
        }
    }
}