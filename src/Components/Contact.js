import React, { useState } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'
export default function Contact() {
    
  
    return (
    <>
    <div className="container py-5" >
      <h1><b>Contact Me</b></h1>
      <form className='col-lg-6'>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>

        <div className='container info  mt-3   pt-5 pb-5'>
      <div className='col-lg-6 w-50'>
        <h3>Or contact me with :</h3>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Phone number : 0608146796</label>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Email : sbai.abdelmajid2003@gmail.com</label>
        </div>
        </div>

      </div>
      </form>
      

      
    </div>

   
    
    </>
    )

}