
import './App.css';
import { Row, Col, Container, Nav, input } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {bounce} from 'react-animations';
import styled, { keyframes } from 'styled-components';

import homeImg from './Home.jpg'
import profileImg from './profile.jpg'
import contactImg from './contact.jpg'

function App() {
  var [isNotFaded, setIsNotFaded] = useState(true);

  const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;
  `;
  
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
            <Col> 
              <img className='profile-img' src={profileImg}/> 
              <div>
                <p>Email: heejin444@gmail.com</p>
                <p>Phone: +82-10-3700-6723</p>
                <p>GITHUB | IG | FB</p>
              </div>

            </Col>
            <Col>
              <h4 className='about-title'>EDUCATION</h4>
              <div>
                <p className='about-sub-title'>University of California, Irvine</p>
                <p className='about-content'>Computer Science B.S. | 2020</p>
                <p className='about-sub-title'>City College of San Francisco</p>
                <p className='about-content'>Computer Science A.S. | 2018</p>
                <br></br>
                <h4 className='about-title'>JOB EXPERIENCE</h4>
                <p className='about-sub-title'>Software Engineer</p>
                <p className='about-content'>Sunny Wave Tech., South Korea | August 2020 - Present</p>
                <p className='about-sub-title'>Java Teaching Assistant (TA)</p>
                <p className='about-content'>City College of San Francisco | September 2017 - May 2018</p>
              </div>
            </Col>
            <Col>
              <h4 className='about-title'>SKILLS</h4>
              <p className='about-content'>✔️ C++</p>
              <p className='about-content'>✔️ Java</p>
              <p className='about-content'>✔️ Kotlin</p>
              <p className='about-content'>✔️ Python</p>
              <p className='about-content'>✔️ Javascript</p>
              <p className='about-content'>✔️ React</p>
              <p className='about-content'>✔️ CSS</p>
              <p className='about-content'>✔️ Android</p>
              <p className='about-content'>✔️ AI/ML</p>
              <p className='about-content'>✔️ AWS</p>
              <p className='about-content'>✔️ NodeJS</p>
              <p className='about-content'>...on going</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{backgroundColor: '#10459E', paddingTop: '40px', paddingBottom: '40px'}}>
        <h1 className='heading' style={{color: 'white'}}>PROJECTS</h1>
      </div>
      <div >
        <h1 className='heading' style={{color: '#10459E', paddingTop: '40px', paddingBottom: '40px'}}>CONTACT</h1>
        <p>연락이 필요하시다면 아래 형식에 맞춰 메세지를 제출해주세요! 최대한 빨리 답변해드리도록 하겠습니다 :)</p>
        <p>If you wish to contact me, please leave your message below. I will get back to you as soon as possible! :)</p>

        <Container>
          <Row>
            <Col> 
              <img className='profile-img' src={contactImg}/> 
              <div>
                <p>Email: heejin444@gmail.com</p>
                <p>Phone: +82-10-3700-6723</p>
                <p>GITHUB | IG | FB</p>
              </div>

            </Col>
            <Col>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">Subject</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">Message</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <button type="button" class="btn btn-primary">Submit</button>
            </Col>
          </Row>
        </Container>
      </div>
      <p>Developed and Designed by Jennifer Heejin Kang  |  Copyright 2022 Heejin Kang</p>
    </div>
  );
}

export default App;
