import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/userReducer';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { showToastMessage } from './util/helper';
import Sidebar from './Sidebar';

const Add = () => {
  const users = useSelector((state: any) => state.users)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(event: any): any {
    event.preventDefault();
    let val = users.length == 0 ? 0 : users[users.length - 1].id + 1;
    dispatch(addUser({ id: val, name, email, number }))
    navigate('/')
    showToastMessage("Contact Added !", "Success");
  }
  return (
    <>
      <div className="container">
        <div className='mt-1 text-1xl text-black bg-slate-100 p-4'>
          PLEASE FILL THIS FORM
        </div>
        <div className='flex h-[100vh]'>
          <div className='h-[100%] bg-slate-100 p-7'>
            <Sidebar />
          </div>
          <div className='mx-auto p-0'>
            {/* form */}
            <div className='bg-slate-200 p-9 m-10 md:ml-[-150px]  place-content-center rounded-md '>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className=''>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={e => setName(e.target.value)}
                    className='w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-violet-300'
                    required
                  />
                </div>
                <div className=''>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                    className='w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-violet-300'
                    required
                  />
                </div>
                <div className=''>
                  <input
                    type='number'
                    name='number'
                    placeholder='Phone Number'
                    onChange={e => setNumber(e.target.value)}
                    className='w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-violet-300'
                    required
                  />
                </div>
                <div className='bg-violet-500'>
                  <input
                    type='submit'
                    value='Add Contact'
                    className='w-full p-2 text-white font-semibold bg-violet-500 hover:bg-violet-600 rounded-md focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer'
                  />
                </div>
              </form>
            </div>


          </div>
        </div>
      </div>

    </>
  )
}
export default Add