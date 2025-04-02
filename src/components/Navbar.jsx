import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='bg-blue-500'>
            <div className='flex flex-row justify-between'>
                <NavLink to="/">
                    <div>
                        <img src='https://img.freepik.com/free-vector/gradient-coding-logo-template_23-2148809439.jpg?semt=ais_hybrid' width={60} />
                    </div>
                </NavLink>


                <NavLink to="/">
                    <p>Home</p>
                </NavLink>

                <NavLink to="/cart">
                    <div>

                        <FaCartShopping />
                    </div>
                </NavLink>



            </div>

        </div>
    )
}

export default Navbar
