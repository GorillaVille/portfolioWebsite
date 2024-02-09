import React from 'react'
import bannerImage from '../assets/SamSmith.jpg'
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="aboutLeft" >
        <img src={bannerImage}/>
      </div>

      <div classname="aboutRight">
        <br></br>
        <h1>Hello, my name is Sam Smith! It's nice to meet you!</h1>
        <br></br>
        <p>I'm a 3rd year College Senior at Santa Clara University. My major is Computer Science</p>
        <p>and Engineering, and my capstone project is on the Super Resolution of Omnidirectional </p>
        <p>images using AI, specifically transformers. I'm also a member of Vocalicious, an acapella </p>
        <p>group on campus (we're competing in the ICCA this Spring!) </p>
        <br></br>
        <p>I'm looking for a company to challenge me, where I can learn and make mistakes, but grow</p>
        <p>and become better. I also have accumulated skills over my time at SCU and I'd like to</p>
        <p>put them to use! </p>
      </div>

    </div>
  )
}

export default About

