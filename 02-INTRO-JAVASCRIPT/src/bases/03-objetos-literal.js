const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 123456,
        lat: 14.1234,
        lng: 34.1234
    }

}


// console.log( persona );
console.log({
    persona:persona
});

//DesdeEcmaScript6 se puede simplificar
console.log({
    persona
});

console.log(persona);

//Estamos cogiendo el espacio de memoria de persona y lo estamos asignando a persona2
const persona2 = persona;
persona2.nombre = 'Peter';

console.log(persona2);


//Si quieres crear un clon tiene que coger todas las propiedades
const persona3 = {...persona};