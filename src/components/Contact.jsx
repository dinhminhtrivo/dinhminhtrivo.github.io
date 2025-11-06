import React from 'react'
import './Contact.css'

const Contact = () => {
  const referees = [
    {
      name: 'Mr. Keison Parker',
      title: 'Senior Battery Bull Operator',
      company: 'Battery Service Australia',
      phone: '+61 421 871 777',
      email: 'keison.parker@hotmail.com'
    },
    {
      name: 'Mr. Tony Maffia',
      title: 'Maintenance Manager',
      company: 'Bertocchi Smallgoods Pty Ltd',
      phone: '+61 412 057 077',
      email: 'Available upon request'
    },
    {
      name: 'Mr. Hoang Anh Tai',
      title: 'Project Director',
      company: 'Key Tech Vietnam Co., Ltd',
      phone: '+84 911 409 479',
      email: 'tai@key-tech.co.jp'
    }
  ]

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact & Referees</h2>
        
        <div className="contact-info">
          <div className="contact-card">
            <h3 className="contact-card-title">Get in Touch</h3>
            <div className="contact-details">
              <a href="mailto:dinhminhtrivo@gmail.com" className="contact-detail-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">dinhminhtrivo@gmail.com</span>
                </div>
              </a>
              <a href="tel:+61476419709" className="contact-detail-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+61 476 419 709</span>
                </div>
              </a>
              <div className="contact-detail-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Adelaide, South Australia</span>
                </div>
              </div>
              <a href="https://www.linkedin.com/in/vodinhminhtri" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">linkedin.com/in/vodinhminhtri</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="referees-section">
          <h3 className="subsection-title">Referees</h3>
          <div className="referees-grid">
            {referees.map((referee, index) => (
              <div key={index} className="referee-card">
                <h4 className="referee-name">{referee.name}</h4>
                <p className="referee-title">{referee.title}</p>
                <p className="referee-company">{referee.company}</p>
                <div className="referee-contact">
                  <a href={`tel:${referee.phone.replace(/\s/g, '')}`} className="referee-phone">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    {referee.phone}
                  </a>
                  {referee.email !== 'Available upon request' ? (
                    <a href={`mailto:${referee.email}`} className="referee-email">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      {referee.email}
                    </a>
                  ) : (
                    <span className="referee-email">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      Available upon request
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

