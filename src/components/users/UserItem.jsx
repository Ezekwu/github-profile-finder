import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user:{login, avatar_url} }) => {
    return (
        <div className='user-item flex items-center space-x-3 shadow-md p-5 rounded-lg'>

            <div className='w-14 h-14 '>
                <img src={avatar_url} alt="" className='rounded-full' />
            </div>

            <div className='flex flex-col'>
                <h2 className='font-bold'>{login}</h2>
                <Link to={`/user/${login}`} className='font-light text-sm'>View Profile</Link>
            </div>
            
        </div>
    )
}

export default UserItem