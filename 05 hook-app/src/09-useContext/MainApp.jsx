import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { UserProvider } from './context/UserProvider'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { Navbar } from './Navbar'

export const MainApp = () => {
    return (
        <>
            <UserProvider>
                <div>MainApp</div>
                <hr />

                <Navbar />
                <hr />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/*' element={<Navigate to={'/'} />} />
                </Routes>
            </UserProvider>
        </>
    )
}
