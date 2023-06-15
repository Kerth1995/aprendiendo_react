import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
  const [counter, setCounter] = useState(100);

  const increment = useCallback(
    () => {
      setCounter((currentCounter) => currentCounter + 1);
    },
    [],
  )

  const incrementPlusBy_5 = useCallback(
    (newValue) => {
      setCounter((currentCounter) => currentCounter + newValue);
    },
    [],
  )

  return (
    <>
      <h1>useCallBack Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={(event) => { increment() }} incrementPlusBy_5={(event) => { incrementPlusBy_5(5) }} />

    </>
  )
}
