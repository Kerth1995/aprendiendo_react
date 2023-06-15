import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = (props) => {

    const { hero } = props
    const heroImgUrl = `/assets/heroes/${hero.id}.jpg`
    return (
        <>
            <div className='col'>
                <div className='card my-2'>
                    <div className='row no-gutters'>
                        <div className='col-4'>
                            <img className='card-img' src={heroImgUrl} alt={hero.superhero} />
                        </div>
                        <div className='col-8'>
                            <div className='cadr-body'>
                                <h5 className='card-tittle'>{hero.superhero}</h5>
                                <p className='card-text'>{hero.alter_ego}</p>
                                {
                                    (hero.alter_ego !== hero.characters) && (<p>{hero.characters}</p>)
                                }
                                <p className='card-text'>
                                    <small className='text-muted'>{hero.first_appearance}</small>
                                </p>

                                <Link to={`/heroe/${hero.id}`}>
                                    Más...
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

        </>
    )
}
