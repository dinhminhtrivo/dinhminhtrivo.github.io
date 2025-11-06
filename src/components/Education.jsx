import React from 'react'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Master of Information Technology',
      institution: 'FLINDERS UNIVERSITY – FESTIVAL PLAZA CITY CAMPUS',
      period: '7/2024 – 6/2026',
      duration: '2 years program – full time'
    },
    {
      degree: 'Bachelor of Engineering: Engineering Mechanics',
      institution: 'VIET NAM NATIONAL UNIVERSITY - HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY (HCMUT)',
      period: '8/2014 - 10/2018',
      duration: '4 years program – full time'
    }
  ]

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5"/>
                </svg>
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-meta">
                  <span className="education-period">{edu.period}</span>
                  <span className="education-duration">{edu.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

