import React from 'react'
import Nav from './Nav'
import Profile from './Profile'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      photo: require('../jane-doe.jpg'),
      profileFields: {
        name: '',
        jobTitle: 'Web Developer',
        birthday: null,
        bio: null
      }
    }
  }

  render () {
    return (
      <div>
        <Nav title='Student-Alumni Profile' />
        <Profile profileFields={this.state.profileFields} photo={this.state.photo} />
      </div>
    )
  }
}

if (module.hot) module.hot.accept()