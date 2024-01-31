
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Form from './Components/form'
import { Link, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <nav>
      <Link id='Home' to='/'>Home</Link>
        <Link id='about' to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link id='form' to='/Form'>Form</Link>

      </nav>

            

      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/about' element= {<About />}/>
        <Route path='/contact' element= {<Contact />}/>
        <Route path='/Form' element= {<Form />}/>
      </Routes>
    </>

    
  )
}

export default App