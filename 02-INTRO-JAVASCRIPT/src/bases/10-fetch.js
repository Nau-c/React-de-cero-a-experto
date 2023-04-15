
const apiKey = '1BqXK4oWRHnjI41los7qLfTUc5dOr9G8' // <-- Add your API key here

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion.then( resp => {
//     // console.log(resp);
//     resp.json().then(data => {
//         console.log(data);
//     })

// })


//return inplicito de las respuesta
peticion.then(resp => resp.json() )
    .then(({ data }) =>{
        console.log(data.images.original.url)
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    })
.catch(console.warn)

