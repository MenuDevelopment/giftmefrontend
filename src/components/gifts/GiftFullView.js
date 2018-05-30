import React from "react"
import {Button, Container, Header} from 'semantic-ui-react'

const GiftFullView = (props) => {
  let yourPledge = props.gift.pledges.find((pledge) => {
    return pledge.user.name === localStorage.username
  })
  return (
    <Container>
      <Header as="h1">{props.gift.item}</Header>
      {!!props.gift.pledges.length ?
        props.progressBar(props.gift.price, props.gift.pledges) :
        <h2>No one has contributed towards this great gift, be the first one!</h2>
      }
      {localStorage.id}
      {yourPledge ?
         <h3>You've pledged to this campaign!</h3> :
         <Button onClick= {()=>{props.pledgeADollar(props.gift)}}>Pledge a dollar!</Button>
       }


    </Container>
  )
}

export default GiftFullView
