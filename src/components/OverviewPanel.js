import React from 'react'
import ProfileImage from '../images/profileimage.jpg'
import './OverviewPanel.scss'

export default function() {
  return (
    <div className="overview-panel">
      <img className="profile-image" src={ProfileImage} />
      <div className="center-text">This website is under construction! Check back later for updates or email me at tehandyb@gmail.com</div>
    </div>
  )
}