
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import { useRef } from 'react';

import dark from './images/dark.jpg'
import Gretche from './images/Gretchen.jpg'
import black from './images/black.jpg'
 
function App() {
  const ref = useRef();
    return(
        <div id="App">
        <Parallax pages={5} ref={ref}>
            <ParallaxLayer id="chaos"
            offset={0}
            speed={0.5}
            factor={2}
            style={{
                backgroundImage: `url(${dark})`,
                backgroundSize: 'cover',
            }}
            >
            </ParallaxLayer>
            <ParallaxLayer
            offset={0.3}
            speed={1}
            factor={2}
            style={{
                backgroundImage: `url(${Gretche})`,
                left: '15%'
            }}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'relative',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        
                        width: percentage * 1000,
                        height: percentage * 1000,
                    }}
                />
            )}
        ></ParallaxLayer>
         <ParallaxLayer
        offset={1.3}
        speed={0.5}
        factor={3}
        style={{ 
            backgroundImage: `url(${black})`,
            backgroundSize: 'cover',
            position: 'fixed'
        }}
        >
            <h3 id="h2">"Meine Ruh ist hin, <br></br>
                        Mein Herz ist schwer; <br></br>
                        Ich finde sie nimmer <br></br>
                        und nimmermehr." - Gretchen,  Gretchens Stube</h3>
        </ParallaxLayer>
          <ParallaxLayer
          style={{ textAlign: 'center' , position: 'fixed', top: '10%'}}
          speed={0.5}
        >
          <h3 id="h3">Untergang Gretchens</h3>
        </ParallaxLayer>
        
        </Parallax>
    </div>
    );
}

export default App;
