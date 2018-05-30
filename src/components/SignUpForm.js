import React from 'react'
import {Card, Form} from 'semantic-ui-react'

class SignUpForm extends React.Component {
  state = {
    usernameText : '',
    emailText : '',
    paymentText : '',
    passwordText : '',
  }

  signUpSubmitted =  (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/users/`,
    {
      headers: {'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify({
        username: this.state.usernameText,
        email: this.state.emailText,
        payment: this.state.paymentText,
        password: this.state.passwordText
      })
    })
    .then(res=> res.json())
    .then((res) => {
      console.log(res)
      localStorage.setItem('token', res.token)
      localStorage.setItem('username', res.username)
      localStorage.setItem('id', res.user_id)
      this.props.history.push('/')
      this.setState({
        usernameText : '',
        emailText : '',
        paymentText : '',
        passwordText : ''
      })
      //this returns a token
      //anywhere that needs auth, include in header authroization: token
    })
  }
  //log in
  //fetch to sessions controller with username and password
  //gives back the token

  handleTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <div className = "signUpForm">
        <h1> Sign Up</h1>
        <Form onSubmit = {this.signUpSubmitted}>
          <Form.Input
            placeholder="Username"
            onChange={this.handleTextChange}
            name="usernameText"
            value={this.state.usernameText}
          />
          <Form.Input
            placeholder="Email Address"
            onChange={this.handleTextChange}
            name="emailText"
            value={this.state.emailText}
          />
          <Form.Input
            type="password"
            placeholder="Password"
            onChange={this.handleTextChange}
            name="passwordText"
            value={this.state.passwordText}
          />
          <Form.Input
            placeholder="Payment Info"
            onChange={this.handleTextChange}
            name="paymentText"
            value={this.state.paymentText}
          />
          <Form.Button content='Submit' />
        </Form>

      </div>
    )
  }
}

export default SignUpForm
