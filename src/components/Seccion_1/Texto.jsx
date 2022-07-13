import React from 'react'

const Texto = (obj) => {
    const {titulo,texto} = obj;
    return (
        <>
            <h1>{titulo}</h1>
            <p>{texto}</p>
        </>
    )
}

export default Texto