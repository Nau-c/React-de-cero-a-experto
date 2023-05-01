import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
        </>
    )

}


CounterApp.PropTypes = {
    value: PropTypes.number.isRequired,

}