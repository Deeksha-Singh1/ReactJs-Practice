import React from 'react'
import { BrowserRouter as Router,
  Route,
  Link,
  Routes} from 'react-router-dom'  ;

const Routing = () => {
  return (
    <div>
      <Router>
        <nav>
          <ol>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>
          </ol>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>

      </Router>


    </div>
  )
}

function Home(){
  return <h1>Welcome Home</h1>
}

function About(){
  return <h1>Hello ABout</h1>
}

function ContactUs(){
  return <h1>Hello Contact us</h1>
}

export default Routing