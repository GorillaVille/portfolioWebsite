import React from 'react'
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'


//https://github.com/GorillaVille
//https://www.linkedin.com/in/samuel-smith-scu/
function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <IconButton href="https://www.linkedin.com/in/samuel-smith-scu/" target="_blank">
            <LinkedInIcon />
            </IconButton>
            <IconButton href="https://github.com/GorillaVille" target="_blank">
              <GitHubIcon />
            </IconButton>
        </div>
        <p> &copy;2024 Samuel Smith</p>

    </div>
  )
}

export default Footer
