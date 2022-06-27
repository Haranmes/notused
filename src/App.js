import React from 'react';
import './App.css';
import SecondChapter from './Pages/secondChapter';
import Landing from './Pages/firstChapter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  { Button }  from 'react-bootstrap-buttons';
 

import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

import './react-tabs.css'

function App() {
    document.body.style.backgroundColor = "black"
    return (
      
  
        <Tabs >
            <TabList>
                <Tab style={{color: "white"}}>Kapitel 1</Tab>
                <Tab style={{color: "white"}}>Kapitel 2</Tab>
               
            </TabList>
            <TabPanel>
                <Landing/>
            </TabPanel>
            <TabPanel>
                <SecondChapter/>
            </TabPanel>
        </Tabs>
  
        
    );
  }
  
  
  export default App;