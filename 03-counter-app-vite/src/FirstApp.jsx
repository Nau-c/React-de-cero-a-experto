import React from "react";
import PropTypes from 'prop-types';

const message = {
    message: 'Probando el objeto',
    title: 'Nauzet'

}

// const getSaludo = () => {
//     if (message) {
//         return <h2>{message.message}</h2>
//     } else {
//         return <h2>Saludo por defecto</h2>
//     }
// }

export const FirstApp = ({ props, title, subTitle, name }) => {
    console.log("PROPS", props);

    if (!title) {
        throw new Error('El titulo es nulo')
    }

    return (
        <>
            <h1>{ title }</h1>
            {/* <h1>{getSaludo()}</h1> */}
            {/* <h2>FirtsApp</h2> */}
            <h3>{ subTitle }</h3>
            <p>{ name }</p>
            {/* <p>Soy un subtitulo</p> */}
            {/* <p>{ JSON.stringify( message ) }</p> */}
        </>

    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

//Los defaultProps son los valores por defecto de las props y entran antes
FirstApp.defaultProps = {
    title: 'Sin titulo',
    subTitle: 'Sin subtitulo',
    name: 'Nauzet'
}