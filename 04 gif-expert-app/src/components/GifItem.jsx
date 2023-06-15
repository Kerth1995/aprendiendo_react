import React from 'react'

export const GifItem = (props) => {

    return (
        <>
            <div className='card'>
                <h1>{props.gif.title}</h1>
                <img src={props.gif.url} alt="" />
            </div>
        </>
    )
}
