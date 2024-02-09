import React from 'react'
import {Link} from 'react-router-dom'
import bannerImage from "../assets/background.avif"
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage:  `url(${bannerImage})` }}>
      <div 
        className="headerContainer"
        
      >
        <h1> Hi, My Name's Sam</h1>
        <p>It's Nice to Meet You!
        </p>
        <Link to="/contact">
        <button> Want to say hi?</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
