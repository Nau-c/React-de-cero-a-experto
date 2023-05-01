import React from "react";
import PropTypes from "prop-types";

const message = {
    message: 'Probando el objeto',
    title: 'Nauzet'

}

const getSaludo = () => {
    if ( message ) {
        return <h2>{ message.message }</h2>
    } else {
        return <h2>Saludo por defecto</h2>
    }
}

    export const FirtsApp = ({ title, subTitle, name }) => {
        // console.log( "PROPS", props );
        // subTitle = 'La tierra es grande',
        // title = 'Prueba de titulo'
        // if (!title) {
        //     throw new Error('El title no existe')
        // }

    return (
        <>
            <h1>{ title }</h1>
            {/* <h1>{ getSaludo() }</h1> */}
            {/* <h2>FirtsApp</h2> */}
            {/* <h3>{ title }</h3> */}
            <p>{ subTitle }</p>
            <p>{ name }</p>
            {/* <p>{ JSON.stringify( message ) }</p> */}
        </>

    )
}

FirtsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirtsApp.defaultProps = {
    name: 'Nauzet',
    subTitle: 'No tiene Subtitulo',
    title: 'No tiene titulo',
}
