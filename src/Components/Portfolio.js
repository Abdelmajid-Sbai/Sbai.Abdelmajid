import React, { useState } from 'react';
import {Link} from 'react-router-dom'
export default function Portfolio() {
    
  
    return (
    <>
            <div className="container pt-5 pb-5 d-flex  ">   
            <div className="row">
                <div className="col-lg-8  mt-3">
                <h4><strong>About My Projets</strong></h4>
                <p className="">My projets in developpement digital web full stack </p>
                </div>
                <div className="col-lg-12  mt-3">
                <div className="row">
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

                
        
        
    </>
    
    )

    }