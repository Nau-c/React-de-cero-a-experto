//Arreglos en js
// const arreglo = new Array(100);
// arreglo.push(1);

// console.log( arreglo );

const arreglo = [1,2,3,4,5];
// const arreglo2 = [1,2,3,4];


// const arreglo3 = [];
//Push modifica el arreglo principal no es bueno
// arreglo3.push(1);
// console.log ( arreglo3 );

let arreglo2 = [ ...arreglo , 6 ];
// arreglo2.push( 6 );
const arreglo4 = arreglo2.map( function(numero) {
    return numero + 1;
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo4 );