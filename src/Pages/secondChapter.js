import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import $ from 'jquery';
import '../App.css'
import '../stars.css'
import '../potion.css'
import '../js/counter'
import spinnrad from '../images/Spinnrad.jpg'
import {useEffect, useState} from 'react';
import useSound from 'use-sound'
import drama from '../strangedrone06-21845.mp3'
function SecondChapter() {
    const ref = useRef();
    const [play] = useSound(drama);
    const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count is now: ', count);
  }, [count]);

  const handleClick = event => {
    setCount(count + 1);
    $("#1").replaceWith('<span style={{color:"red"}}>Mutter wurde vergiftet</span>');
    play();
  };
    return (
      <div>
       <h2 style={{color: "red"}}>Death Count: {count}</h2>
       <div>
        
        
    </div>
        <Parallax pages={11} ref={ref}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              margin: "0",
              padding: "0",
              fontFamily:  "Poppins, sans-serif",
            }}>
              
            <div id="horror">
              <div id="wrapper">
                <h1 class="glitch" data-text="Der Anfang vom Ende">Der Anfang vom Ende</h1>
                  <p className="red">Kapitel 2</p>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            backgroundImage: `url(${spinnrad})`,
            backgroundSize: "contain",
            backgroundPosition: "center"
          }}>
            <div className="bubble1" style={{left: '50%', top: "28%", textAlign: "center", }}>
                    <h style={{color: "white", fontFamily: 'Soft Compound'}}>
                      Nach ihm nur schau ich <br></br>
                      Zum Fenster hinaus, <br></br> 
                      Nach ihm nur geh ich <br></br>
                      Aus dem Haus.
                    </h>
                </div>
          </ParallaxLayer>
          <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={0.5}
          style={{
            
          }}
          >
            <div className="snow"></div>
          </ParallaxLayer>
          <ParallaxLayer
          offset={2}
          speed={0.5}>
            
          </ParallaxLayer>
          <ParallaxLayer
          offset={2}
          speed={0.5}
          >
            
            <div class="container">
            <p id="taxt">Der Schlaftrunk sollte jedoch <span style={{color: "red"}}>tödlich</span> der Mutter verabreicht werden... <br></br><br></br><button id="1" onClick={handleClick}>Hier klicken um Trunk zu verabreichen</button></p>
            
              <div class="potion" id="potion">
                <div class="potion__bottom">
                  <div class="potion__top"></div>
                  <div class="wave wave--left"></div>
                  <div class="wave wave--right"></div>
                  <div class="drops">
                    <div class="drop"></div>
                    <div class="drop"></div>
                    <div class="drop"></div>
                    <div class="drop"></div>
                    <div class="drop"></div>
                    <div class="drop"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <h id="h2" style={{top: "0%"}}>
                "Hier ist ein Fläschchen! Drei Tropfen nur <br></br>
                In ihren Trank umhülllen <br></br>
                Mit tiefem schlaf gefällig die Natur" - <br></br>
                Faust zu Gretchen, V.3511-3513</h>
                
          </ParallaxLayer>
          <ParallaxLayer
          offset={2.9}
          speed={0.5}>
           
          </ParallaxLayer>
          <ParallaxLayer
          offset={2.9}
          speed={0.5}
          factor={1.5}
          >
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div class="clouds"></div>
            
          </ParallaxLayer>
          <ParallaxLayer
          offset={3}
          speed={0.7}
          >
            <h id="h1" style={{display: "grid", placeItems: "center"}}>In dieser Nacht soll etwas geschehen, was den Untergang Gretchens besiegelt...</h>
          </ParallaxLayer>
        </Parallax>
    </div>
  )
}


export default SecondChapter;

