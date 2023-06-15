import React from 'react'
import { HeroesList } from '../components/HeroesList';

export const DcPage = () => {

  const publisher = 'DC Comics';

  return (
    <>
      <h1>CD Comics</h1>
      <hr />
      <HeroesList publisher={publisher} />
    </>
  )
}
