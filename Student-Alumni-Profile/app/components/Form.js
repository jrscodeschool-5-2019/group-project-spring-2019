import React from 'react'
import PropTypes from 'prop-types'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.values.name || 'Your name',
      username: this.props.values.username || 'username',
      gradYear: this.props.values.gradYear || 'date',
      employmentStatus: this.props.values.employmentStatus || 'status',
      gitHub: this.props.values.gitHub || 'account',
      linkedIn: this.props.values.linkedIn || 'account',
      email: this.props.values.email || 'Email',
      finalProject: this.props.values.finalProject || 'project description',
      bio: this.props.values.bio || 'short bio'

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'>
          Name
        </label>
        <input type='text' value={this.state.name} onChange={this.handleChange} name='name' />
        <label htmlFor='username'>
          Username
        </label>
        <input type='text' value={this.state.username} onChange={this.handleChange} name='username' />
        <label htmlFor='gradYear'>
          Graduation Year
        </label>
        <input type='text' value={this.state.gradYear} onChange={this.handleChange} name='gradYear' />
        <label htmlFor='employmentStatus'>
          Employment Status
        </label>
        <input type='text' value={this.state.employmentStatus} onChange={this.handleChange} name='status' />
        <label htmlFor='gitHub'>
          Github
        </label>
        <input type='text' value={this.state.gitHub} onChange={this.handleChange} name='gitHub' />
        <label htmlFor='linkedIn'>
          Linkedin
        </label>
        <input type='text' value={this.state.linkedIn} onChange={this.handleChange} name='linkedIn' />
        <label htmlFor='email'>
          Email
        </label>
        <input type='text' value={this.state.email} onChange={this.handleChange} name='email' />
        <label htmlFor='finalProject'>
          Final Project
        </label>
        <input type='text' value={this.state.finalProject} onChange={this.handleChange} name='finalProject' />
        <label htmlFor='bio'>
          Bio
        </label>
        <textarea value={this.state.bio} onChange={this.handleChange} name='bio' />
        <button className='cta-primary' type='submit'>
          Save
        </button>
      </form>
    )
  }
}

Form.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    gradYear: PropTypes.string,
    employmentStatus: PropTypes.string,
    gitHub: PropTypes.string,
    linkedIn: PropTypes.string,
    email: PropTypes.string,
    finalProject: PropTypes.string,
    bio: PropTypes.string
  }).isRequired
}

hi