// import { heroes } from './data/heroes';
//Cuando es por default es sin las llaves y puede llevar el nombre que quieras en la importación
// import heroes from './data/heroes';
// import heroes, { owners } from './data/heroes';
import  heroes, { owners } from './data/heroes';


console.log( owners );
console.log( heroes );


const getHeroesById = ( id ) => {
    return heroes.find( heroe => heroe.id === id );
}

console.log( getHeroesById(1) );

const getHeroesByOwner = ( owner ) => heroes.filter( heroe => heroe.owner === owner );


console.log( getHeroesByOwner('Marvel') );