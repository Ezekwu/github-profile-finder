import React from 'react'
import { FaCodepen, FaStore, FaUserFriends, FaUsers, FaLink, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Loader from '../components/layout/Loader'
import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import GithubContext from '../context/github/GithubContext'
import ReposList from '../components/repos/ReposList'

const User = () => {
    const { getUser, user, getUserRepos, repos, loading } = useContext(GithubContext)
    const params = useParams()
    

    useEffect(() =>{
        getUser(params.login)
        getUserRepos(params.login)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        } = user

    if(loading){

        return <Loader />

    } else{
        return (
            <div className='text-gray-200 w-full'>
                <Link to='/'className='btn btn-ghost mb-6'> BACK TO SEARCH</Link>
                <div className='flex flex-col mb-6  gap-10 lg:flex-row'>
                    <div className='image-container shadow-2xl  w-full md:w-96 lg:w-96 xl:w-96 ' >
                        
                        <img src={avatar_url} alt="" className='rounded-md w-full md:w-96 lg:w-96 xl:w-96 h-full profile-img'/>
                        <div className='absolute bottom-8 left-8 ' >
                            <h2 className='font-bold text-lg'>{name}</h2>
                            <h4>{login}</h4>
                        </div>
                    </div> 
                    
                    <div className='w-full' >
                        <div className='font-bold flex space-x-4 items-center mb-3'> 
                            <h1 className=' text-3xl'>{name}</h1>
                            <h3 className='label  text-sm green-bg  text-green-500'>{type}</h3>
                            {hireable && <h3 className='label blue-bg'>Hireable</h3>}
                        </div>

                        <p className='mb-8'>{bio}</p>

                        <a href={html_url} target='_blank' rel="noreferrer" className='btn btn-outline text-gray-200 hover:bg-gray-200 mb-8'>VISIT GITHUB PROFILE</a>

                        <div className='shadow-md p-2'>
                            <div className='social flex flex-col md:flex-row   '>
                                { location && <div className=' p-3 pr-8 pl-6 w-full'>
                                                <div className='text-gray-400 mb-2 flex gap-2 items-center'>
                                                    <i className="fa-solid fa-location-dot "></i>
                                                    <h3 className=''>location</h3>
                                                </div>
                                                <p className='font-bold'>{location}</p>
                                            </div> }
                                
                                {blog && <div className=' p-3 pr-8 pl-6 w-full'>
                                            <div className='text-gray-400 mb-2 flex gap-2 items-center'>
                                                <FaLink />
                                                <h3 className=''>Website</h3>
                                            </div>
                                            <a href={`https://${blog}`} target='_blank' rel="noreferrer"className='font-bold'>{blog}</a>
                                        </div> }

                                {twitter_username && <div className=' p-3 pr-8 pl-6 w-full'>
                                    <div className='text-gray-400 mb-2 flex gap-2 items-center'>
                                        <FaTwitter />
                                        <h3 className=''>twitter</h3>
                                    </div>
                                    <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel="noreferrer" className='font-bold'>@{twitter_username}</a>
                                </div>  }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shadow-md p-2 mb-6'>
                        <div className=' social p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                            <div className=' p-4 flex items-center justify-between '>
                                <div >
                                    <h3 className='text-gray-400'>Followers</h3>
                                    <h2 className='text-3xl font-bold'>{followers}</h2>
                                </div>
                                <FaUsers className='text-4xl text-blue-400' />
                            </div>

                            <div className=' p-4 flex items-center justify-between '>
                                <div >
                                    <h3 className='text-gray-400'>Following</h3>
                                    <h2 className='text-3xl font-bold'>{following}</h2>
                                </div>
                                <FaUserFriends className='text-4xl text-purple-400' />
                            </div>

                            <div className=' p-4 flex items-center justify-between '>
                                <div >
                                    <h3 className='text-gray-400'>Public Repos</h3>
                                    <h2 className='text-3xl font-bold'>{public_repos}</h2>
                                </div>
                                <FaCodepen className='text-4xl text-green-400' />
                            </div>

                            <div className=' p-4 flex items-center justify-between '>
                                <div >
                                    <h3 className='text-gray-400'>Public Gists</h3>
                                    <h2 className='text-3xl font-bold'>{public_gists}</h2>
                                </div>
                                <FaStore className='text-4xl text-yellow-400' />
                            </div>
                        </div>
                    
                </div>
                <div>
                    <ReposList repos={repos}/>
                </div>
            </div>
        )
    }
    
}

export default User