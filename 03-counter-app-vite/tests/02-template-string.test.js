import { getSaludo } from '../src/base-pruebas/02-template-string'

describe('Pruebas en el archivo 02-template-string', () => {

    test('getsaludo debe retonar un hola fernando', () => {

        const name = 'Fernando';
        const message = getSaludo( name );

        expect( message ).toBe( `Hola ${ name }!!!` )
    });

}) 