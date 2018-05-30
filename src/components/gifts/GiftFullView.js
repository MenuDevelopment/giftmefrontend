import React from "react"
import {Button, Container, Header} from 'semantic-ui-react'

const GiftFullView = (props) => {
  return (
    <Container>
      <Header as="h1">{props.gift.item}</Header>
      {!!props.gift.pledges.length ? props.progressBar(props.gift.price, props.gift.pledges) : <h2>No one has contributed towards this great gift, be the first one!</h2>}
    </Container>
  )
}

export default GiftFullView
