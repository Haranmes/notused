import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';


import '../App.css'

import Gretche from '../images/Gretchen.jpg'
import black from '../images/black.jpg'
import faust from '../images/Faust.png'
import gretchen from '../images/Gretchen.png'
import street from '../images/street.jpg'
import two from '../images/two.jpg'
import rain from '../images/rain.mp4'
import cell from '../images/GretchenInKerker.jpg'
import kussen from '../images/GretchenFaustKuss.jpg'

const Landing = () => {
    
    const ref = useRef();
    return(
        
        <div id="Landing"> 
        
        <Parallax pages={11} ref={ref}>
            <ParallaxLayer id="chaos"
            offset={0}
            speed={0.5}
            factor={1}
            style={{
                backgroundImage: `url(${two})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'black'
            }}
            >
                 <div className="fog-container">
                    <div className="fog-img fog-img-first"></div>
                    <div className="fog-img fog-img-second"></div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
            style={{ textAlign: 'center', 
                top: '6%',
                left: '10%'
            }}
            speed={0.7}
            >
                <h3 id="h3">Untergang Gretchens</h3>
            </ParallaxLayer>
            <ParallaxLayer id="gretchen"
            offset={0.3}
            speed={0.7}
            factor={2}
            style={{
                backgroundImage: `url(${Gretche})`,
                backgroundSize: '20% auto',
                left: '15%',
            }}
           
            ></ParallaxLayer>
            <ParallaxLayer
            offset={0.98}
            speed={0.5}
            factor={2}
            style={{ 
                backgroundImage: `url(${black})`,
                backgroundSize: 'cover',
                textAlign: 'center' , 
                
            }}
            > 
               
                <h3 id="h2" style={{left: "30%"}}>
                    "Meine Ruh ist hin, <br></br>
                    Mein Herz ist schwer; <br></br>
                    Ich finde sie nimmer <br></br>
                    und nimmermehr." - <br></br>Gretchen,  Gretchens Stube <br></br>V.3374-3377
                </h3>
                            
            </ParallaxLayer>
            <ParallaxLayer
            offset={2}
            speed={0.5}
            factor={2}
            style={{
                background: 'linear-gradient(to bottom, #000, #53516e)',
                backgroundSize: 'cover'
            }}>
            </ParallaxLayer>
            <ParallaxLayer
            offset={2.6}
            speed={0.5}
            style={{
                backgroundSize: 'contain',
                top: "10%",
                height:"20% auto",
                borderWidth: '1 solid #fff'
            }}>
                 <video loop autoPlay muted id="video">
                    <source
                        src={rain}
                        type={"video/mp4"}
                    />
                    Your browser does not support the video tag.
                </video>
            </ParallaxLayer>
            <ParallaxLayer
            offset={3.5}
            speed={0.7}
            style={{ 
                
                
                textAlign: 'center' ,
            }}
            >
                
                <h3 id="h1" style={{display: "grid", placeItems: "center"}}>Gretchen musste vieles Durchmachen bis sie verrückt im Gefängnis landet.<br></br>
                            Es begann alles mit ein vermeindliches Treffen...
                </h3>
            </ParallaxLayer>
            <ParallaxLayer
            offset={3.7}
            speed={0.7}
            style={{
                backgroundImage: `url(${cell})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center'
            }}></ParallaxLayer>
            <ParallaxLayer
            offset={5}
            speed={0.5}
            factor={2}
            id="street"
            style={{ 
                backgroundImage: `url(${street})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                
            }}>
               
            
                
            </ParallaxLayer>
            <ParallaxLayer
            offset={5.89}
            speed={0.7}
            style={{
                left: "30%",
            }}
            >
                 <h id="h4" style={{fontSize: "4rem", textAlign: "center", }}>Eines Tages auf einer Straße... </h>
            </ParallaxLayer>
            <ParallaxLayer
            offset={5.9}
            speed={0.5}
            style={{
                backgroundImage: `url(${faust})`,
                position: 'absolute',
                left: '30%',
               
            }}> 
                <div className="bubble2" style={{left: '24%', top: "30%", textAlign: "center", }}>
                    <h style={{color: "white", fontFamily: 'Soft Compound'}}>O schönes Weib, kann ich ihnen Geleit anbieten?</h>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
            offset={5.9}
            speed={0.5}
            style={{
                backgroundImage: `url(${gretchen})`,
                position: 'absolute',
                left: '15%'
            }}>
                <div className="bubble2" style={{left: '10%', top: "30%", textAlign: "center", }}>
                    <h style={{color: "white", fontFamily: 'Soft Compound'}}>Ich muss ablehnen werter Herr. Ich bin weder Fräulein, weder schön...</h>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
            offset={6.7}
            speed={0.5}
            factor={0.5}
            style={{
                backgroundColor: 'black',
                backgroundSize: 'cover'
            }}>
                <h style={{color: 'white', fontSize: "4rem", display: "grid", placeItems: "center"}}>Doch dann soll etwas schicksalhaftes geschehen...</h>
            </ParallaxLayer>
            <ParallaxLayer
            offset={6.99}
            speed={0.5}
            factor={2}
            style={{
                backgroundColor: "#ff99cc",
                background: "linear-gradient(to right, rgba(255, 153, 204, 0.5), rgba(255, 102, 102, 0.6))",
            }}>
            </ParallaxLayer>
            <ParallaxLayer
            offset={7}
            speed={0.7}
            style={{
                left: "30%"
            }}>
                <h id="h4" style={{fontSize: "4rem", textAlign: "center", }}>Im Gartenhäuschen der Nachbarin</h>
            </ParallaxLayer>
            <ParallaxLayer
            offset={7.2}
            speed={0.7}
            style={{
                left: "31%"
            }}>
                <div id="hearts-alpaca" className="hearts">
                    <div className="heart"></div>
                    <div className="heart"></div>
                    <div className="heart"></div>
                    <div className="heart"></div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
            offset={7.5}
            speed={0.7}
            style={{
                backgroundImage: `url(${kussen})`,
                left: "30%"
            }}>
            </ParallaxLayer>
            <ParallaxLayer
            offset={7.6}
            speed={0.7}
            style={{
                left: "40%"
            }}
            >
                <h id="h4" style={{fontSize: "1rem", textAlign: "center", color: "white"}}>Jetzt nimmt das Geschehen seinen Lauf...</h>
            </ParallaxLayer>
            <ParallaxLayer
            offset={8.6}
            speed={0.5}
            style={{
                color: "white",
                textAlign: "center",
                fontSize: "5rem"
            }}>
                <h>Es geht weiter im nächstem Kapitel...</h>
            </ParallaxLayer>
        </Parallax>
        
    </div>
    );
}





export default Landing;