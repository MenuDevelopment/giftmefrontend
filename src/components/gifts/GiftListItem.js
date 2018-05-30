import React from 'react'
import PledgeListItem from '../pledges/PledgeListItem'
import { Button, Card, List} from 'semantic-ui-react'

const GiftListItem = (props) => {

  const pledgeLister = (pledges) => {
    if (pledges) {
      return pledges.map((pledge) => {
        return <PledgeListItem username = {pledge.user.name} amount = {pledge.amount} />
      })
    } else {
      return null
    }
  }

  const thisGiftClicked = () => {
    props.giftClicked(props.name)
  }



  return (
    <Card onClick = {thisGiftClicked} >
      <Card.Header> {props.name} </Card.Header>
      <Card.Meta> Goal: {props.price} </Card.Meta>
      {props.progressBar(props.price, props.pledges)}
      <Card.Description>
        {props.pledges.length > 0 ? <h4>Contributors:</h4> : null}
        {pledgeLister(props.pledges)}
      </Card.Description>
    </Card>
  )

}


export default GiftListItem
