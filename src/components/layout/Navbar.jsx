import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="  bg-neutral shadow-lg ">
            <div className="container mx-auto flex justify-between items-center py-6 px-4 ">
                <Link to='/'>
                    <div className="flex items-center space-x-2">
                    <FaGithub className='text-3xl'/>
                    <h3 className='font-bold text-sm xl:text-xl lg:text-xl md:text-xl'>Github Finder</h3>
                    </div>
                </Link>

                <div className='flex items-center space-x-0 font-bold '> 
                    <Link to='/' className='btn btn-ghost text-xs xl:text-lg lg:text-lg md:text-lg'>Home</Link>
                    <Link to='/about'className='btn btn-ghost text-xs xl:text-lg lg:text-lg md:text-lg'>About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar