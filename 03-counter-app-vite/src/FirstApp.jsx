import React from "react";
import PropTypes from "prop-types";

const message = {
    message: 'Probando el objeto',
    title: 'Nauzet'

}

<<<<<<< HEAD
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
=======
const getSaludo = () => {
    if ( message ) {
        return <h2>{ message.message }</h2>
    } else {
        return <h2>Saludo por defecto</h2>
>>>>>>> 7170e88331c3b4d18d4a76a191947602ebbbbffe
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
<<<<<<< HEAD
            <h3>{ subTitle }</h3>
            <p>{ name }</p>
            {/* <p>Soy un subtitulo</p> */}
=======
            {/* <h3>{ title }</h3> */}
            <p>{ subTitle }</p>
            <p>{ name }</p>
>>>>>>> 7170e88331c3b4d18d4a76a191947602ebbbbffe
            {/* <p>{ JSON.stringify( message ) }</p> */}
        </>

    )
}

FirtsApp.propTypes = {
    title: PropTypes.string.isRequired,
<<<<<<< HEAD
    subTitle: PropTypes.number
}

//Los defaultProps son los valores por defecto de las props y entran antes
FirstApp.defaultProps = {
    title: 'Sin titulo',
    subTitle: 'Sin subtitulo',
    name: 'Nauzet'
}
=======
    subTitle: PropTypes.string
}

FirtsApp.defaultProps = {
    name: 'Nauzet',
    subTitle: 'No tiene Subtitulo',
    title: 'No tiene titulo',
}
>>>>>>> 7170e88331c3b4d18d4a76a191947602ebbbbffe
