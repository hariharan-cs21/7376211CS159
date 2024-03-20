import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({ children }) => {
    return (
        <>
            <div className='flex justify-around'>
                <Link to="/" >Home</Link>
                <Link to="/register" >Register</Link>
                <Link to="/login" >Login</Link>

                <Link to="/product" >Products</Link>

            </div>
            {children}
        </>
    )
}
