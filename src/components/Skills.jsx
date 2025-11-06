import React from 'react'
import './Skills.css'

const Skills = () => {
  const qualifications = [
    'Forklift licence in South Australia - Class LF Forklift Truck',
    'Full driver licence in South Australia',
    'Engineer Australia Qualification - Engineering Technologist (ANZSCO – 233914)',
    'CSWP (Certificate SolidWorks Professional)',
    'CSWPA-DT (Certificate SolidWorks – Drawing Tool)'
  ]

  const skillCategories = [
    {
      title: 'Metal Fabrication & Machining',
      skills: ['Milling', 'Lathe', 'Welding', 'Fitting', 'Laser Cutting', 'Hand and Power Tools']
    },
    {
      title: 'Mechanical Maintenance',
      skills: ['Assembly', 'Repair', 'Inspection of Machines', 'Production Line Maintenance']
    },
    {
      title: 'Safety & Accuracy',
      skills: ['WHS Compliance', 'Maintaining Clean Workspaces', 'Organized Work Practices']
    },
    {
      title: 'Teamwork & Communication',
      skills: ['Effective Communication', 'Collaborative Teamwork', 'Project Coordination']
    },
    {
      title: 'Critical Thinking & Problem Solving',
      skills: ['Analysis', 'Creative Thinking', 'Informed Engineering Decisions']
    },
    {
      title: 'Engineering Software',
      skills: ['AutoCAD', 'SolidWorks', 'Inventor', 'Microsoft Office Suite']
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Qualifications & Skills</h2>
        
        <div className="qualifications-section">
          <h3 className="subsection-title">Qualifications</h3>
          <ul className="qualifications-list">
            {qualifications.map((qual, index) => (
              <li key={index} className="qualification-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {qual}
              </li>
            ))}
          </ul>
        </div>

        <div className="skills-section">
          <h3 className="subsection-title">Skills & Expertise</h3>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h4 className="skill-category-title">{category.title}</h4>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

