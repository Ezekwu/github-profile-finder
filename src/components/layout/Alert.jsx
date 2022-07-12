import React from 'react'
import {FaTimesCircle} from 'react-icons/fa'
import AlertContext from '../../context/alert/AlertContext'
import { useContext } from 'react'

const Alert = () => {
    const {alert} = useContext(AlertContext)
    return (
        alert !== null && (
            <div className='p-2  bg-gray-200 w-60 lg:w-80 mb-8 rounded shadow-lg'>
                <div className='flex  space-x-4 items-center rounded border-solid border-4 border-l-red-500  text-black px-4  '>
                    <FaTimesCircle className='text-red-500 text-2xl'/>
                    <div>
                        <h3 className='font-bold'>Error</h3>
                        <p className='text-gray-400 text-sm'> please type in something</p>
                    </div>
                </div>
            </div>
        )
    )
}

export default Alert