import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Sidebar() {
  return (
    <div className='nav-bar'>

      <div className='container'>
        <div className="imageContainer">
        <Link to="/">
          <img className='logo' src="https://cdn.freebiesupply.com/logos/large/2x/harsh-logo-svg-vector.svg"></img>
        </Link>
        </div>
        <div className='realLinks'>
         <Link className='links' to="home">Home</Link>
         <Link  className='links' to="skills">Skills</Link>
         <Link  className='links' to="about">About</Link>
       </div>
       <div className='socialsContainer'>
        <Link className='socials' target="_blank" to="https://twitter.com/HarshRanjanDwi3">
          <TwitterIcon/>
        </Link>
        <Link className='socials' target="_blank" to="https://www.linkedin.com/in/harsh-ranjan-dwivedi-687106212/">
          <LinkedInIcon/>
        </Link>
        
       </div>

      </div>
    </div>
  )
}

export default Sidebar
