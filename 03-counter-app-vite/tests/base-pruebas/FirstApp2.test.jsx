import { render, screen } from "@testing-library/react";
import { FirstApp } from "../../src/FirstApp";

describe('Pruebas en <Firstapp/>', () => {

    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitulo';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();

    })

    test('debe de mostrar el mensaje  "Hola, soy Goku"', () => {

        const { container } = render(<FirstApp title={title} />);
        expect(screen)
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    });


    test('debe mostrar el titulo en h1', () => {

        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);

    });

    test('debe mostrar el subtitulo enviado por props ', () => {

        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        );

        expect(screen.getAllByText(subTitle).length).toBe(2);

    });

});