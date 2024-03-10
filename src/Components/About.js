import React, { useState } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'
export default function About() {
    
  
    return (
        <>
        <div className="container pt-5 pb-5 d-flex  ">   
            <div className="row">
                <div className="col-lg-8  mt-3">
                <h4><strong>About Me</strong></h4>
                <h5><b>Profile</b></h5>
                <p className="storie">Je m’appelle Abdelmadjid S’bai ,j’ai 20 ans et j suis actuellement étudiant a l’institut de Formation Professionnelle ISTA NTIC Tanger , spécialise dans le développement de sites web ,de défèrent langage de programmation comme HTML ,CSS , JAVASCREPT , PHP , REACT , LARAVEL .
                On plus de sa actuellement je suis étudient a la faculté des sciences juridique économiques et social Tanger ,option économique et gestion .
                </p>
                </div>
                <div className="col-lg-12  mt-3">
                <h5><b>Formation</b></h5>
                <div className="row">
                    <div className="card card1 col-lg-5 m-1  p-3">
                       <div className="img">
                       <h5 class="card-title ">Faculte des sciences juridique economique et social</h5>
                       <div className='row'>
                       <img class="card-img-top  col-6" id='card_img' src={process.env.PUBLIC_URL+"/myphotos/fsjest.jpeg"}   alt="Card image cap"/>
                       <p className=' col-6'>hi</p>
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
                       <img class="card-img-top col-6 "  id='card_img' src={process.env.PUBLIC_URL+"/myphotos/fsjest.jpeg"}  alt="Card image cap"/>
                       <p className='col-6'>hello</p>
                       </div>
                       </div>
                        <div class="card-body">
                            <h5 class="card-title">2022- Present</h5>
                            <p class="card-text">Technicien spesialiee en developpement digitale option full stack</p>
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
                    <p className="storie p-3 m-0">Bacaloreat 2021 <br/>
                    <span>Mention : Bien</span><br/>
                    Option : sience physique et chemique  </p>
                    </div>

                    <div className="col-lg-12 m-1  p-3">
                    <p className="storie m-0 p-3">Bacaloreat Libre 2022 <br/>
                    <span>Mention : Assy Bien</span><br/>
                    Option : sience de la vie et de la tere </p>
                    </div>

                </div>
            </div>
        </div>
        </>
    )

}