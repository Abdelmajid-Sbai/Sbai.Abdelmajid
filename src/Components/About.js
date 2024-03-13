import React, { useState } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'
export default function About() {
    
  
    return (
        <>
        <div className="container pt-5 pb-5 d-flex pt-5 ">   
            <div className="row">
                <div className="col-lg-8  mt-3">
                <h4 className=" pt-5 "><strong>About Me</strong></h4>
                <h5><b>Profile</b></h5>
                <p className="storie">My name is Abdelmadjid S'bai, I am 20 years old and I am currently a student at the ISTA NTIC Tangier Vocational Training Institute, specialized in the development of websites, by deferent programming languages such as HTML, CSS, JAVASCREPT, PHP, REACT, LARAVEL. I am currently studying at the Faculty of Legal,
                 Economic and Social Sciences, Tangier, with an option in economics and management.</p>
                </div>
                <div className="col-lg-12  mt-3">
                <h5><b>Formation</b></h5>
                <div className="row">
                    <div className="card card1 col-lg-5 m-1  p-3">
                       <div className="img">
                       <h5 class="card-title ">Faculte des sciences juridique economique et social</h5>
                       <div className='row'>
                       <img class="card-img-top  col-6" id='card_img' src={process.env.PUBLIC_URL+"/myphotos/fsjest.jpeg"}   alt="Card image cap"/>
                       <p className=' col-6'>Bachelor's Degree in Economics and Management. Ongoing training in a faculty of legal, economic and social sciences</p>
                       </div>
                       </div>
                        <div class="card-body">
                            <h5 class="card-title">2021- Present</h5>
                            <p class="card-text">Licence Economique et gestion</p>
                        </div>
                    </div>

                    <div className="card card1 col-lg-6 m-1 p-3 ">
                       <div className="img">
                       <h5 class="card-title ">Ismontic tanger</h5>
                       <div className='row'>
                       <img class="card-img-top col-5 "  id='card_img' src={process.env.PUBLIC_URL+"/myphotos/ismontic.jpeg"}  alt="Card image cap"/>
                       <p className='col-7'>Diploma in course as a technician specialized in full stack web digital development /Ongoing training in 
                       an Institute specialized in Offshoring and New Information and Communication Technologies.</p>
                       </div>
                       </div>
                        <div class="card-body">
                            <h5 class="card-title">2022- Present</h5>
                            <p class="card-text">Technician specialized in full stack web digital development</p>
                        </div>
                    </div>

                </div>
                
                </div>
            </div>
        </div>

                
        
        <div className="container pt-5  ">   
        <div ><h5><b>Diplomes</b></h5></div>
            <div className="d-flex">
                <div className="row">
                    <div className="col-lg-12 m-1   p-3">
                    <p className="storie p-3 m-0">Baccalaureate 2021 <br/>
                    <span>Mention : Bien</span><br/>
                    Option : Physics sciences  </p>
                    </div>

                    <div className="col-lg-12 m-1  p-3">
                    <p className="storie m-0 p-3">Baccalaureate Free  2022 <br/>
                    <span>Mention : Assy Bien</span><br/>
                    Option : sciences de la vie et de la Terre </p>
                    </div>

                </div>
            </div>
        </div>
        </>
    )

}