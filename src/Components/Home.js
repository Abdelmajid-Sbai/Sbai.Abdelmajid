
import React, { useEffect, useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';




export default function Home() {
    const [text, setText] = useState('');
  const phrase = "I'm Full stack Developer ";
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= phrase.length) {
        setText(phrase.substring(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0; // Reset currentIndex
        setText(''); // Reset text
      }
    }, 200); // Adjust typing speed here

    return () => clearInterval(intervalId);
  }, []);
  
    return (
           <>
         

        <div className="container home mt-5  mb-5">
            <div className="row ">
                <div className="col-lg-4  m-2   p-3 mt-5" >
                    <h3 >Hello !<span id="h31" > I'm Abdelmajid S'bai</span></h3>
                    <h3><span style={{ color: 'blue', background:"black", }}>{text}</span><span className="text-red">|</span></h3>
                    <a href="/About" class="btn  mt-5">About Me</a>
                    

                    
                </div>
                <div className="col-lg-6 border-2 " id='dev-dev-img'>
                    <div ><button className='game'>Hi</button></div>
                    <div className="myphoto " id='devimage'>
                    <img  src={process.env.PUBLIC_URL+"/myphotos/photo1.jpg"} alt="My Photo" className="image"/>
                    </div>
                   
                </div>
                

            </div>
        </div> 

        <About/>
        <Portfolio/>
        <Contact/>
        
        
        

        

               
           </>
      
      
)
}