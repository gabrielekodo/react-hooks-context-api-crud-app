import React from 'react'
import { Link } from 'react-router-dom'

export const Heading = () => {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-0">
            <div className="container">
                <Link to="/" className="navbar-brand">Our Users</Link>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/add" className="nav-link">
                                <button type="submit" className="btn btn-primary">Add User</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                <button type="submit" className="btn btn-primary">About</button>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>


        </nav>

    )
}
