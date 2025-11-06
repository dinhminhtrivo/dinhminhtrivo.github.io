import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Steven Vo. All rights reserved.</p>
          <div className="footer-links">
            <a href="mailto:dinhminhtrivo@gmail.com">Email</a>
            <a href="tel:+61476419709">Phone</a>
            <a href="https://www.linkedin.com/in/vodinhminhtri" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

