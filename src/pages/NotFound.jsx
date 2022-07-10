import {FaHome, FaGithub} from 'react-icons/fa'
import gitimg from '../assets/gitimg.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='hero hero-center '>
            <div className="hero-content  flex flex-col  ">
                <div className='flex  items-center text-center'>
                    <h1 className='text-20xl'>4</h1>
                    <img src={gitimg} alt=""  className='w-36'/>
                    <h1 className='text-20xl'>4</h1>
                </div>
                <h2 className='font-bold text-4xl'style={{
                    'fontSize': '2rem'
                }}>Page Not Found</h2>
                <p>The page you searched might have been removed, had its name <br /> changed or is tempoarily unavailable</p>
                
                <Link to='/'className='btn btn-primary flex items-center space-x-2' >
                    <FaHome />
                    <p>back to home</p>
                </Link>
                
            </div>
            
        </div>
        
    )
}

export default NotFound