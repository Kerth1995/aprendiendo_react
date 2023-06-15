import React, { memo } from 'react'

export const Small = memo((props) => {
    const {counter} = props;
    console.log('counter from child', counter);
  return (
    <>
        <small>{counter}</small>
    </>
  )
})
