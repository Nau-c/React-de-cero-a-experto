const activo = true;

let mensaje = '';

if ( activo ) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}


console.log(mensaje);


const mensajeDos = ( activo === true ) ? 'Activo' : 'Inactivo'


console.log(mensajeDos)


const mensajeTres = ( activo === true ) ? 'Activo' : null;


console.log(mensajeTres)


const mensajeCuatro = !activo && 'Activo';


console.log(mensajeCuatro)