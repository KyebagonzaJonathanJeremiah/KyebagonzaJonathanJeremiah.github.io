
import React, { useState } from 'react';
import './navBar.css';
import {FaPhoneAlt, FaUser} from "react-icons/fa";
import {BsFillFileEarmarkPersonFill} from "react-icons/bs";
import {HiHome} from "react-icons/hi";
import {MdStorage} from "react-icons/md";
import Link from '../Link';

export default function NavBar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
        <nav className="navigation">
            <a href="/"><img className="nav-logo" src="images/kjjBlack.png" alt='logo'/></a>
            <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     viewBox="0 0 20 20"
                     fill="white">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                              clipRule="evenodd"/>
                </svg>
            </button>
            <div className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }>
                <ul>
                    <li>
                        
                        <Link href="/"><HiHome className="nav-icon d-lg-none"/>Home</Link>
                    </li>
                    <li>
                        <Link href="/about"><FaUser className="nav-icon d-lg-none"/>About</Link>
                    </li>
                    <li>
                        <Link href="/skill"><MdStorage className="nav-icon d-lg-none"/>Skills</Link>
                    </li>
                    <li>
                        <Link href="/resume"><BsFillFileEarmarkPersonFill className="nav-icon d-lg-none"/>Resume</Link>
                    </li>
                    <li>
                        <Link href="/contact"><FaPhoneAlt className="nav-icon d-lg-none"/>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
  );
}
