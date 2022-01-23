
import './App.css';
import { Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import homeImg from './Home.jpg'


function App() {
  var [isNotFaded, setIsNotFaded] = useState(true);
  
  useEffect(()=>{ 
    setIsNotFaded(true);
  })

  return (
    <div className="App">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">ABOUT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">PROJECTS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled">CONTACT</Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={isNotFaded} classNames="fade" timeout={1000}>
        <div className='home-img'>
          <div className='home-text'>
            <p>println(“Hello World!”);</p>
            <p>My name is Heejin or simply Jennifer :) </p>
          </div>
        </div>
      </CSSTransition>
      <div>
        hello
      </div>
    </div>
  );
}

export default App;
