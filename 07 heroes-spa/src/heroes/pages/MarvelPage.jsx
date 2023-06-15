import React from 'react'
import { HeroesList } from '../components/HeroesList';

export const MarvelPage = () => {

  let publisher = 'Marvel Comics'

  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />
      <HeroesList publisher={publisher} />
    </>
  )
}
