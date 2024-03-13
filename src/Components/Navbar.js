import React, { useState } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
    return (
        <>

<nav className="navbar container navbar-expand-lg p-3 mt-0 ">
        <Link className="navbar-brand color-yel" to="/"><strong>S'bai.</strong></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}   id="navbarSupportedContent">
        <div className="navbar-nav ml-auto d-flex flex-row w-100 justify-content-end">
          <ul className="navbar-nav ml-auto ">
          <li className="nav-item mr-5">
              <Link className="nav-link btn  ml-5  color-yel" to="/">Home</Link>
            </li>
            <li className="nav-item active mr-5">
              <Link className="nav-link btn  mr-5  color-yel" to="/Portfolio">Portfolio</Link>
            </li>
            <li className="nav-item mr-5">
              <Link className="nav-link btn  mr-5  color-yel" to="/About">About</Link>
            </li>
            <li className="nav-item mr-5">
              <Link className="nav-link btn  ml-5  color-yel" to="/Contact">Contact</Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
</>
)
}
