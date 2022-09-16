import React from 'react';
import './aboutMe.css';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@material-ui/icons"

export default function AboutMe() {
  return (
    <div className="aboutMe">
      {/*<h1 className="Title">About Me</h1>*/}
      <div className="aboutTop">
        <div className="aboutTitle">
          <h2>
              About Me
          </h2>
        </div>
        <p>I'm an early-career computer scientist proficient in using frontend JavaScript frameworks & technologies for web development, as well as a junior data scientist. I hold a Bachelors of Science in Computer Science from Makerere University and believe that it is essential for every developer to understand the data incorporated in the systems they build.
           </p>
        <p>I have an affinity toward opportunities that expound my skill-set for career growth.</p>
 
     </div>
     <div className=" row userShow">
                <div className="col-lg-6 userShowTop">
                  {/*<img src="../images/header1.jpg"></img>*/}
                    <img src="images/header2.jpg" 
                         alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Kyebagonza Jonathan Jeremiah</span>
                        <span className="userShowUserTitle">Developer</span>
                    </div>
                </div>
                <div className="col-lg-6 aboutMeBottom">
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">
                        Intrigued by design, traveling, photography, classical music, strategy, writing, art, armchair philosophy, fabulous food.
                        </span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">
                        Intrigued by design, traveling, photography, classical music, strategy, writing, art, armchair philosophy, fabulous food, and even better conversations.
                        </span>
                    </div>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">
                        Intrigued by design, traveling, photography, classical music, strategy, writing, art, armchair philosophy.
                        </span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">
                        Intrigued by design, traveling, photography, classical music, strategy, writing, art, armchair philosophy, fabulous food, and even better conversations.
                        </span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">
                        Intrigued by design, traveling, photography, classical music, strategy, writing, art, armchair philosophy.
                        </span>
                    </div>
                </div>
            </div>
      
    </div>
  )
}
