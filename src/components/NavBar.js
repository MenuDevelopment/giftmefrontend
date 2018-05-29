import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  const SignOutButton = () => {
    return (
      <button onClick = {props.logOutClicked} >Log Out</button>
    )
  }
  const LogInAndSignUp = () => {
    return (
      <div>
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
    </div>
    )
  }
  return (
    <div className = "NavBar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>Gift.Me: Sending awesome gifts, together.</h1>
      </Link>
      <div className = "ButtonHolder" >
        {localStorage.getItem("token") ? SignOutButton() : LogInAndSignUp() }
      </div>
    </div>
  )

}

export default NavBar
