import logo from './logo.svg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import { useRef } from 'react';
import land  from './images/moon.jpg';
import walking from './images/walking.jpg'
import dark from './images/dark.jpg'
import Gretche from './images/Gretchen.jpg'
const Gretchen = require("./images/Gretchen.jpg");
 
function App() {
  const ref = useRef();
    return(
        <div>
        <Parallax pages={4} ref={ref}>
       
            <ParallaxLayer id="chaos"
            offset={0}
            speed={0.5}
            factor={2}
            style={{
                backgroundImage: `url(${dark})`,
                backgroundSize: 'cover'
            }}
            >
            </ParallaxLayer>
            <ParallaxLayer
            offset={0.3}
            speed={1}
            factor={6}
            
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
          style={{ textAlign: 'center' , position: 'fixed', top: '10%'}}
        >
          <h3 id="h3">Untergangs Gretchens</h3>
        </ParallaxLayer>
        </Parallax>
    </div>
    );
}

export default App;
