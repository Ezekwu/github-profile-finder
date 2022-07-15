import React from 'react'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'


const ReposItem = ({ repo }) => {

    const {
        name,
        
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo
    return (
        <div className='bg-base-200 hover:bg-base-300 p-8 rounded mb-2'>
            <div className='text-xl mb-3 hover:text-purple-300' >
                <a href={html_url} target='_blank' rel="noreferrer">
                <FaLink className='inline mr-2'/>
                {name}
            
                </a>
                
            </div>
            <p className='mb-4'>{description}</p>
            <div className='flex gap-4'>
                <div className='label text-green-400 green-bg'>
                    <FaEye className='inline mr-2'/>
                    {watchers_count}
                </div>

                <div className='label text-yellow-400 yellow-bg'>
                    <FaStar className='inline mr-2'/>
                    {stargazers_count}
                </div>

                <div className='label text-red-400 red-bg'>
                    <FaInfo className='inline mr-2'/>
                    {open_issues}
                </div>

                <div className='label text-blue-400 blue-bg'>
                    <FaUtensils className='inline mr-2'/>
                    {forks}
                </div>
            </div>

        </div>
    )
}

export default ReposItem