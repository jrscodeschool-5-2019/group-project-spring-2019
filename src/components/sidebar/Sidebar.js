import React from 'react'
import 'bulma/css/bulma.css'
import './sidebar-styles.css'

const SideBar = () => {
  return (
    <div className='column is-3 sidebar'>
      <h1>Events</h1>
      <ul>
        <li className='event-list-item'>
          <span className='event-title'>The Harbor Grand Opening</span>
          <p className='event-desc'>
            Come celebrate the grand opening of the Harbor's new location in
            downtown Charleston!
            <br />
            Date and time unknown
          </p>
        </li>
        <li className='event-list-item'>
          <span className='event-title'>Graduation Expo</span>
          <p className='event-desc'>
            Take a look at our current cohort of JRS Coding School's final
            projects.
            <br />
            Date and time unknown
          </p>
        </li>
        <li className='event-list-item'>
          <span className='event-title'>JRS Alumni Event</span>
          <p className='event-desc'>
            Are you an alumni of JRS Coding School? Great! Come socialize with
            previous cohorts!
            <br />
            Date and time unknown
          </p>
        </li>
      </ul>
      <p className='bottomtag'>
        For more information, please visit <br />
        <a href='http://www.harborec.com/jrs-coding-school' target='blank'>
          The Harbor Entrepreneur Center
        </a>
      </p>
    </div>
  )
}

export default SideBar
