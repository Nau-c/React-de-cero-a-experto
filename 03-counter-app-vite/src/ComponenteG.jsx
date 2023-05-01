import { useState } from 'react'
import PropTypes from 'prop-types';

export const personajes = ['Nau','Iuliia', 'Liam']
export const[ , , p3] = personajes;
console.log(p3)


export const retornaAlgo = () => {
    return ['kk', 123456]

}

export const [letras, numeros] = retronaArreglo();

console.log(letras, numeros)

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre();
