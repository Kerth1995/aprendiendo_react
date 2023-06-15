import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { heroeForm } from '../../globalHooks/heroeForm'
import queryString from 'query-string'
import {HeroCard} from  '../components/HeroCard'
import { getHeroesByName } from '../helpers/getHeroesByName'

export const SearchPage = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const {query = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(query);

  const {searchText, onInputChange, onResetForm} = heroeForm({
    searchText: ''
  });

  const onSearchHandle = ()=>{
    event.preventDefault();
    if(searchText.trim().length <= 1) return;
    navigate(`?query=${searchText}`)
    
  }

  return (
    <>
        <h1>Search heroe</h1>
        <hr />
        <div className="row">
          <div className="col-5">
            <h4>Searchin</h4>
            <hr />
            <form onSubmit={(event) => {onSearchHandle()}}>
              <input type="text" 
                placeholder='Search a heroe'
                className='form-control'
                name="searchText" 
                autoComplete='off'
                value={searchText}
                onChange={onInputChange}
              />

              <button className='btn btn-outline-primary mt-2' 
                type='submit'>
                  Search
              </button>
            </form>
          </div>
          <div className="col-7">
            <h4>Results</h4>
            <hr />

            {
              (query === '')
              ?
              <div className='alert alert-primary'>Search heroe</div>
              : (heroes.length === 0) 
              && <div className='alert alert-danger'>No hereo with name <b>{query}</b></div>
            }
              {
                heroes.map(hero => {
                  return <HeroCard hero={hero} key={hero.id}/>
                })
              }              
          </div>
        </div>
    </>
  )
}
