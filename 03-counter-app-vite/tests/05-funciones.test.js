import { getUser, getUsuarioActivo } from '../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones.js', () => {

    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(testUser).toStrictEqual(user);
    });




    test('getUsuarioActivo debe retonar un objeto y un nombre por parametros', () => {
        const nombre = 'Nauzet';

        const testGetUser = {
            uid: 'ABC567',
            username: nombre
        }

        const getUsuario = getUsuarioActivo(nombre);

        expect(testGetUser).toStrictEqual(getUsuario);

    });


});