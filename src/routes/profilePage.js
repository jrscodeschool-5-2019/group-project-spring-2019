import React, { useState, useEffect } from 'react'
import { redirectTo, navigate } from '@reach/router'

const Profile = ({ user }) => {
  const [img, setImg] = useState('')
  const [gradYear, setGradYear] = useState('')
  const [employer, setEmployer] = useState('')
  const [bio, setBio] = useState('')
  const [contactLinks, setContactLinks] = useState({
    gitHub: '',
    linkedIn: '',
    other: ''
  })
  const [finalProject, setFinalProject] = useState('')
  const [name, setName] = useState({ first: '', last: '' })
  const [currentStudent, setCurrentStudent] = useState(false)
  const [seekingEmployment, setSeekingEmployment] = useState(false)
  const [location, setLocation] = useState('')
  const [id, setId] = useState('')

  const handleImg = e => {
    setImg(e.target.value)
  }

  const handleGradYear = e => {
    setGradYear(e.target.value)
  }

  const handleEmployer = e => {
    setEmployer(e.target.value)
  }

  const handleBio = e => {
    setBio(e.target.value)
  }

  const handleFinalProject = e => {
    setFinalProject(e.target.value)
  }

  const handleLocation = e => {
    setLocation(e.target.value)
  }

  const handleName = e => {
    setName({ ...name, [e.target.id]: e.target.value })
  }

  const handleContactLinks = e => {
    setContactLinks({ ...contactLinks, [e.target.id]: e.target.value })
  }

  const handleEmployerStatus = e => {
    setSeekingEmployment(e.target.checked)
  }

  const handleCurrentStudent = e => {
    setCurrentStudent(e.target.checked)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formData = {
      name: name,
      contactLinks: contactLinks,
      currentStudent: currentStudent,
      seekingEmployment: seekingEmployment,
      img: img,
      gradYear: gradYear,
      employer: employer,
      bio: bio,
      finalProject: finalProject,
      location: location
    }
    fetch(`http://localhost:8000/profile/${id}/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(navigate('/student-view'))
      .catch(res => console.log(res))
  }

  useEffect(() => {
    if (!user.loggedIn) {
      redirectTo('/student-login')
    }
    fetch(`http://localhost:8000/profile/${user.username}`)
      .then(res => res.json())
      .then(data => {
        setImg(data.student.img)
        setGradYear(data.student.gradYear)
        setEmployer(data.student.employer)
        setBio(data.student.bio)
        setContactLinks(data.student.contactLinks)
        setFinalProject(data.student.finalProject)
        setName(data.student.name)
        setCurrentStudent(data.student.currentStudent)
        setSeekingEmployment(data.student.seekingEmployment)
        setLocation(data.student.location)
        setId(data.student._id)
      })
  }, [])

  // const handleChange = (e) => {
  //   setProfile({...profile, [e.target.id]: e.target.value})
  // }

  return (
    <div>
      <img src={img} alt={img} />
      <div className='field'>
        <label className='label'>Profile Picture</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='img URL'
            value={img}
            onChange={handleImg}
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Graduation Year</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Year'
            value={gradYear}
            onChange={handleGradYear}
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Employer</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Employer'
            value={employer}
            onChange={handleEmployer}
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Bio</label>
        <div className='control'>
          <textarea
            className='textarea'
            type='text'
            placeholder='Short Bio'
            value={bio}
            onChange={handleBio}
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Final Project</label>
        <div className='control'>
          <textarea
            className='textarea'
            type='text'
            placeholder='Final Project'
            value={finalProject}
            onChange={handleFinalProject}
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Location</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Location'
            value={location}
            onChange={handleLocation}
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>First Name</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='First Name'
            id='first'
            value={name.first}
            onChange={handleName}
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Last Name</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Last Name'
            id='last'
            value={name.last}
            onChange={handleName}
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>GitHub</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='GitHub'
            id='gitHub'
            value={contactLinks.gitHub}
            onChange={handleContactLinks}
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>LinkedIn</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='LinkedIn'
            id='linkedIn'
            value={contactLinks.linkedIn}
            onChange={handleContactLinks}
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Other</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Other'
            id='other'
            value={contactLinks.other}
            onChange={handleContactLinks}
          />
        </div>
      </div>
      <div className='field'>
        <label className='checkbox'>
          <input
            type='checkbox'
            checked={currentStudent}
            onChange={handleCurrentStudent}
          />
          Current Students
        </label>
      </div>
      <div className='field'>
        <label className='checkbox'>
          <input
            type='checkbox'
            checked={seekingEmployment}
            onChange={handleEmployerStatus}
          />
          Seeking Employment
        </label>
      </div>
      <button className='button' onClick={handleSubmit}>
        {' '}
        Submit{' '}
      </button>
    </div>
  )
}

export default Profile
