import React from 'react';
import './header.css';
import {AiFillGithub, AiFillGitlab, AiFillLinkedin, AiFillMail, AiFillTwitterCircle} from "react-icons/ai";






export default function Header() {
  return (
    
    <div className="header">
      <div className="container">
        <div className="name">
           <h1>Kyebagonza Jonathan Jeremiah</h1>
           <span>Developer + Mentor</span>
        </div>
       
       <div className="links">
        <a href="https://github.com/KyebagonzaJonathanJeremiah" className="icon">
          <AiFillGithub />
        </a>
        <a href="https://gitlab.com/JJkyebagonza" className="icon">
          <AiFillGitlab />
        </a>
        <a href="https://www.linkedin.com/in/jonathan-kyebagonza-803a711a3/" className="icon">
          <AiFillLinkedin />
        </a>
        <a href="https://twitter.com/Jonatha80177435" className="icon">
          <AiFillTwitterCircle />
        </a>
        <a href="https://twitter.com/Jonatha80177435" className="icon">
          <AiFillMail />
        </a>
       </div>
     </div>

    </div>
  )
}
