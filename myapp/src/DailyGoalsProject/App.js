import Home from './Home';
import Header from './Header';
import{BrowserRouter,Route,Routes} from "react-router-dom";
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import User from './User';

function App() {
  return (
    <BrowserRouter>
  <div>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user/:id' element={<User/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    
    <Footer/>
  </div>
  </BrowserRouter>
  );
}



export default App;
