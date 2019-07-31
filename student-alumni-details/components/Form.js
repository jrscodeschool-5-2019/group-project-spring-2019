import React from 'react'
import PropTypes from 'prop-types'


export default class Form extends React.Component {
    constructor (props) {
        super (props) 
        this.state = {
            name: this.props.values.name || 'your name',
            username: this.props.values.username || 'username',
            gradYear: this.props.value.graduationYear || 'date',
            employmentStatus: this.props.value.employmentStatus || 'current or seeking',
            github: this.props.value.githubAccount || 'your account',
            linkedIn: this.props.value.linkedInAccount || 'your account',
            other: this.props.value.personalAccount || 'your account',
            finalProject: this.props.value.finalProject || 'project',
            bio: this.props.value.shortBio || 'bio'
            
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

    // This needs to be displaying not submitting

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>
                    Your Name
                </label>
            <input type='text' value={this.state.name} onChange={this.handleChange} name='name' />
                <label htmlFor='username'>
                    username
                </label>
            <input type='text' value={this.state.name} onChange={this.handleChange} name='username' />
                <label htmlFor='gradYear'>
                    Date
                </label>
            <input type='text' value={this.state.gradYear} onChange={this.handleChange} name='gradYear' />
                <label htmlFor='employmentStatus'>
                    Status
                </label>
            <input type='text' value={this.state.employmentStatus} onChange={this.handleChange} name='employmentStatus' />
                <label htmlFor='gitHub'>
                    Your Account
                </label>
            <input type='text' value={this.state.gitHub} onChange={this.handleChange} name='gitHub' />
                <label htmlFor='linkedIn'>
                    Your Account
                </label>
            <input type='text' value={this.state.linkedIn} onChange={this.handleChange} name='linkedIn' />
                <label htmlFor='personalAccount'>
                    Your Account
                </label>
            <input type='text' value={this.state.other} onChange={this.handleChange} name='other' />
                <label htmlFor='finalProject'>
                    Project
                </label>
            <input type='text' value={this.state.finalProject} onChange={this.handleChange} name='finalProject' />
                <label htmlFor='bio'>
                    Bio
                </label>
            <textarea value='text' value={this.state.bio} onChange={this.handleChange} name='bio' />
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
        other: PropTypes.string,
        finalProject: PropTypes.string,
        bio: PropTypes.string,
    }).isRequired
}