import React from 'react';
import './footer.css';
import { AiFillGithub, AiFillGitlab, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai';
import Link from '../Link';


export default function Footer() {

  return (
    <div className="footer">
      <div className="row footerInfo">
          
          <div className="col-lg-4">
          <img className="footer-logo" src="images/kjjWhite.png" alt=''/>
          </div>

          <div className="col-lg-4 footer-menu">
            <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/skill">Skills</Link>
                    </li>
                    <li>
                        <Link href="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

        <div className="col-lg-4 in-touch">
        <span>GET IN TOUCH</span>
        <div className="footerLinks">
        <a href="https://github.com/KyebagonzaJonathanJeremiah" className="footerIcon">
          <AiFillGithub />
        </a>
        <a href="https://gitlab.com/JJkyebagonza" className="footerIcon">
          <AiFillGitlab />
        </a>
        <a href="https://www.linkedin.com/in/jonathan-kyebagonza-803a711a3/" className="footerIcon">
          <AiFillLinkedin />
        </a>
        <a href="https://twitter.com/Jonatha80177435" className="footerIcon">
          <AiFillTwitterCircle />
        </a>
        <a href="https://twitter.com/Jonatha80177435" className="footerIcon">
          <AiFillMail />
        </a>
        
       </div>
        </div>
        <div className="rights">
        <span>© Copyright All Rights Reserved</span>
      </div>

      </div>
      <a id="back-to-top" href="#" class="btn btn-light btn-lg back-to-top" role="button"><i class="fa fa-chevron-up"></i></a>
    </div>
  )
}
