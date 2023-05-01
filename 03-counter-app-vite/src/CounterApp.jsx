import PropTypes from 'prop-types';
export const CounterApp = ({ value }) => {
    
    const handleAdd = () => {
        console.log('+3');
        value = 100
        console.log(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    )

}


CounterApp.PropTypes = {
    value: PropTypes.number.isRequired,

}