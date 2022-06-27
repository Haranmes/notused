import React from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import useSound from 'use-sound'
import styled from "styled-components";


import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import '../App.css'
import '../stars.css'
import '../potion.css'

import spinnrad from '../images/Spinnrad.jpg'
import drama from '../strangedrone06-21845.mp3'
import valentin from '../images/Valentin.jpg'
import duel from '../images/FaustVsValentin.jpg'
import court from '../images/court.jpg'
import brunnen from '../images/brunnen.jpg'
import free from '../images/Freedom.jpg'

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
const theme = {
  red: {
    default: "red",
    hover: "#c93e36"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

Button.defaultProps = {
  theme: "red"
};

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
  const handleClick2 = event => {
    setCount(count + 1);
    ref.current.scrollTo(7)
    play();
  };
  const handleClick3 = event => {
    setCount(count + 1);
    ref.current.scrollTo(9)
    play();
  };
  const schuldig = event => {
    play();
    window.open("https://haranmes.github.io/book-for-faust/", "_blank");
    
  };
  const unschuldig = event => {
    
    ref.current.scrollTo(11.5)
    
  };
    return (
      <div>
       <h2 style={{color: "red"}}>Death Count: {count}</h2>
       <div>
        
        
    </div>
        <Parallax pages={13} ref={ref}>
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
            <p id="taxt">Der Schlaftrunk sollte jedoch <span style={{color: "red"}}>tödlich</span> der Mutter verabreicht werden... <br></br><br></br><Button id="1" onClick={handleClick}>Hier klicken um Trunk zu verabreichen</Button></p>
            
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
            <h id="h1" style={{display: "grid", placeItems: "center"}}>In dieser Nacht soll Gretchen schwanger werden, was den Untergang Gretchens besiegelt...</h>
          </ParallaxLayer>
          <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{
            backgroundImage: `url(${valentin})`,
            backgroundSize: "contain" 
          }}>
          </ParallaxLayer>
          <ParallaxLayer
          offset={4.5}
          speed={0.7}
          style={{
            
            left: "50%"
          }}>
            <h id="h1">Ebenfalls erschien das nächste Opfer der Liebe Fausts und Gretchens, <br></br>Gretchens Bruder und ein Soldat,am nächsten Tag.</h>
          </ParallaxLayer>
          <ParallaxLayer
          offset={5}
          id="2"
          speed={0.5}
          style={{
            textAlign: "center",
          }}
          >
            <Button onClick={handleClick2}>Hier klicken um zu sehen was mit Valentin passiert</Button>
          </ParallaxLayer>
          <ParallaxLayer 
          offset={7} 
          speed={0.5} 
          style={{ 
            backgroundImage: `url(${duel})`, 
            backgroundSize: "contain"
          }}>
            <div className="bubble1" style={{left: '15%', top: "40%", textAlign: "center", }}>
                    <h style={{color: "white", fontFamily: 'Soft Compound'}}>
                      Mein Gretchen sieh! du bist noch jung, <br></br>
                      Bist gar noch nicht gescheit genung, <br></br> 
                      Machst deine Sachen schlecht.<br></br>
                      Ich sag dir's im Vertrauen nur:<br></br>
                      Du bist doch nun einmal eine Hur; <br></br>
                      So sei's auch eben recht.
                    </h>
                </div>
          </ParallaxLayer>
          <ParallaxLayer
          offset={7.5}
          speed={0.7}
          style={{
            
          }}
          >
            <h id="h1" style={{position: "relative", left: "70%"}}>Valentin hat Faust zum Duell herausgefordert <br></br>und wurde mithilfe von Mephisto erstochen  </h>
          </ParallaxLayer>
          <ParallaxLayer
          offset={8}
          speed={0.5} 
          style={{
            textAlign: "center",
          }}
          >
            <Button onClick={handleClick3}>Hier klicken um zu sehen wenn Gretchen noch am Tot beteiligt war</Button>
          </ParallaxLayer>
          <ParallaxLayer
            offset={9}
            speed={0.5}
            style={{
              backgroundImage: `url(${brunnen})`,
              backgroundSize: "contain"
            }}>

          </ParallaxLayer>
          <ParallaxLayer
          offset={9.4}
          speed={0.7}
          >
            <h id="h1" style={{textAlign: "center", position: "relative", left: "70%"}}>Gretchen ertrank ihr Baby.</h>
          </ParallaxLayer>
          <ParallaxLayer
          offset={10}
          speed={0.5}
          style={{
            textAlign: "center"}}
          >
            <h id="h1" style={{textAlign: "center"}}>Da man nun über alle Sünden Gretchens von der Schwangerschaft vor der Ehe bis zum Kindesmordes zu Gesicht bekommen hat<br></br>
            liegt es an ihnen ein Gerichtsurteil zu treffen...</h>
          </ParallaxLayer>
          <ParallaxLayer
          offset={10.5}
          speed={0.5}
          style={{
            backgroundImage: `url(${court})`,
            backgroundSize: "contain",
            backgroundPosition: "center"
          }}></ParallaxLayer>
          <ParallaxLayer
          offset={10.7}
          speed={0.7}
          style={{
            textAlign: "center"}}
          >
            <h id="h3" >Wie soll über Gretchen gerichtet werden?</h>
          </ParallaxLayer>
          <ParallaxLayer
          offset={10.99}
          speed={0.7}
          style={{
            left: "40%"}}>
            <Button id="" onClick={schuldig}>schuldig</Button>
          
          </ParallaxLayer>
          <ParallaxLayer
          offset={10.99}
          speed={0.7}
          style={{
            left: "60%"}}>
            <Button id="" onClick={unschuldig}>Unschuldig</Button>
          
          </ParallaxLayer>
          <ParallaxLayer
          offset={11.5}
          speed={0.5}
          style={{
            background: "linear-gradient(to bottom, #34a8eb, #000)",
            backgroundSize: "cover",
            textAlign: "center"
          }}>
          </ParallaxLayer>
          <ParallaxLayer
          offset={11.8}
          speed={0.7}
          style={{
            textAlign: "center"
          }}>
             <h id="h3" style={{top: "10%"}}>Gretchen ist nun frei...</h>
          </ParallaxLayer>
          <ParallaxLayer
          offset={11.9}
          speed={0.7}
          style={{
            backgroundImage: `url(${free})`,
            backgroundSize: "30% auto",
            backgroundPosition: "center"
          }}></ParallaxLayer>
          <ParallaxLayer
          offset={12.5}
          speed={1}
          style={{
            textAlign: "center"
          }}>
            <h id="h3">...jedoch hat sie ihre ganze Familie verloren und traut sich nicht mehr zu Faust</h>
          </ParallaxLayer>
        </Parallax>
    </div>
  )
}


export default SecondChapter;

