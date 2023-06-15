import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { DcPage } from '../pages/DcPage'
import { MarvelPage } from '../pages/MarvelPage'
import { SearchPage } from '../pages/SearchPage'
import { HeroePage } from '../pages/HeroePage'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />
                    <Route path='search' element={<SearchPage/>} />
                    <Route path='heroe/:heroeId' element={<HeroePage />} />

                    <Route path='/' element={<Navigate to={'/marvel'} />} />
                </Routes>
            </div>
        </>
    )
}
