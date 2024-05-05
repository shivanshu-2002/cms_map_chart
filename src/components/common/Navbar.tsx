import React from 'react'
import { Route, Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='width-full bg-slate-100 h-[4rem] flex justify-center items-center'>
            <div>
                <Link to="/" relative="path">
                    <span className='text-purple-500 text-[2rem] font-bold '>Baba </span>
                    <span className='text-slate-800 text-[2rem]'>ToDo Application</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar