import { getImagen } from '../src/base-pruebas/11-async-await';

describe ('Pruebas con async-await y Fetch', () => {

    test ('debe retornar el url de la imagen', async() => {
        const url = await getImagen();
        // console.log(url);

        // expect(url.includes('https://')).toBe(true);
        
        // expect(url.includes('https://')).toBeTruthy()

        // expect(typeof url).toBe('string');
        
        const resp = await getImagen();
        expect(resp).toBe('No tenemos imagen')
    });

});