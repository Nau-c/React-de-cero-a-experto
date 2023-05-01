import React from "react";
import { useState } from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    //hooks son constantes para no setear el valor
    const handleAdd = () => setCounter((count) => count + 1)
    const setRest = () => setCounter((count) => count - 1)
    const setMulti = () => setCounter((count) => count * 2)
    const setDivi = () => setCounter(count => count / 2)

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={setRest}> -1 </button>
            <button onClick={setMulti}> x2 </button>
            <button onClick={setDivi}> /2 </button>
        </>
    );

}