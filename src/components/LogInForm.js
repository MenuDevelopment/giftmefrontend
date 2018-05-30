import React from 'react'
import {Card, Form} from 'semantic-ui-react'

class LogInForm extends React.Component {
  state = {
    usernameText : "",
    passwordText : "",
  }

  logInSubmitted =  (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/sessions/`,
    {
      headers: {'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify({
        username: this.state.usernameText,
        password: this.state.passwordText
      })
    })
    .then(res=> res.json())
    .then((res) => {
      if (res.token) {
        localStorage.setItem('token', res.token)
        localStorage.setItem('username', res.username)
        localStorage.setItem('id', res.user_id)
        this.props.history.push('/')
      }
      this.setState({
        usernameText : '',
        passwordText : ''
      })
      //this returns a token
      //anywhere that needs auth, include in header authroization: token
    })
  }

  handleTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render () {
    return (
      <div>
        <Form onSubmit = {this.logInSubmitted}>
          <Form.Input fluid
            placeholder="Username"
            onChange={this.handleTextChange}
            name="usernameText"
            value={this.state.usernameText}
          />
          <Form.Input fluid
            type='password'
            placeholder="Password"
            onChange={this.handleTextChange}
            name="passwordText"
            value={this.state.passwordText}
          />
          <Form.Button content='Log In' />
        </Form>
      </div>
    )
  }
}

export default LogInForm
