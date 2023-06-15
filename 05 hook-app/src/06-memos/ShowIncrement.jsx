import React, { memo } from 'react'

export const ShowIncrement = memo((props) => {
    const { increment, incrementPlusBy_5 } = props;
    console.log('Me volvi a generar');
    return (
        <>
            <button
                className='btn btn-primary'
                onClick={(event) => { increment() }}
            >
                Incrementar + 1
            </button>
            <button
                className='btn btn-primary'
                onClick={(event) => { incrementPlusBy_5() }}
            >
                Incrementar + 5
            </button>
        </>
    )
})
