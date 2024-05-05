import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Sidebar = () => {
    const navigate = useNavigate();
    const handleClick = ()=>{
          navigate('/')
    }
  return (
    <div className='bg-slate-200  p-5 rounded my-auto'>
          <div className='text-2xl'>
            <div className='cursor-pointer'>
                <button onClick={handleClick}><div className='text-purple-500'>CONTACTS</div></button>
            </div>
          </div>
    </div>
  )
}

export default Sidebar