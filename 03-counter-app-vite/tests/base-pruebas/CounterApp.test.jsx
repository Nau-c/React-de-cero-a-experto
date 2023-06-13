import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../../src/CounterApp";

//Tarea 
// 1. Debe hacer match con el snapshot
// 2. El valor por defecto inicial debe ser 100

describe('Pruebas en el archivo CounterApp.test.jsx', () => {

    const value = 100;
    const initialValue = 20;

    test('Debe de hacer match con el snapshot', () => {
    
        const { container } = render(<CounterApp counter={ value }/>);
        expect(container).toMatchSnapshot();

    });

    test('Debe hacer match con el snapshot', () => {
        const  { container } = render(<CounterApp counter={ initialValue }/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 100', () => {
        render (<CounterApp value={ 100 }/>);
        expect ( screen.getByText(100) ).toBeTruthy();
    });

    test('Debe decrementar con el boton +1', () => {

        render(<CounterApp value={ initialValue }/>);
        fireEvent.click(screen.getByText('+1') );
        expect( screen.getByText('21') ).toBeTruthy();
    });

    test('Debe decrementar con el boton -1', () => {

        render(<CounterApp value={ initialValue }/>);
        fireEvent.click(screen.getByText('-1') );
        expect( screen.getByText('19') ).toBeTruthy();

    });

    test('Debe de funcionar el boton reset', () => {
        
        render(<CounterApp value={ 1000 } />);
        fireEvent.click(screen.getByText('-1') );
        fireEvent.click(screen.getByText('-1') );
        fireEvent.click(screen.getByText('-1') );

        // fireEvent.click(screen.getByText('Reset') );

        // expect( screen.getByText('1000') ).toBeTruthy();
        screen.getByRole('button', { name: 'btn-reset' })
        // screen.debug();
    });
});
