import { getHeroeByIdAsync } from '../src/base-pruebas/09-promesas';

describe('Pruebas con promesas', () => {

    test('getHeroeByIdAsync debe retornar un héroe async', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                // expect(true).toBe(false);
                done();
            });
    });

    test('debe obtener un error si el héroe por id no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBeFalsy();
                done();
            })
            .catch(error => {

                expect(error).toBe(`No se pudo encontrar el héroe: ${id}`);
                done();
            });
    });


});