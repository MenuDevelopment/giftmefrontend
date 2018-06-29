import React from 'react'
import {Link} from 'react-router-dom'
import { Header, Segment, Button } from 'semantic-ui-react'

const NavBar = (props) => {
  const SignOutButton = () => {
    return (
      <Button inverted onClick = {props.logOutClicked}>Log Out</Button>
    )
  }
  const LogInAndSignUp = () => {
    return (
      <div>
        <Link to="/login">
          <Button inverted>Log In</Button>
        </Link>
        <Link to="/signup">
          <Button inverted>Sign Up</Button>
        </Link>
    </div>
    )
  }
  return (
    <Segment inverted textAlign='center'>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Header as='h1' inverted color='white' textAlign='center'>Gift.Me: Sending awesome gifts, together.</Header>
      </Link>
      <div className = "ButtonHolder" >
        {localStorage.getItem("token") ? SignOutButton() : LogInAndSignUp() }
      </div>
    </Segment>
  )

}

export default NavBar
