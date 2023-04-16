// const getImagenPromesa = () => {
//     const promesa = new Promise( (resolve, reject) => {
//         resolve('https://asdasdasd.com/asdasd.jpg');

//     })
//     return promesa;
// }
// getImagenPromesa().then(console.log)

//Sinplificando el codigo
// const getImagenPromesa = () => {
//     return new Promise(resolve => resolve('https://asdasdasd.com/asdasd.jpg'));
// }
// getImagenPromesa().then(console.log)

//Simplificando el codigo aún mas
// const getImagenPromesa = () => new Promise(resolve => resolve('https://asdasdasd.com/asdasd.jpg'));
// getImagenPromesa().then(console.log)

//Con async y await
// const getImagen = async() => {
//     return 'https://asdasdasd.com/asdasd.jpg';
// }

// // console.log(getImagen());

// getImagen().then(console.log)

const getImagen = async () => {
  try {
    const apiKey = "1BqXK4oWRHnjI41los7qLfTUc5dOr9G8";
    const respuesta = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await respuesta.json();
    // console.log(data);
    console.log(data.images.original.url);
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

getImagen();

// const apiKey = '1BqXK4oWRHnjI41los7qLfTUc5dOr9G8' // <-- Add your API key here
// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
// //return inplicito de las respuesta
// peticion.then(resp => resp.json() )
//     .then(({ data }) =>{
//         console.log(data.images.original.url)
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);

//     })
// .catch(console.warn)
