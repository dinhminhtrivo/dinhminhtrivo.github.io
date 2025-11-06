import React from 'react'
import '../css/About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Motivated and safety-conscious Trades Assistant with strong mechanical aptitude, 
              over seven years of hands-on experience in manufacturing, maintenance, and fabrication. 
              Experienced in supporting tradespeople with metalwork, machine operation, and workshop maintenance. 
              Known for reliability, attention to detail, and positive teamwork. 
            </p>
            <p>
              Eager to continue developing technical skills through on-the-job training at Kilic Engineering 
              while contributing to high-quality engineering projects.
            </p>
          </div>
          <div className="about-location">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Adelaide, South Australia</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

