import React from 'react'

export default class App extends React.Component {
    constructor (props) {
        super(props)
        // super() is used to call the parent constructor. 
        //super(props) would pass props to the parent constructor.
        this.state = {
            //photo: require('../something.jpg'),
            profileFields: {
                name: null,
                location: null,
                graduationYear: null,
                employmentStatus: null,
                githubAccount: null,
                linkedInAccount: null,
                personalAccount: null,
                finalProject: null,
                shortBio: null
            }
        }
    }

    render () {
        return (
            <div>
                <Nav title='Student/Alumni Profile' />
                <Profile profileFields={this.stqte.profileFields} photo={this.state.photo} />
            </div>
        )
    }
}

