import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Battery Bull Operator',
      company: 'Battery Service Australia',
      location: 'Australia',
      period: '01/2025 – 10/2025',
      responsibilities: [
        'Safely changed, maintained batteries for forklifts, runners, and reach trucks at Coles Distribution Centre, Edinburgh.',
        'Operated Battery Bull Machine to complete battery swaps in compliance with site safety protocols.',
        'Daily monitored and reported battery performance issues, faults, and damage to minimise downtime.',
        'Accurately recorded battery swaps and service logs, ensuring traceability and reporting compliance.',
        'Worked both independently to improve service quality and support warehouse operations.'
      ]
    },
    {
      title: 'Maintenance Worker',
      company: 'Bertocchi Smallgoods Pty Ltd',
      location: 'Australia',
      period: '05/2022 – 07/2024',
      responsibilities: [
        'Complete maintenance tasks and warehouse, production support upon request.',
        'Conduct fitting, welding, fabricating and machining activities meet standard operating procedures.',
        'Perform appropriate equipment maintenance to ensure safe and efficient equipment operations.',
        'Analyse risks associated with equipment operations to implement safety measures to support seamless production.',
        'Handle and schedule issues with automatic machines within the factory.',
        'Create production support tools to support efficient equipment operations and seamless production.'
      ]
    },
    {
      title: 'Design Engineer',
      company: 'Key Tech Vietnam Co., Ltd',
      location: 'Vietnam',
      period: '04/2019 – 04/2022',
      responsibilities: [
        'Communicate to improve and handle technical problems in production lines of customers.',
        'Liaise with Electrical - Pneumatic partners and customers about production automation solution consulting.',
        'Assembly documentation making, draft drawings for quotation: Automation machine, Conveyor system, JIG.',
        'Undertake various dissection drawings, including detail drawings, sheet metal drawings, assembly drawings to support project execution by using professional software such as Solidworks, Inventor, AutoCAD.',
        'Assemble and adjust the automatic machine system planning and execution.',
        'Support program output, quality control and operate CNC laser machines to support the production department.'
      ]
    },
    {
      title: 'Process Engineer',
      company: 'Nidec Sankyo Vietnam Corporation',
      location: 'Vietnam',
      period: '11/2018 – 03/2019',
      responsibilities: [
        'Assemble stamping machines from assembly drawings, adjusting mini-size details for the step motor of phone camera.',
        'Prepare production summary reports to support production planning and solving problems',
        'Liaise with the production department regarding updates on assembly drawings to implement appropriate modifications to meet production schedules.'
      ]
    }
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company} - {exp.location}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

