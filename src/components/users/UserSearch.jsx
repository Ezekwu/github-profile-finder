import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

const UserSearch = () => {
    const [text, setText] = useState('');
    const {users, searchUsers, clearUsers} = useContext(GithubContext)
    
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === ''){
            alert('please type something')
        } else{
            searchUsers(text)
            setText('')
        }
    }
    return (
        <div className='flex flex-col  space-x-6 w-4/5 items-start lg:flex-row '>
            <form className='flex items-center '
            onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='search'
                className='input bg-gray-200 text-black w-60 rounded-r-none  lg:w-80 '
                value={text}
                onChange={handleChange}/>
                <button className='btn rounded-l-none w-20' type='submit' ><FaSearch /> </button>
            </form>

            {users.length > 0 && <button className='btn btn-ghost' onClick={clearUsers}>clear</button>}
            
        </div>
    )
}

export default UserSearch