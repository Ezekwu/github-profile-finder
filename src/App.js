

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User';
import NotFound from './pages/NotFound'
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './components/layout/Alert';

function App() {
  return (

    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="App flex flex-col justify-between h-screen ">
            <Navbar />
            <main className='py-10 container mx-auto px-4 '>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/user/:login' element={<User />}/>
                <Route path='/notfound' element={<NotFound />}/>
                <Route path='/*' element={<NotFound />}/>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
    
    );
}

export default App;

