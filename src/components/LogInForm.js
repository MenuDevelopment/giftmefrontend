import React from 'react'

class LogInForm extends React.Component {
  state = {
    usernameText : "",
    passwordText : "",
  }

  logInSubmitted =  (event) => {
    event.preventDefault()
    fetch(`http://localhost:3001/api/v1/sessions/`,
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
      console.log(res)
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
        <form onSubmit = {this.logInSubmitted}>
          <input
            type="text"
            placeholder="Username"
            onChange={this.handleTextChange}
            name="usernameText"
            value={this.state.usernameText}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={this.handleTextChange}
            name="passwordText"
            value={this.state.passwordText}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default LogInForm
