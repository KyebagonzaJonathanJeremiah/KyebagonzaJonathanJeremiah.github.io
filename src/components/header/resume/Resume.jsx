import React from 'react'
import './resume.css';

export default function Resume() {
  return (
    <div className="resume">
           <div className="resumeTitle">
             <h2>Resume/Timeline</h2>
           </div>

           <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
            <div id className="vertival-timeline-element">
              <span className="vertical-timeline-element-icon bounce-in">
                <svg width="24" height="24">
                  <path className="graphic" d="M 17.328 7.582 h -0.833 v 6.206 H 14.69 V 7.582 h -0.832 V 6.337 h 3.469 v 1.245 Z M 12.886 4.36 v 11.407 c 0 1.48 -1.21 2.245 -2.702 2.245 c -1.49 0 -2.71 -0.647 -2.71 -1.902 c 0 -0.493 0.404 -0.892 0.902 -0.892 a 0.896 0.896 0 0 1 0.9 0.892 c 0 0.912 0.074 1.53 0.908 1.53 c 0.897 0 0.897 -0.62 0.897 -1.873 l 0.001 -11.407 c 0 -1.477 1.21 -2.243 2.7 -2.243 c 1.491 0 2.711 0.644 2.711 1.9 a 0.897 0.897 0 0 1 -0.902 0.893 a 0.896 0.896 0 0 1 -0.9 -0.892 c 0 -0.912 -0.074 -1.53 -0.908 -1.53 c -0.898 0 -0.898 0.62 -0.898 1.872 Z m -5.41 1.977 h 1.798 l 0.003 7.447 H 7.474 Z M 1.993 0.008 v 10.067 c 0 9.062 9.989 13.917 9.989 13.917 s 10.026 -4.855 10.026 -13.917 V 0.009 Z"
                        fill="#fff"
                        fill-rule= "evenodd"></path>
                </svg>
              </span>
              <span className="vertical-timeline-element-date d-none d-md-block dateRight">May 2022</span>
              <div className="vertical-timeline-element-content bounce-in left">
                <div className="vertical-timeline-element-content-arrow"></div>
                <h5 className="MuiTypography-root vertical-timeline-element-title MuiTypography-h5">B Marketing Agency</h5>
                <h6 className="MuiTypography-root vertical-timeline-element-subtitle MuiTypography-h6">Research Initiation Scholarship</h6>
                <div>
                  <p>I joined the institute through a scholarship.
                    <br></br>
                    I am responsible for mantaining some projects directly linked to the university
                  </p>
                </div>
                <span className="vertical-timeline-element-date d-lg-none">May 2022</span>
              </div>
            </div>

            <div id className="vertical-timeline-element">
              <span className="vertical-timeline-element-icon bounce-in">
                <svg role="img" viewBox="0 0 24 24">
                  <title>Python</title>
                  <path d="M 17.328 7.582 h -0.833 v 6.206 H 14.69 V 7.582 h -0.832 V 6.337 h 3.469 v 1.245 Z M 12.886 4.36 v 11.407 c 0 1.48 -1.21 2.245 -2.702 2.245 c -1.49 0 -2.71 -0.647 -2.71 -1.902 c 0 -0.493 0.404 -0.892 0.902 -0.892 a 0.896 0.896 0 0 1 0.9 0.892 c 0 0.912 0.074 1.53 0.908 1.53 c 0.897 0 0.897 -0.62 0.897 -1.873 l 0.001 -11.407 c 0 -1.477 1.21 -2.243 2.7 -2.243 c 1.491 0 2.711 0.644 2.711 1.9 a 0.897 0.897 0 0 1 -0.902 0.893 a 0.896 0.896 0 0 1 -0.9 -0.892 c 0 -0.912 -0.074 -1.53 -0.908 -1.53 c -0.898 0 -0.898 0.62 -0.898 1.872 Z m -5.41 1.977 h 1.798 l 0.003 7.447 H 7.474 Z M 1.993 0.008 v 10.067 c 0 9.062 9.989 13.917 9.989 13.917 s 10.026 -4.855 10.026 -13.917 V 0.009 Z"></path>
                </svg>
              </span>
              <span className="vertical-timeline-element-date d-none d-md-block dateLeft">January 2020 - April 2022</span>
              <div className="vertical-timeline-element-content bounce-in">
                <div className="vertical-timeline-element-content-arrow"></div>
                <h5 className="MuiTypography-root vertical-timeline-element-title MuiTypography-h5">Boys mentorship Program</h5>
                <h6 className="MuiTypography-root vertical-timeline-element-subtitle MuiTypography-h6">Teaching Python/Web to Students</h6>
                <div>
                  <p>Is a non-profit that helps young children to 12th grade to go beyond School
                    and learn new and interesting topics! I have participated in 3 editions of Infomatica 
                    their course that is dedicated to teaching pythin
                  </p>
                </div>
                <span className="vertical-timeline-element-date d-lg-none">January 2020 - April 2022</span>
              </div>
            </div>

            <div id className="vertical-timeline-element">
              <span className="vertical-timeline-element-icon bounce-in">
                <svg role="img" viewBox="0 0 24 24">
                  <title>Python</title>
                  <path d="M 14.25 0.18 l 0.9 0.2 l 0.73 0.26 l 0.59 0.3 l 0.45 0.32 l 0.34 0.34 l 0.25 0.34 l 0.16 0.33 l 0.1 0.3 l 0.04 0.26 l 0.02 0.2 l -0.01 0.13 V 8.5 l -0.05 0.63 l -0.13 0.55 l -0.21 0.46 l -0.26 0.38 l -0.3 0.31 l -0.33 0.25 l -0.35 0.19 l -0.35 0.14 l -0.33 0.1 l -0.3 0.07 l -0.26 0.04 l -0.21 0.02 H 8.77 l -0.69 0.05 l -0.59 0.14 l -0.5 0.22 l -0.41 0.27 l -0.33 0.32 l -0.27 0.35 l -0.2 0.36 l -0.15 0.37 l -0.1 0.35 l -0.07 0.32 l -0.04 0.27 l -0.02 0.21 v 3.06 H 3.17 l -0.21 -0.03 l -0.28 -0.07 l -0.32 -0.12 l -0.35 -0.18 l -0.36 -0.26 l -0.36 -0.36 l -0.35 -0.46 l -0.32 -0.59 l -0.28 -0.73 l -0.21 -0.88 l -0.14 -1.05 l -0.05 -1.23 l 0.06 -1.22 l 0.16 -1.04 l 0.24 -0.87 l 0.32 -0.71 l 0.36 -0.57 l 0.4 -0.44 l 0.42 -0.33 l 0.42 -0.24 l 0.4 -0.16 l 0.36 -0.1 l 0.32 -0.05 l 0.24 -0.01 h 0.16 l 0.06 0.01 h 8.16 v -0.83 H 6.18 l -0.01 -2.75 l -0.02 -0.37 l 0.05 -0.34 l 0.11 -0.31 l 0.17 -0.28 l 0.25 -0.26 l 0.31 -0.23 l 0.38 -0.2 l 0.44 -0.18 l 0.51 -0.15 l 0.58 -0.12 l 0.64 -0.1 l 0.71 -0.06 l 0.77 -0.04 l 0.84 -0.02 l 1.27 0.05 Z m -6.3 1.98 l -0.23 0.33 l -0.08 0.41 l 0.08 0.41 l 0.23 0.34 l 0.33 0.22 l 0.41 0.09 l 0.41 -0.09 l 0.33 -0.22 l 0.23 -0.34 l 0.08 -0.41 l -0.08 -0.41 l -0.23 -0.33 l -0.33 -0.22 l -0.41 -0.09 l -0.41 0.09 Z m 13.09 3.95 l 0.28 0.06 l 0.32 0.12 l 0.35 0.18 l 0.36 0.27 l 0.36 0.35 l 0.35 0.47 l 0.32 0.59 l 0.28 0.73 l 0.21 0.88 l 0.14 1.04 l 0.05 1.23 l -0.06 1.23 l -0.16 1.04 l -0.24 0.86 l -0.32 0.71 l -0.36 0.57 l -0.4 0.45 l -0.42 0.33 l -0.42 0.24 l -0.4 0.16 l -0.36 0.09 l -0.32 0.05 l -0.24 0.02 l -0.16 -0.01 h -8.22 v 0.82 h 5.84 l 0.01 2.76 l 0.02 0.36 l -0.05 0.34 l -0.11 0.31 l -0.17 0.29 l -0.25 0.25 l -0.31 0.24 l -0.38 0.2 l -0.44 0.17 l -0.51 0.15 l -0.58 0.13 l -0.64 0.09 l -0.71 0.07 l -0.77 0.04 l -0.84 0.01 l -1.27 -0.04 l -1.07 -0.14 l -0.9 -0.2 l -0.73 -0.25 l -0.59 -0.3 l -0.45 -0.33 l -0.34 -0.34 l -0.25 -0.34 l -0.16 -0.33 l -0.1 -0.3 l -0.04 -0.25 l -0.02 -0.2 l 0.01 -0.13 v -5.34 l 0.05 -0.64 l 0.13 -0.54 l 0.21 -0.46 l 0.26 -0.38 l 0.3 -0.32 l 0.33 -0.24 l 0.35 -0.2 l 0.35 -0.14 l 0.33 -0.1 l 0.3 -0.06 l 0.26 -0.04 l 0.21 -0.02 l 0.13 -0.01 h 5.84 l 0.69 -0.05 l 0.59 -0.14 l 0.5 -0.21 l 0.41 -0.28 l 0.33 -0.32 l 0.27 -0.35 l 0.2 -0.36 l 0.15 -0.36 l 0.1 -0.35 l 0.07 -0.32 l 0.04 -0.28 l 0.02 -0.21 V 6.07 h 2.09 l 0.14 0.01 Z m -6.47 14.25 l -0.23 0.33 l -0.08 0.41 l 0.08 0.41 l 0.23 0.33 l 0.33 0.23 l 0.41 0.08 l 0.41 -0.08 l 0.33 -0.23 l 0.23 -0.33 l 0.08 -0.41 l -0.08 -0.41 l -0.23 -0.33 l -0.33 -0.23 l -0.41 -0.08 l -0.41 0.08 Z"></path>
                </svg>
              </span>
              <span className="vertical-timeline-element-date d-none d-md-block datesRights">November 2020 - April 2021</span>
              <div className="vertical-timeline-element-content bounce-in left">
                <div className="vertical-timeline-element-content-arrow"></div>
                <h5 className="MuiTypography-root vertical-timeline-element-title MuiTypography-h5">Kanzu Code</h5>
                <h6 className="MuiTypography-root vertical-timeline-element-subtitle MuiTypography-h6">Junior Software Developer(Internship)</h6>
                <div>
                  <p>Is a non-profit that helps young children to 12th grade to go beyond School
                    and learn new and interesting topics! I have participated in 3 editions of Infomatica 
                    their course that is dedicated to teaching pythin
                  </p>
                </div>
                <span className="vertical-timeline-element-date d-lg-none">November 2020 - April 2021</span>
              </div>
            </div>

            <div id className="vertical-timeline-element">
              <span className="vertical-timeline-element-icon bounce-in">
                <svg role="img" viewBox="0 0 24 24">
                  <title>Python</title>
                  <path d="M 14.25 0.18 l 0.9 0.2 l 0.73 0.26 l 0.59 0.3 l 0.45 0.32 l 0.34 0.34 l 0.25 0.34 l 0.16 0.33 l 0.1 0.3 l 0.04 0.26 l 0.02 0.2 l -0.01 0.13 V 8.5 l -0.05 0.63 l -0.13 0.55 l -0.21 0.46 l -0.26 0.38 l -0.3 0.31 l -0.33 0.25 l -0.35 0.19 l -0.35 0.14 l -0.33 0.1 l -0.3 0.07 l -0.26 0.04 l -0.21 0.02 H 8.77 l -0.69 0.05 l -0.59 0.14 l -0.5 0.22 l -0.41 0.27 l -0.33 0.32 l -0.27 0.35 l -0.2 0.36 l -0.15 0.37 l -0.1 0.35 l -0.07 0.32 l -0.04 0.27 l -0.02 0.21 v 3.06 H 3.17 l -0.21 -0.03 l -0.28 -0.07 l -0.32 -0.12 l -0.35 -0.18 l -0.36 -0.26 l -0.36 -0.36 l -0.35 -0.46 l -0.32 -0.59 l -0.28 -0.73 l -0.21 -0.88 l -0.14 -1.05 l -0.05 -1.23 l 0.06 -1.22 l 0.16 -1.04 l 0.24 -0.87 l 0.32 -0.71 l 0.36 -0.57 l 0.4 -0.44 l 0.42 -0.33 l 0.42 -0.24 l 0.4 -0.16 l 0.36 -0.1 l 0.32 -0.05 l 0.24 -0.01 h 0.16 l 0.06 0.01 h 8.16 v -0.83 H 6.18 l -0.01 -2.75 l -0.02 -0.37 l 0.05 -0.34 l 0.11 -0.31 l 0.17 -0.28 l 0.25 -0.26 l 0.31 -0.23 l 0.38 -0.2 l 0.44 -0.18 l 0.51 -0.15 l 0.58 -0.12 l 0.64 -0.1 l 0.71 -0.06 l 0.77 -0.04 l 0.84 -0.02 l 1.27 0.05 Z m -6.3 1.98 l -0.23 0.33 l -0.08 0.41 l 0.08 0.41 l 0.23 0.34 l 0.33 0.22 l 0.41 0.09 l 0.41 -0.09 l 0.33 -0.22 l 0.23 -0.34 l 0.08 -0.41 l -0.08 -0.41 l -0.23 -0.33 l -0.33 -0.22 l -0.41 -0.09 l -0.41 0.09 Z m 13.09 3.95 l 0.28 0.06 l 0.32 0.12 l 0.35 0.18 l 0.36 0.27 l 0.36 0.35 l 0.35 0.47 l 0.32 0.59 l 0.28 0.73 l 0.21 0.88 l 0.14 1.04 l 0.05 1.23 l -0.06 1.23 l -0.16 1.04 l -0.24 0.86 l -0.32 0.71 l -0.36 0.57 l -0.4 0.45 l -0.42 0.33 l -0.42 0.24 l -0.4 0.16 l -0.36 0.09 l -0.32 0.05 l -0.24 0.02 l -0.16 -0.01 h -8.22 v 0.82 h 5.84 l 0.01 2.76 l 0.02 0.36 l -0.05 0.34 l -0.11 0.31 l -0.17 0.29 l -0.25 0.25 l -0.31 0.24 l -0.38 0.2 l -0.44 0.17 l -0.51 0.15 l -0.58 0.13 l -0.64 0.09 l -0.71 0.07 l -0.77 0.04 l -0.84 0.01 l -1.27 -0.04 l -1.07 -0.14 l -0.9 -0.2 l -0.73 -0.25 l -0.59 -0.3 l -0.45 -0.33 l -0.34 -0.34 l -0.25 -0.34 l -0.16 -0.33 l -0.1 -0.3 l -0.04 -0.25 l -0.02 -0.2 l 0.01 -0.13 v -5.34 l 0.05 -0.64 l 0.13 -0.54 l 0.21 -0.46 l 0.26 -0.38 l 0.3 -0.32 l 0.33 -0.24 l 0.35 -0.2 l 0.35 -0.14 l 0.33 -0.1 l 0.3 -0.06 l 0.26 -0.04 l 0.21 -0.02 l 0.13 -0.01 h 5.84 l 0.69 -0.05 l 0.59 -0.14 l 0.5 -0.21 l 0.41 -0.28 l 0.33 -0.32 l 0.27 -0.35 l 0.2 -0.36 l 0.15 -0.36 l 0.1 -0.35 l 0.07 -0.32 l 0.04 -0.28 l 0.02 -0.21 V 6.07 h 2.09 l 0.14 0.01 Z m -6.47 14.25 l -0.23 0.33 l -0.08 0.41 l 0.08 0.41 l 0.23 0.33 l 0.33 0.23 l 0.41 0.08 l 0.41 -0.08 l 0.33 -0.23 l 0.23 -0.33 l 0.08 -0.41 l -0.08 -0.41 l -0.23 -0.33 l -0.33 -0.23 l -0.41 -0.08 l -0.41 0.08 Z"></path>
                </svg>
              </span>
              <span className="vertical-timeline-element-date d-none d-md-block dateLeft">July 2020 - October 2020</span>
              <div className="vertical-timeline-element-content bounce-in">
                <div className="vertical-timeline-element-content-arrow"></div>
                <h5 className="MuiTypography-root vertical-timeline-element-title MuiTypography-h5">Matatu Hub</h5>
                <h6 className="MuiTypography-root vertical-timeline-element-subtitle MuiTypography-h6">Junior Software Developer</h6>
                <div>
                  <p>Is a non-profit that helps young children to 12th grade to go beyond School
                    and learn new and interesting topics! I have participated in 3 editions of Infomatica 
                    their course that is dedicated to teaching pythin
                  </p>
                </div>
                <span className="vertical-timeline-element-date d-lg-none">July 2020 - October 2020</span>
              </div>
            </div>

            <div id className="vertical-timeline-element">
              <span className="vertical-timeline-element-icon bounce-in">
                <svg role="img" viewBox="0 0 24 24">
                  <path d="MO 0h24v24H0z" fill="none"></path>
                  <path d="M 5 13.18 v 4 L 12 21 l 7 -3.82 v -4 L 12 17 l -7 -3.82 Z M 12 3 L 1 9 l 11 6 l 9 -4.91 V 17 h 2 V 9 L 12 3 Z"></path>
                </svg>
              </span>
              <span className="vertical-timeline-element-date d-none d-md-block datesRight">August 2018 - December 2021</span>
              <div className="vertical-timeline-element-content bounce-in left">
                <div className="vertical-timeline-element-content-arrow"></div>
                <h5 className="MuiTypography-root vertical-timeline-element-title MuiTypography-h5">Makerere University</h5>
                <h6 className="MuiTypography-root vertical-timeline-element-subtitle MuiTypography-h6">Studying Bachelors of Science in Computer Science</h6>
                <div>
                  <p>Is a non-profit that helps young children to 12th grade to go beyond School
                    and learn new and interesting topics! I have participated in 3 editions of Infomatica 
                    their course that is dedicated to teaching pythin
                  </p>
                </div>
                <span className="vertical-timeline-element-date d-lg-none">August 2018 - December 2021</span>
              </div>
            </div>

            
           </div>
    </div>
  )
}
