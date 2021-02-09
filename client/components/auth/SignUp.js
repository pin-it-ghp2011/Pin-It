import React, {Component, useState} from 'react'
import {useAuth} from './AuthContext'
import firebase from '../../../config/firebaseConfig'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [error, setError] = useState('')

  //calling the signUp function from UseAuth
  const {signup} = useAuth()

  //setting the values to the control input
  const handleChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value)
    }
    if (event.target.name === 'email') {
      setEmail(event.target.value)
    }
    if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
    if (event.target.name === 'confirmedPassword') {
      setConfirmedPassword(event.target.value)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      //get user info
      setName(name)
      setEmail(email)
      setPassword(password)
      setConfirmedPassword(confirmedPassword)
      setError('')

      console.log('User  Name', name)
      console.log('User email', email)
      console.log('User  password', password)
      console.log('User confirmed password', confirmedPassword)

      //password length checking
      if (password.lenngth < 6) {
        console.log(error)
        return setError('Password must be greater than 6 characters')
      }

      // password and confirm password should be equal
      if (password !== confirmedPassword) {
        return setError("Password and Confirmed Password doesn't match")
      }

      //send the data and create the user in firebase Auth
      await signup(email, password)
      setName('')
      setEmail('')
      setPassword('')
      setConfirmedPassword(confirmedPassword)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="signupContainer">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="nameContainer">
          <label htmlFor="name">Name</label>
          <input name="name" type="text" onChange={handleChange} />
        </div>
        <div className="emailContainer">
          <label htmlFor="emailId">Email</label>
          <input name="email" type="text" onChange={handleChange} />
        </div>
        <div className="passwordContainer">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <div className="confirmedPasswordContainer">
          <label htmlFor="confirmedPassword">Confirm Password</label>
          <input
            name="confirmedPassword"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div className="buttonDiv">
          <button type="submit">SignUp</button>
        </div>
        <div>{error}</div>
      </form>
    </div>
  )
}

export default SignUp
