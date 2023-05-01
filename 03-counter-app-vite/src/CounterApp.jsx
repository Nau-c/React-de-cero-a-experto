import { useState } from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );
    
    //hooks son constantes para no setear el valor
    const handleAdd = () => {
        // console.log('+3');
        // value = 100
        // console.log(value)
        setCounter( (count) => count + 1)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    );

}