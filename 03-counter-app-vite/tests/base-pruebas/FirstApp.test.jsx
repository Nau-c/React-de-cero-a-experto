import { render } from "@testing-library/react";
import { FirstApp } from "../../src/FirstApp";

describe('Pruebas en el archivo FirstApp.test.jsx', () => {

    // test('debe de hacer match con el snapshot', () => {

    //     const title = 'Hola, soy Goku';
    //     const { container } = render(<FirstApp title={title} />)
    //     // console.log(container);

    //     expect(container).toMatchSnapshot();
    // });

    test('debe mostrar el titulo en h1', () => {

        const title = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title }/> )
        // console.log(container);
        expect( getByText(title) ).toBeTruthy();


        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title );
        // expect(h1.innerHTML).toBe( title );
        // console.log(h1.innerHTML).toContain( title );
        // console.log(h1.innerHTML).toBe( title );

        expect( getByTestId('test-title').innerHTML ).toContain(title);
        expect( getByTestId('test-title').innerHTML ).toBe(title);

    });

    test('debe mostrar el subtitulo enviado por props ', () => {
        
        const title = 'Hola, soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getByText, getAllByText } = render (
            <FirstApp
                title={ title }
                subTitle={ subTitle }
            />
        );

        // expect(getByText(subTitle)).toBeTruthy();
        expect( getAllByText(subTitle).length).toBe(2);
            
    });

});