import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => { 
        // console.log(event)
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 )
    }

    const handleSubstract = () => setCounter( counter - 1 );
    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}






// import { useState } from 'react'
// import PropTypes from 'prop-types';

// export const CounterApp = ({ value }) => {

//     const [counter, setCounter] = useState(value);

//     //hooks son constantes para no setear el valor
//     const handleAdd = () => {
//         setCounter((count) => count + 1)
//         const setRest = () => setCounter((count) => count - 1)
//         const setMulti = () => setCounter((count) => count * 2)
//         const setDivi = () => setCounter(count => count / 2)
//         const reset = () => setCounter(value)

//         return (
//             <>
//                 <h1>CounterApp</h1>
//                 <h2> { counter } </h2>
//                 <button onClick={handleAdd}> +1 </button>
//                 <button onClick={setRest}> -1 </button>
//                 <button onClick={setMulti}> x2 </button>
//                 <button onClick={setDivi}> /2 </button>
//                 <button onClick={reset}> Reset </button>

//             </>
//         );

//     }
// }

// CounterApp.propTypes = {
//     value: PropTypes.number.isRequired
// }
