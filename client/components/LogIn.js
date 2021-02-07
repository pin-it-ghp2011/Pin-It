import React, {Component} from 'react'
import firebase from '../../config/firebaseConfig'

class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    try {
      //get user info
      const email = this.state.email
      const password = this.state.password
      console.log('User email and password', email + password)

      //sign In the user in firebase Auth
      await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log(`email and password, ${email} ${password} `)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="signupContainer">
        <form onSubmit={this.handleSubmit}>
          <h1>Log In</h1>
          <div className="email">
            <label htmlFor="emailId">Email</label>
            <input name="email" type="text" onChange={this.handleChange} />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="buttonDiv">
            <button type="submit">LogIn</button>
          </div>
        </form>
      </div>
    )
  }
}

export default LogIn
