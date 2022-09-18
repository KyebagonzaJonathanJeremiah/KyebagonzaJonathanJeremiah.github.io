import React from 'react';
import './aboutMe.css';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@material-ui/icons"

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-top">
        <div className="about-title">
          <h2>
              About Me
          </h2>
        </div>
        <p>I'm an early-career computer scientist proficient in using frontend JavaScript frameworks & technologies for web development, as well as a junior data scientist. I hold a Bachelors of Science in Computer Science from Makerere University and believe that it is essential for every developer to understand the data incorporated in the systems they build.
           </p>
        <p>I have an affinity toward opportunities that expound my skill-set for career growth.</p>
 
     </div>
     <div className="row user-show">
                <div className="col-lg-6 user-show-top">
                  {/*<img src="../images/header1.jpg"></img>*/}
                    <img src="images/header2.jpg" 
                         alt="" className="user-show-img" />
                    <div className="user-show-top-title">
                        <span className="user-show-username">Kyebagonza Jonathan Jeremiah</span>
                        <span className="user-show-user-title">Developer</span>
                    </div>
                </div>
                <div className="col-lg-6 about-me-bottom">
                    <div className="user-show-info">
                        <PermIdentity className="user-show-icon"/>
                        <span className="user-show-info-title">
                        Intrigued by design, traveling, photography, classical music, strategy, writing, art, armchair philosophy, fabulous food.
                        </span>
                    </div>
                    <div className="user-show-info">
                        <CalendarToday className="user-show-icon"/>
                        <span className="user-show-info-title">
                        Intrigued by design, traveling, photography, classical music, strategy, writing, art, armchair philosophy, fabulous food, and even better conversations.
                        </span>
                    </div>
                    <div className="user-show-info">
                        <PhoneAndroid className="user-show-icon"/>
                        <span className="user-show-info-title">
                        Intrigued by design, traveling, photography, classical music, strategy, writing, art, armchair philosophy.
                        </span>
                    </div>
                    <div className="user-show-info">
                        <MailOutline className="user-show-icon"/>
                        <span className="user-show-info-title">
                        Intrigued by design, traveling, photography, classical music, strategy, writing, art, armchair philosophy, fabulous food, and even better conversations.
                        </span>
                    </div>
                    <div className="user-show-info">
                        <LocationSearching className="user-show-icon"/>
                        <span className="user-show-info-title">
                        Intrigued by design, traveling, photography, classical music, strategy, writing, art, armchair philosophy.
                        </span>
                    </div>
                </div>
            </div>
      
    </div>
  )
}
