import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/components/AuthContext';

export const Navbar = () => {

    const {username, logout} = useContext(AuthContext)
    

    const navigate = useNavigate();

    const onLogout = ()=>{
        logout()
        navigate('/login', {
            replace: true
        });
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 ">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink
                            className={(event)=> `nav-item nav-link ${event.isActive ? 'active':''}` }
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>
                        <NavLink
                            className={(event)=> `nav-item nav-link ${event.isActive ? 'active':''}` }
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className={(event)=> `nav-item nav-link ${event.isActive ? 'active':''}` }
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className='nav-item nav-link text-primary'>
                            {username?.username}
                        </span>
                        <button className='nav-item nav-link btn'
                            onClick={(event)=> {onLogout(event)}}
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </nav>
        </>
    )
}
