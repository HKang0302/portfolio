
import './App.css';
import React from 'react';
import { Row, Col, Container, Nav, input } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {bounce} from 'react-animations';
import styled, { keyframes } from 'styled-components';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import homeImg from './Home.jpg'
import profileImg from './profile.jpg'
import contactImg from './contact.jpg'
import Skills from './Skills.js'
import Education from './Education.js';
import JobExperience from './JobExperience.js';
import ContactInfo from './ContactInfo.js'

const Content = styled.p`
  margin: 0;
  margin-bottom: 3px;
`;

const Icons = styled.a`
  margin-right: 7px;
  margin-left: 7px;
`;

function App() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  var [isNotFaded, setIsNotFaded] = useState(true);
  var [skills, setSkills] = useState(Skills);
  var [education, setEducation] = useState(Education);
  var [jobExperience, setJobExperience] = useState(JobExperience);

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

      {/* ABOUT */}
      <div style={{paddingTop: '40px', width: '100%', alignContent: 'center'}}>
        <h1 className='heading'>ABOUT</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-auto'> 
              <img className='profile-img' src={profileImg}/> 
              <Contact />
            </div>
            <div className='col-md-auto'>
              <h4 className='about-title'>EDUCATION</h4>
              <div>
                {
                  education.map(function(edu, ind){
                    return(
                      <AboutCard value={edu} key={ind}/>
                    )
                  })
                }
                <br></br>
                <h4 className='about-title'>JOB EXPERIENCE</h4>
                {
                  jobExperience.map(function(job, ind){
                    return(
                      <AboutCard value={job} key={ind} />
                    )
                  })
                }
              </div>
            </div>
            <div className='col-md-auto'>
              <h4 className='about-title'>SKILLS</h4>
              {
                skills.map(function(skill, ind){
                  return(
                    <Skill skill={skill} key={ind} />
                    // <p className='about-content'>✔️ {skill.skill}</p>
                  )
                })
              }
              <p className='about-skill-content'>...on going</p>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div style={{backgroundColor: '#10459E', paddingTop: '40px', paddingBottom: '40px'}}>
        <h1 className='heading' style={{color: 'white'}}>PROJECTS</h1>
      </div>

      {/* CONTACT */}
      <div >
        <h1 className='heading' style={{color: '#10459E', paddingTop: '40px', paddingBottom: '20px'}}>CONTACT</h1>
        <Content>연락이 필요하시다면 아래 형식에 맞춰 메세지를 제출해주세요! 최대한 빨리 답변해드리도록 하겠습니다 :)</Content>
        <Content>If you wish to contact me, please leave your message below. I will get back to you as soon as possible! :)</Content>

        <div className='container' style={{width: '100%'}}>
          <div className='row'>
            <div className='col-sm-4'> 
              <img className='profile-img' src={contactImg}/> 
              <Contact/>
            </div>
            <div className='col-sm-8'>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={values.name}
                  onChange={handleChange('name')}
                  label="Name"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={values.email}
                  onChange={handleChange('email')}
                  label="Email"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Subject</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={values.subject}
                  onChange={handleChange('subject')}
                  label="Subject"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Message</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={values.message}
                  onChange={handleChange('message')}
                  label="Message"
                />
              </FormControl>
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
        <p style={{color: '#ababab'}}>Developed and Designed by Jennifer Heejin Kang  |  Copyright 2022 Heejin Kang</p>
      </div>
    </div>
  );
}

function AboutCard(props){
  return(
    <div>
      <p className='about-sub-title'>{props.value.title}</p>
      <p className='about-content'>{props.value.content} | {props.value.period}</p>
    </div>
  )
}

function Skill(props){
  var level = "";
  if(props.skill.level == 1){
    level = "⭐️"
  }
  else if (props.skill.level == 2){
    level = "⭐️⭐️"
  }
  else{
    level = "⭐️⭐️⭐️"
  }
  return(
    <p className='about-skill-content'>✔️ {props.skill.skill} {level}</p>
  )
}

function Contact(){
  var [info, setInfo] = useState(ContactInfo);

  return (
    <div>
      <Content style={{marginTop: '10px'}}>Email: heejin444@gmail.com</Content>
      <Content>Phone: +82-10-3700-6723</Content>
      <Content>
        {
          info.map(function(i, ind){
            return (
              <Icons href={i.link} target="_blank" rel="noreferrer noopener">
                <img src={i.img} width={i.width}/>
              </Icons>
            )
          })
        }
      </Content>
    </div>
  )
}

export default App;
