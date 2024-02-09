import React from 'react'
import { JobList } from  "../helpers/ExperienceList.js"
import { ProjectList } from  "../helpers/ExperienceList.js"
import { ExperienceList } from  "../helpers/ExperienceList.js"
import ExperienceItem from "../Components/ExperienceItem.jsx"
import '../styles/Experience.css'


function Experience() {
    
  return (
    <div className="experience">
        <h1 className="jobTitle">In-Field Experience</h1>
      <div className="jobList">
        {JobList.map((experienceItem, Key) =>
      {
        return (<ExperienceItem key={Key}
          title={experienceItem.name} 
          date={experienceItem.date}
          about1={experienceItem.about1}
          about2={experienceItem.about2}
          about3={experienceItem.about3}
        />
        );
      }
      )}
      </div>
      <h1 className="projectTitle">Projects</h1>
      <div className="projectList">
        {ProjectList.map((projectItem, Key) =>
      {
        return (<ExperienceItem key={Key}
          title={projectItem.name} 
          date={projectItem.date}
          about1={projectItem.about1}
          about2={projectItem.about2}
          about3={projectItem.about3}
        />
        );
      }
      )}
      </div>
      <h1 className="experienceTitle">Experience</h1>
      <div className="experienceList">
        {ExperienceList.map((experienceItem, Key) =>
      {
        return (<ExperienceItem key={Key}
          title={experienceItem.name} 
          date={experienceItem.date}
          about1={experienceItem.about1}
          about2={experienceItem.about2}
          about3={experienceItem.about3}
        />
        );
      }
      )}
      </div>

    </div>
  )
}

export default Experience
