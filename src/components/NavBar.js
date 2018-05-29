import React from 'react'

const NavBar = (props) => {
  const SignOutButton = () => {
    return (
      <button onClick = {props.logOutClicked} >Log Out</button>
    )
  }
  const LogInAndSignUp = () => {
    return (
      <div>
        <button onClick={props.logInClicked}>Log In</button>
        <button onClick={props.signUpClicked}>Sign Up</button>
      </div>
    )
  }
  return (
    <div className = "NavBar">
      <h1>Gift.Me: Sending awesome gifts, together.</h1>
      <div className = "ButtonHolder" >
        {props.loggedIn ? SignOutButton() : LogInAndSignUp() }
      </div>
    </div>
  )

}

export default NavBar
