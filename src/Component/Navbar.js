import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({ children }) => {
    return (
        <>
            <div className='flex justify-around bg-gray-200 p-4'>
                <Link to="/" className='text-blue-600 hover:text-blue-800'>Home</Link>
                <Link to="/register" className='text-blue-600 hover:text-blue-800'>Register</Link>
                <Link to="/login" className='text-blue-600 hover:text-blue-800'>Login</Link>
                <Link to="/product" className='text-blue-600 hover:text-blue-800'>Products</Link>
            </div>
            {children}
        </>
    )
}
