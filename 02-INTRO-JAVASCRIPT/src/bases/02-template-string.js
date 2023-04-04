const nombre = 'Nauzet';
const apellido = 'López Mendoza';

//Forma Actual poder concatenar strings
const nombreCompleto = `${ nombre } ${ apellido } ${5 + 5}`;

const nombreCompletoAntiguo = nombre + ' ' + apellido;

console.log( nombreCompleto );
console.log( nombreCompletoAntiguo );


function getSaludo(nombre) {
    return 'Hola ' + nombre;
}



console.log( `Este es un texto: ${ getSaludo(nombre) }  ` );