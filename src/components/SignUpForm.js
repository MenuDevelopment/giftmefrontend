import React from 'react'

class SignUpForm extends React.Component {
  state = {
    usernameText : '',
    emailText : '',
    paymentText : '',
  }

  signUpSubmitted =  (event) => {
    event.preventDefault()
    fetch(`http://localhost:3001/api/v1/users`,
    {
      headers: {'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify({
        username: this.state.usernameText,
        email: this.state.emailText,
        payment: this.state.paymentText
      })
      .then(res => res.json())
      .then(console.log)
    })
  }

  handleTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <div className = "signUpForm">
        <h1> Sign Up</h1>
        <form onSubmit = {this.signUpSubmitted}>
          <input
            type="text"
            placeholder="Username"
            onChange={this.handleTextChange}
            name="usernameText"
            value={this.state.usernameText}
          />
          <input
            type="text"
            placeholder="Email Address"
            onChange={this.handleTextChange}
            name="emailText"
            value={this.state.emailText}
          />
          <input
            type="text"
            placeholder="Payment Info"
            onChange={this.handleTextChange}
            name="paymentText"
            value={this.state.paymentText}
          />
          <input type="submit" />
        </form>

      </div>
    )
  }
}

export default SignUpForm
