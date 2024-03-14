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
import Wordpress_site from './Components/Wordpress_site';
import Laravel_site from './Components/Laravel_site';



function App() {
  return (
    <>
    <Navbar/>
    
    

    <Routes>
        
        <Route   path='/' element={<Home/>}  />
        <Route   path='/About' element={<About/>}  />
        <Route   path='/Portfolio' element={<Portfolio/>}  />
        <Route   path='/Contact' element={<Contact/>}  />
        <Route   path='/Wordpress_site' element={<Wordpress_site/>}  />
        <Route   path='/Laravel_site' element={<Laravel_site/>}  />

    </Routes>

    <Footer/>


    </>
  );
}

export default App;
