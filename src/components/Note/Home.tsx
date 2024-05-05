import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../common/Sidebar';
import Cards from './Cards';


const Home = () => {
  const users = useSelector((state: any) => state.users)

  return (
    <div className='h-[100vh]'>
      <div className='mt-1 '>
        <div className='bg-slate-100 p-4'>
          <Link to="/add" className='bg-slate-200 w-auto sm:w-40 rounded-md p-3 text-[1rem]'>ADD CONTACT</Link>
        </div>
      </div>
      {/* Side bar and card */}
      <div className='flex sm:flex-row flex-col h-[100%]'>
        {/* first element  sidebars*/}
        <div className='bg-slate-100 p-7'>
          <Sidebar />
        </div>
        {/* second element cards */}
        <div className='flex flex-col w-full'>
          {users.length === 0 ? (
            <div className='m-1 mt-1 text-2xl text-white'>
              NOTHING TO SHOW - PLEASE ADD CONTACTS
            </div>
          ) : (
            <div className='flex sm:flex-row flex-col  items-center justify-center sm:gap-[30px] py-10 flex-wrap ml-5'>
              {/* displaycards */}
              {users.map((user: any, index: number) => (
                <Cards cont={user} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Home








