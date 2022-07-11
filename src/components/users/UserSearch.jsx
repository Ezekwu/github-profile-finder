import React from 'react'
import { FaSearch } from 'react-icons/fa'
const UserSearch = () => {
    return (
        <div className='flex flex-col  space-x-6 w-4/5  lg:flex-row '>
            <form className='flex items-center'>
                <input type="text" className='input bg-gray-200 text-black rounded-r-none lg:w-80'/>
                <button className='btn rounded-l-none w-20' ><FaSearch /> </button>
            </form>
            <button className='btn btn-ghost'>clear</button>
        </div>
    )
}

export default UserSearch