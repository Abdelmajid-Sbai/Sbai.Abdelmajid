import React, { useState } from 'react';
import {Link} from 'react-router-dom'
export default function Portfolio() {
    
  
    return (
    <>





            <div className="container pt-5 pb-5 d-flex  ">   

            <div className="row">
            <div className='col-lg-12 newprojet'>
                        
            <div className='container menu1 pb-5'>

            <div className='container '>
            <h3 className='w-100 text-center  titre1  pb-2 mt-5 pt-2'>New projet not finished</h3>
            <li class="horizontal-line mb-5"></li>
            <div className='row'>
                <div className='col-lg-8  p-1'>
                <img  src={process.env.PUBLIC_URL+"/myphotos/newprojet.PNG"} alt="My Photo" className="w-100"/>
                </div>
                    <div className='col-lg-4 pb-3 div-ul bg-dark'>
                    <h5>hi</h5>
                    <ul>
                    <li className='titre'><strong>New city restaurant</strong></li>
                    <li class="horizontal-line"></li>
                    <p className='text-white'>un site web d'un restaurant avec reactJs </p>
                    <li className='text-white'>Accueil</li>
                    <li className='text-white'>Notre menu</li>
                    <li className='text-white'>Contact</li>
                    <li className='text-white'>Reserver une table</li>

                        
                    </ul>
                    <Link className="nav-link btn  ml-5 mt-3  color-yel text-center " to="https://abdelmajid-sbai.github.io/New-City-restaurant">Visite site</Link>
                    </div>

            </div>
            </div>


            </div>
            </div>

                <div className="col-lg-12  mt-3">
                <h4><strong>About My Projets</strong></h4>
                <h5 className="w-100 text-center">My projets in developpement digital web full stack </h5>
                </div>
                <div className="col-lg-12   mt-3">
                <div className="row allprojet">
                    <div className="card col-lg-3 card1  p-0 m-2">
                       <div className="img">
                       <h5 class="card-title p-3">With React</h5>
                       <img class="card-img-top"    src={process.env.PUBLIC_URL+"/myphotos/portfolio.PNG"}  alt="Card image cap"/>
                       </div>
                        <div class="card-body">
                            <h5 class="card-title">2024</h5>
                            <p class="card-text">Portfolio</p>
                            <a href="https://Abdelmajid-Sbai.github.io/Sbai.Abdelmajid" class="btn">Lien to site</a>
                        </div>
                    </div>

                    <div className="card card1 col-lg-3 p-0 m-2">
                       <div className="img">
                       <h5 class="card-title p-3 ">With Laravel</h5>
                       <img class="card-img-top  " src={process.env.PUBLIC_URL+"/myphotos/sitelaravel.PNG"}  alt="Card image cap"/>
                       </div>
                        <div class="card-body">
                            <h5 class="card-title">2024</h5>
                            <p class="card-text">Ecommerce site web</p>
                            <Link className="nav-link btn  ml-5  color-yel" to="/Laravel_site">More details</Link>
                        </div>
                    </div>
                    

                    <div className="card card1 col-lg-3 p-0 m-2">
                       <div className="img">
                       <h5 class="card-title p-3 ">With Wordpress</h5>
                       <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/Capture.PNG"}  alt="Card image cap"/>
                       </div>
                        <div class="card-body">
                            <h5 class="card-title">2024</h5>
                            <p class="card-text">Ecommerce site web Wordpress</p>
                            <Link className="nav-link btn  ml-5  color-yel" to="/Wordpress_site">More details</Link>
                        </div>
                    </div>


                    

                </div>
                
                
                </div>
                
                
            </div>
        </div>




    <div className="container pt-5 pb-5 d-flex  ">   
            <div className="row">
                <div className="col-lg-12  mt-3">
                <h4><strong>About My compétences</strong></h4>
                </div>
                <div className="col-lg-12   mt-3">
                <div className="row allprojet">
                    <div className="card col-lg-3 card2  p-0 m-2 ">
                       <div className="img">
                       <img class="card-img-top"    src={process.env.PUBLIC_URL+"/myphotos/codingimage.jpeg"}  alt="Card image cap"/>
                       </div>
                       <div class="card-body">
                            <h5 class="card-title text-center col-lg-12"><b>Compétences informatiques</b></h5>   
                        </div>
                        <div class="card-body">
                            <div className='d-flex'>
                            <h5 class="card-title col-lg-6 p-1">Langages web :</h5>
                            <p class="card-text col-lg-6 p-1">HTML5,CSS3,PHP5, JAVASCREPT</p>
                            </div>
                        </div>
                        <div class="card-body">
                            <div className='d-flex'>
                            <h5 class="card-title col-lg-6 p-1">Framework :</h5>
                            <p class="card-text col-lg-6 p-1">Laravel, ReactJS, Bootstrap</p>
                            </div>
                        </div>
                        <div class="card-body">
                            <div className='d-flex'>
                            <h5 class="card-title col-lg-6 ">Méthodes d'analyse et modélisation :</h5>
                            <p class="card-text col-lg-6 ">Merise, UML .</p>
                            </div>
                        </div>
                        <div class="card-body">
                            <div className='d-flex'>
                            <h5 class="card-title col-lg-6 p-1">SGBD :</h5>
                            <p class="card-text col-lg-6 p-1">MySQL.</p>
                            </div>
                        </div>
                        <div class="card-body">
                            <div className='d-flex'>
                            <h5 class="card-title col-lg-6 ">Outils informatique:</h5>
                            <p class="card-text col-lg-6 p-1"> Visual Studio, starUML , Figma.</p>
                            </div>
                        </div>
                        <div class="card-body">
                            <div className='d-flex'>
                            <h5 class="card-title col-lg-6 p-1">llogiciel bureautique :</h5>
                            <p class="card-text col-lg-6 p-1"> Excel .</p>
                            </div>
                        </div>
                    </div>


                    <div className="card col-lg-3 h-50 card2 p-0 m-2">
                       <div className="img">
                       <img class="card-img-top"    src={process.env.PUBLIC_URL+"/myphotos/softskills.png"}  alt="Card image cap"/>
                       </div>
                       <div class="card-body ">
                            <h5 class="card-title text-center pb-0  col-lg-12"><b>Soft Skills</b></h5> 
                            <h5 class="card-title  col-lg-12 p-3">Motivation</h5>   
                            <h5 class="card-title  col-lg-12 p-3">responsabilité</h5> 
                            <h5 class="card-title  col-lg-12 p-3">Travaille d'equipe</h5> 
                            <h5 class="card-title  col-lg-12 p-3">Sérieux</h5>
                            <h5 class="card-title  col-lg-12 p-3">Honnête</h5>
                            <h5 class="card-title  col-lg-12 p-3">le respect</h5>
                        </div>
                        
                       

                       
                        
                         
                    </div>


                    <div className="card col-lg-3 card2 h-25  p-0 m-2">
                       <div className="img">
                       <img class="card-img-top "    src={process.env.PUBLIC_URL+"/myphotos/hobies6.jpeg"}  alt="Card image cap"/>
                       </div>
                       <div class="card-body">
                            <h5 class="card-title text-center col-lg-12"><b>Hobbies</b></h5>   
                            <h5 class="card-title col-lg-12 p-3">Drawing</h5>
                            <h5 class="card-title col-lg-12 p-3">Design</h5>
                        </div>
                       
                        
                      
                    </div>


                    

                </div>
                
                
                </div>
                
                
            </div>
        </div>
  
        
        
    </>
    
    )

    }