import { retornaArreglo } from '../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr.test.js', () => {

    test('debe de retornar un string y un numero', () => {
        
        const letters = 'ABC';
        const numbers = 123;
        const retorno = retornaArreglo(); // ['ABC', 123];
        // console.log( typeof retorno );

        // expect( retorno ).toEqual( ['ABC', 123] );
        
        // expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');
        expect(retorno[0]).toBe(letters);
        expect(letters).toBe('ABC');
        
        expect(numbers).toBe(123);
        expect(retorno[1]).toBe(numbers);
        // expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
    });

});




