import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../redux/userReducer'
import { showToastMessage } from './util/helper'


const Cards = (props: any) => {
    const users = useSelector((state: any) => state.users)
    const dispatch = useDispatch();
    const handleDelete = (id: number) => {
        dispatch(deleteUser(id))
        showToastMessage("Message Deleted...!", "error");
    }
    return (
        <div className="bg-white rounded-lg shadow-xl p-4 m-4 ml-10 w-1/4">
        <h2 className="text-xl font-semibold mb-2">{props.cont.name}</h2>
        <p className="text-gray-600 text-sm mb-2">{props.cont.email}</p>
        <p className="text-gray-600 text-sm mb-4">{props.cont.number}</p>
        <div className="flex justify-center space-x-2">
            <button
                onClick={() => handleDelete(props.cont.id)}
                className="bg-slate-200 hover:bg-red-600 text-black px-4 py-2 rounded-md"
            >
                Delete
            </button>
            <Link
                to={`/edit/${props.cont.id}`}
                className="bg-slate-200 hover:bg-purple-600 text-black px-4 py-2 rounded-md"
            >
                Edit
            </Link>
        </div>
    </div>
    
    )
}

export default Cards