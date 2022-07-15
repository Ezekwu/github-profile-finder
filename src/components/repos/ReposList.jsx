import React from 'react'

import ReposItem from './ReposItem'

const ReposList = ({ repos }) => {

    return (
        <div className='shadow-md p-4'>
            <h4 className='text-3xl font-bold mb-4'>Latest Repositories</h4>
            {
                repos.length > 1 ?
            repos.map((repo)=>(
                <ReposItem key={repo.id} repo={repo}/>
            )) : <div className='text-center p-20 text-gray-500 text-xl'>
                <h2 >No repositories available </h2>
            </div>
        }</div>
    )
}

export default ReposList