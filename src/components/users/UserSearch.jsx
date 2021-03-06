import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

const UserSearch = () => {
    const [text, setText] = useState('');
    const { users, searchUsers, clearUsers} = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === ''){
            setAlert('please type something' , 'Error')
        } else{
            searchUsers(text)
            setText('')
        }
    }
    return (
        <div className='flex flex-col  space-x-6 w-4/5 items-start mb-8 lg:flex-row '>
            <form className='flex items-center '
            onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='search'
                className='input bg-gray-200 text-black w-48 rounded-r-none md:w-80 lg:w-80 '
                value={text}
                onChange={handleChange}/>
                <button className='btn rounded-l-none w-16 md:w-20 lg:w-20 ' type='submit' ><FaSearch /> </button>
            </form>

            {users.length > 0 && <button className='btn btn-ghost' onClick={clearUsers}>clear</button>}
            
        </div>
    )
}

export default UserSearch