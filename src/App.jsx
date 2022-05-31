import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

import './App.css';
import dark from './images/dark.jpg';
import Trees from './images/Trees.png'
import Gretche from './images/Gretchen.jpg'
import black from './images/black.jpg'
import schrank from './images/schrank.jpg'
import schlaf from './images/Schlafzimmer.jpg'
import street from './images/Straße.jpg'
import sky from './images/sky.jpg'
import two from './images/two.jpg'
import border from './images/border.jpg'



function App() {
    
    const ref = useRef();
    return(
        <div id="App">
        <Parallax pages={8} ref={ref}>
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
            speed={1}
            >
                <h3 id="h3">Untergang Gretchens</h3>
            </ParallaxLayer>
            <ParallaxLayer id="gretchen"
            offset={0.3}
            speed={1}
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
                <h3 id="h2">"Meine Ruh ist hin, <br></br>
                            Mein Herz ist schwer; <br></br>
                            Ich finde sie nimmer <br></br>
                            und nimmermehr." - <br></br>Gretchen,  Gretchens Stube</h3>
            </ParallaxLayer>
            
            <ParallaxLayer
            offset={1.2}
            speed={0.5}
            factor={1}
            style={{ 
                backgroundColor: `black`,
                backgroundSize: 'cover',
                textAlign: 'center' , position: 'fixed', top: '20%'
            }}
            ><h3 >Gretchen musste vieles Durchmachen bis sie verrückt im Gefängnis landet.<br></br>
                Ihre Naivität und Kindlichkeit waren Gründe ihres Verderbens...
            </h3></ParallaxLayer>
            <ParallaxLayer
            offset={3}
            speed={0.5}
            factor={2}
            id="street"
            style={{ 
                backgroundImage: `url(${street})`,
                backgroundSize: 'cover',
                
            }}
            >
            </ParallaxLayer>
            <ParallaxLayer
            offset={3.3}
            horizontal={false}
            speed={1}
            style={{
                textAlign: 'center',
            }}>
                <h3 id="h4">Gretchen wurde in einer Straße gefangen und wurde von einem Schrank gefangen.</h3>
            </ParallaxLayer>
            <ParallaxLayer
            offset={4}
            speed={0.5}
            factor={2}
            
            style={{ 
                backgroundImage: `url(${schlaf})`,
                backgroundSize: 'cover'
            }}>
            </ParallaxLayer>
            <ParallaxLayer
            offset={4.5}
            speed={1}
            factor={2}
            style={{
                backgroundImage: `url(${schrank})`,
                backgroundSize: '30% auto',
                left: '15%',
            }}
            ></ParallaxLayer>
            <ParallaxLayer
            offset={4.5}
            speed={1}
            factor={2}
            style={{
                textAlign: 'center',
            }}
            >
                <h3 id="h4">fdd ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, sunt omnis! <br></br>Vitae cupiditate pariatur at repellendus? Doloremque, non. Delectus autem itaque natus ipsam corrupti consequuntur sint soluta sunt ea amet.</h3>
            </ParallaxLayer>
        </Parallax>
    </div>
    );
}


export default App;
