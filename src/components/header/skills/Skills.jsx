import React from 'react';
import './skills.css';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiCss3, SiJavascript, SiPython, SiTypescript } from "react-icons/si";
import { RiInputMethodFill, RiReactjsLine } from "react-icons/ri";
import { DiGit, DiNpm } from "react-icons/di";



export default function Skills() {
  
  return (
    <div className="skills">
       <div className="skills-title">
         <h2>Skills</h2>
       </div>
       <p>Over 1.5years+ of professional experience working with several programming toold to deliver quality results
        to clients. I have expert knowledge in frontend engineering, software testing and Web development.
       </p>
      <div className="row skills-content">
        <div className="col-lg-4">
          <div className="progress-bar">
            <span className="bar-title"><AiFillHtml5 className="skill-a-icon"/>HTML</span>
            <ProgressBar now={90} label={`${90}%`} variant='info'/>
         </div>
         <div className="progress-bar">
           <span className="bar-title"><SiCss3 className="skill-s-icon"/>CSS</span>
           <ProgressBar now={66} label={`${66}%`} variant='info'/>
         </div>
         <div className="progress-bar">
           <span className="bar-title"><SiJavascript className="skill-s-icon"/>JavaScript</span>
           <ProgressBar now={65} label={`${65}%`} variant='info'/>
         </div>
        </div>
        
        <div className="col-lg-4">
          <div className="progress-bar">
            <span className="bar-title"><RiReactjsLine className="skill-r-icon"/>React JS</span>
            <ProgressBar now={55} label={`${55}%`} variant='info'/>
          </div>
          <div className="progress-bar">
            <span className="bar-title"><DiGit className="skill-d-icon"/>GIT</span>
            <ProgressBar now={85} label={`${85}%`} variant='info'/>
         </div>
         <div className="progress-bar">
           <span className="bar-title"><DiNpm className="skill-d-icon"/>npm</span>
           <ProgressBar now={60} label={`${60}%`} variant='info'/>
         </div>
        </div>

       <div className="col-lg-4">
         <div className="progress-bar">
           <span className="bar-title"><SiTypescript className="skill-s-icon"/>TypeScript</span>
           <ProgressBar now={45} label={`${45}%`} variant='info'/>
         </div>
         <div className="progress-bar">
           <span className="bar-title"><RiInputMethodFill className="skill-r-icon"/>Agile</span>
           <ProgressBar now={75} label={`${75}%`} variant='info'/>
         </div>
         <div className="progress-bar">
           <span className="bar-title"><SiPython className="skill-s-icon"/>Python</span>
           <ProgressBar now={20} label={`${20}%`} variant='info'/>
         </div>
       </div>
      
      </div>
      
      
      
    </div>
  );
}
