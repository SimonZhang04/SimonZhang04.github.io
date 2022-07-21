import React from "react"

export default function About() {
    return (
        <div id="about" className="about-container">
            <div className="about-info">
                <h2 className="about-title">About</h2>
                <hr className="line"></hr>
                <img className="picture" src={require('./images/profile.jpg')} />
                <p className='about-paragraph'>Hi, I’m Simon. I’ll be enrolling in the Software 
                    Engineering program at the University of Waterloo this 
                    September. 
                    <br />
                    <br />
                    I’ve recently graduated high school from Agincourt Collegiate 
                    Institute where I was the Vice President of the Environmental 
                    Council, ran a math contest preparation group. I was also a member of 
                    the tutoring club, reach for the top intramurals, and senior 
                    co-ed ultimate frisbee team. 
                </p>
                <a className="button-container" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1CPmdGAzu31oa2cw1AtbqZE4zAvhLkN4W/view?usp=sharing">
                    <button className='resume-button'>Resume</button>
                </a>
            </div>
            <div className="about-lists">
                <div>
                    <h3 className="list-title">Skills</h3>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>Javascript - React JS, React Native</li>
                        <li>Python</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div>
                    <h3 className="list-title">Interests</h3>
                    <ul>
                        <li>Biking, ultimate frisbee, badminton</li>
                        <li>Sketching, digital art</li>
                        <li>Cooperative video games</li>
                        <li>Sustainable technology, web and app development</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}