import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coordenadas, setCoordenadas] = useState({x: 0, y: 0});

    const onMouseMove = (event) => {
        setCoordenadas({x: event.x, y: event.y});
    }

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        /*
        window.addEventListener('mousemove', (event) => {
            console.log(event.x, event.y);
        });
        */

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])

    return (
        <>
            <h1>Usuario ya existe...</h1>
            <h2>
                {
                    JSON.stringify(coordenadas)
                }
            </h2>
        </>
    )
}
