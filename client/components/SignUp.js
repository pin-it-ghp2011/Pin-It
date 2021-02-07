import React, {Component} from 'react'
import firebase from '../../config/firebaseConfig'

class SignUp extends Component {
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
      const confirmedPassword = event.target.passwordConfirm.value

      //password length checking
      // if(password.lenngth<6){}

      // password and confirm password should be equal
      // if(password!==confirmedPassword){
      //   alert("PAssword and Confirmed Password doesn't match")
      // }

      //send the data and create the user in firebase Auth
      await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="signupContainer">
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
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
          <div className="passwordConfirm">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              name="passwordConfirm"
              type="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="buttonDiv">
            <button type="submit">SignUp</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
