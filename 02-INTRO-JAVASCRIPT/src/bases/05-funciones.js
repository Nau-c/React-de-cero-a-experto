//Funciones en JS
// function saludar(nombre) {
//     return `Hola, ${nombre}`;
// }

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

//Funcion de flecha o arrow function 
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;
// saludar = 23;

//console.log( saludar('Nauzet') );

console.log(saludar2('Nauzet'))
console.log(saludar3('NauzetDos'))
console.log(saludar4())

//Si ponemos la llaves ya indicamos que estamos devolviendo un objeto implicito
//De esta forma no es necesario poner el return
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});


const user = getUser();
console.log(user);

//Tarea
//1. Transformar a una funcion de flecha
const getUsuarioActivoDos = () => ({
    uid: 'ABC567',
    username: 'Nauzet'
});
//2. Tiene que retornar un objeto implicito
//3. Pruebas
const usuarioActivoDos = getUsuarioActivoDos('NauzetTEST');
console.log(usuarioActivoDos);

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Nauzet');
console.log(usuarioActivo);