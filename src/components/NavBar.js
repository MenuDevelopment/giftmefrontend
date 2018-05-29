import React from 'react'

const NavBar = (props) => {

  return (
    <div class = "App-header">
      <h1>Gift.Me: Sending awesome gifts, together.</h1>
      <div className = "ButtonHolder" >
        {props.loggedIn ? <button>Sign Out</button> : <button>Log In</button> }
      </div>
    </div>
  )

}

export default NavBar
