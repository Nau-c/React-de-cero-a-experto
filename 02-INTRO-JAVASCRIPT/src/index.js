
const apiKey = '1BqXK4oWRHnjI41los7qLfTUc5dOr9G8' // <-- Add your API key here

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json())
    .catch( data => {
        console.log(data);
    })
    .catch(console.warn)

