import { getHeroeById, getHeroesByOwner } from '../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp.test.js', () => {

    test('debe retornar un string y un numero', () => {

        const id = 2;
        const heroe = getHeroeById(id);

        console.log(heroe);

        const heoreData = {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        }

        expect(heore).toBe(heoreData);

    });

    test('debe retornar un arreglo con los heroes de DC', () => {
    
        const id = 23;
        const heroe = getHeroeById(id);


        expect(heroe).toBeFalsy();
    });


});