import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className=" navbar bg-neutral shadow-lg">
            <div className="container mx-auto flex justify-between py-4 px-4">
                <Link to='/'>
                    <div className="flex items-center space-x-2">
                    <FaGithub className='text-3xl'/>
                    <h3 className='font-bold text-lg'>Github Finder</h3>
                    </div>
                </Link>

                <div className='flex items-center space-x-6 font-bold text-lg '> 
                    <Link to='/' className='btn btn-ghost'>Home</Link>
                    <Link to='/about'className='btn btn-ghost'>About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar