import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import '../App.css'
import spinnrad from '../images/Spinnrad.jpg'
function SecondChapter() {
    const ref = useRef();
    return (
      <div>
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
                    <h style={{color: "white", fontFamily: 'Soft Compound'}}>Meine Ruh ist hin, <br></br>
                    Mein Herz ist schwer; <br></br>
                    Ich finde sie nimmer <br></br>
                    und nimmermehr.</h>
                </div>
          </ParallaxLayer>
          <ParallaxLayer
          offset={1.5}
          speed={0.5}
          >
            <div className="snow"></div>
          </ParallaxLayer>
        </Parallax>
    </div>
  )
}

export default SecondChapter;
