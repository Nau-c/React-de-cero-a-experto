import { getByText, render } from "@testing-library/react";
import { FirstApp } from "../../src/FirstApp";

describe('Pruebas en el archivo FirstApp.test.jsx', () => {

    test('debe de hacer match con el snapshot', () => {

        const title = 'Hola, soy Goku';
        const { container, getByText } = render(<FirstApp title={title} />)
        // console.log(container);

        expect(container).toMatchSnapshot();
    });

    test('debe mostrar el titulo en h1', () => {

        const title = 'Hola, soy Goku';
        const { container, getByText } = render(<FirstApp title={title}/>)
        // console.log(container);
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title );
        // expect(h1.innerHTML).toBe( title );
        // console.log(h1.innerHTML).toContain( title );
        // console.log(h1.innerHTML).toBe( title );

    });

});