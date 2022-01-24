
import './App.css';
import { Row, Col, Container, Nav } from 'react-bootstrap';
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
      <Nav className="justify-content-end" activeKey="/home">
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
      <div style={{paddingTop: '40px'}}>
        <h1 className='heading'>ABOUT</h1>
        <Container>
          <Row>
            <Col> IMAGE </Col>
            <Col>
              <h4 className='about-sub-title'>EDUCATION</h4>
              <h4 className='about-sub-title'>JOB EXPERIENCE</h4>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{backgroundColor: '#10459E', paddingTop: '40px', paddingBottom: '40px'}}>
        <h1 className='about-heading' style={{color: 'white'}}>PROJECTS</h1>
      </div>
      <div >
        <h1 className='about-heading' style={{color: '#10459E', paddingTop: '40px', paddingBottom: '40px'}}>CONTACT</h1>
      </div>
    </div>
  );
}

export default App;
