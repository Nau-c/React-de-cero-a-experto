const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes);

console.log( personajes[0] );
console.log( personajes[1] );
console.log( personajes[2] );

const [ , p2 ] = personajes;

console.log( p2 );

const retornaArreglo = () => {
    return ['ABC', 123];
}


const [ letras, numeros ] = retornaArreglo();

console.log( letras, numeros );
console.log ( letras );

//Tarea
//1. El primer valor del arr se llamará nombre
//2. Se llamará setNombre
const estadoDeUso = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') } ];
}

// const arr = estadoDeUso('Goku');
// console.log( nombre );

const [ nombre, setNombre ] = estadoDeUso('Nauzet');
console.log( nombre );
setNombre();
// console.log( setNombre );