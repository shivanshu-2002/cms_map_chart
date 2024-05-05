import React, { useState } from 'react'
import { Link ,useNavigate,useParams} from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/userReducer';
import 'react-toastify/dist/ReactToastify.css';
import { showToastMessage } from '../util/helper';
import Sidebar from '../common/Sidebar';


const Edit = () => {
   const {id} = useParams();
   const users = useSelector((state: any) => state.users)
   const existingUser = users.filter((user: any) => user.id == id);
   const {name,email,number}=existingUser[0];

   const [uname,setName]= useState(name);
   const [uemail,setEmail]= useState(email);
   const [unumber,setNumber]= useState(number);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleUpdate = (event:any)=>{
           event.preventDefault();
           dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail,
            number:unumber
           }))
          navigate('/')
          showToastMessage("Message Update ...!", "true");
      }
  return (
    <>
         <div className="container">
        <div className='mt-1 text-1xl text-black bg-slate-100 p-4'>
          PLEASE MAKE THE CHANGES IN THE CONTACT
        </div>
        <div className='flex sm:flex-row flex-col sm:h-[100vh]'>
          <div className='h-[100%] bg-slate-100 p-7'>
            <Sidebar />
          </div>
          <div className='mx-auto p-0'>
            {/* form */}
            <div className='bg-slate-200 p-9 m-10 md:ml-[-150px]  place-content-center rounded-md '>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div className=''>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={uname}
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
                    value={uemail}
                    onChange={e => setEmail(e.target.value)}
                    className='w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-violet-300'
                    required
                  />
                </div>
                <div className=''>
                  <input
                    type='number'
                    name='number'
                    value={unumber}
                    placeholder='Phone Number'
                    onChange={e => setNumber(e.target.value)}
                    className='w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-violet-300'
                    required
                  />
                </div>
                <div className='bg-violet-500'>
                  <input
                    type='submit'
                    value='UPDATE'
                    className='w-full p-2 text-black font-semibold bg-slate-300 hover:bg-violet-600  focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer'
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

export default Edit

