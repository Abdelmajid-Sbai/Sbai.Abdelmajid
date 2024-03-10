import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,Switch} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import Contact from './Components/Contact';



function App() {
  return (
    <>
    <Navbar/>
    

    <Routes>
        
        <Route   path='/' element={<Home/>}  />
        <Route   path='/About' element={<About/>}  />
        <Route   path='/Portfolio' element={<Portfolio/>}  />
        <Route   path='/Contact' element={<Contact/>}  />

    </Routes>

    <Footer/>


    </>
  );
}

export default App;
