import './App.css';
import Home from './DailyGoalsProject/Home';
import Header from './DailyGoalsProject/Header';
import{BrowserRouter,Route,Routes} from "react-router-dom";
import Contact from './DailyGoalsProject/Contact';
import About from './DailyGoalsProject/About';
import Footer from './DailyGoalsProject/Footer';
import User from './DailyGoalsProject/User';

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
