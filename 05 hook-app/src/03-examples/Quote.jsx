import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = (props) => {
    const {species, name} = props;

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0})

    useLayoutEffect(() => {
        //console.log(pRef.current.getBoundingClientRect());
        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({
            height: height,
            width: width
        })
    }, [species])

    return (
        <>
            <blockquote className="blockquote text-end" style={{display: 'flex'}}>
                <p ref={pRef} className="mb-t">{species}</p>
                <footer className="blockquote-footer">{name}</footer>
            </blockquote>
            <code>
                {JSON.stringify(boxSize)}
            </code>
        </>
    )
}
