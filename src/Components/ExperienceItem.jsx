import React from 'react'
import '../styles/ExperienceItem.css'

function ExperienceItem({title, date, about1, about2, about3}) {
  return (
    <div className="experienceDiv">
      <div className="experienceItem">
        <h4>{title}</h4>
        <h2>{date}</h2>
        <p>-{about1}</p>
        <p>-{about2}</p>
        <p>-{about3}</p>
      </div>
      <br></br>
    </div>
  )
}

export default ExperienceItem
