
import { getHeroesById } from './bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {
 
//     setTimeout( () => {
//         //Tarea
//         //Importar herore GetById
//         const p1 = getHeroesById(2);
//         // console.log('2 segundos después')
//         // console.log(heroe);
//         resolve( p1 );
//         //reject(p1);
//         //reject('No se pudo encontrar el héroe');
        
//     }, 2000 )

// });

// //Promesa tarea asyncronas que se ejecutan en el futuro
// promesa.then( (heroe) => {
//     console.log('Terminó la promesa', heroe)
// })
// .catch( err => console.warn(err) );

//Función privada estática
const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {
    
        setTimeout( () => {
            
            const p1 = getHeroesById(id);
            // resolve(p1);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el héroe');
            }

        }, 2000)

    });

}

getHeroeByIdAsync(1)
    // .then( heroe => console.log('Heroe:', heroe) )
    .rhen ( console.log )
    .catch( err => console.warn( err )); //Si no se envía nada, se envía undefined