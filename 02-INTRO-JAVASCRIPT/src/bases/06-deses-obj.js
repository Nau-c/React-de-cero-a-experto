//Desestructuracion de objetos
//Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, claver } = persona;

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

console.log(nombre);

const retornaPersona = ({ nombre, edad, clave, rango = 'Capitan' }) => {
    // const { nombre, edad, clave } = usuario;
    // console.log( nombre, edad, clave );
    // console.log( nombre, edad, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const vengador = retornaPersona(persona);
//Retonar el useContext

// const { nombreClave, anios, latlng } = retornaPersona(persona);
const { nombreClave, anios, latlng:{lat,lng} } = retornaPersona(persona);

console.log(vengador)

console.log(nombreClave, anios);
console.log(lat, lng);