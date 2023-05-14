import { getHeroeById, getHeroesByOwner } from '../src/base-pruebas/08-imp-exp';
import heroes from '../src/data/heroes';

describe('Pruebas en 08-imp-exp.test.js', () => {

    test('getHeroeById debe retornar un heroe por ID', () => {

        const id = 2;
        const hero = getHeroeById(id);
        // console.log(hero);

        expect( hero ).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' });
       

    });

    test('getHeroeById debe retornar undefined si no existe', () => {
    
        const id = 23;
        const hero = getHeroeById(id);


        expect(hero).toBeFalsy();
    });

    // Tarea
    // 1. Debe retornar un arreglo con los heroes de DC
    //      owner
    // 2. Debe retornar un arreglo con los heroes de Marvel
    //      length = 2 // toBe
    // 3. Debe retornar un arreglo con los heroes de Marvel

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
    
        const owner = 'DC';
        const DC = getHeroesByOwner(owner);

        // console.log(DC);

        // expect(DC).toEqual([
        //     { id: 1, name: 'Batman', owner: 'DC' },
        //     { id: 3, name: 'Superman', owner: 'DC' },
        //     { id: 4, name: 'Flash', owner: 'DC' }
        //   ])

        // expect(DC.length).toBe(3);

        expect (DC).toEqual(heroes.filter( heroe => heroe.owner === owner ));
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
        
            const owner = 'Marvel';
            const Marvel = getHeroesByOwner(owner);
    
            // console.log(Marvel);
    
            // expect(Marvel).toEqual([
            //     { id: 2, name: 'Spiderman', owner: 'Marvel' },
            //     { id: 5, name: 'Wolverine', owner: 'Marvel' }
            // ])

            // expect(Marvel.length).toBe(2);

            expect(Marvel).toEqual(heroes.filter( heroe => heroe.owner === owner ));
    });

  

});