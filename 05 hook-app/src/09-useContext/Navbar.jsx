import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" aria-current="page" to={'/'} style={{ color: "white" }}>App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            
                            <NavLink style={{color: "white"}} to={'/'} className={(args) => `nav-link ${args.isActive ? 'active' : ''}`}>Home</NavLink>
                            <NavLink style={{color: "white"}} to={'/about'} className={(args) => `nav-link ${args.isActive ? 'active' : ''}`}>About</NavLink>
                            <NavLink style={{color: "white"}} to={'/login'} className={(args) => `nav-link ${args.isActive ? 'active' : ''}`}>Login</NavLink>

                            {/**
                             *`nav-link nav-item ${args.isActive ? 'active' : ''}`
                             <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/'} style={{color: "white"}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/about'} style={{color: "white"}}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/login'} style={{color: "white"}}>Login</Link>
                            </li>  
                             
                            */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
