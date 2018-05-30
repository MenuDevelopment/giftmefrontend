import React from 'react'
import PledgeListItem from '../pledges/PledgeListItem'
import { Button, Card, Progress} from 'semantic-ui-react'

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

  const progressBar = (price, pledges) => {
    if (pledges.length > 0){
      const totalPledges = pledges.reduce( (acc, current) => {
        return acc + parseFloat(current.amount)
      }, 0)
      let percentRaised = ((totalPledges/price) * 100).toFixed(2)
      if (percentRaised > 100) { percentRaised = 100}
      return (
        <div>
          <p>Total raised: {totalPledges}</p>
          <Progress percent={percentRaised} indicating progress="percent"/>
       </div> )
      } else {
        return null
      }
  }

  return (
    <div className = "GiftListItem" >
      <Card>
<<<<<<< Updated upstream
        <h3> {props.name} </h3>
        <h4> Goal: {props.price} </h4>
        {progressBar(props.price, props.pledges)}
        <div>
          <h4> Contributors: </h4>
=======
        <Card.Header> {props.name} </Card.Header>
        <Card.Meta> Goal: {props.price} </Card.Meta>
        <Button content ="sup yall" />
        <h4> {progressBar(props.price, props.pledges)} </h4>
        <Card.Description>
>>>>>>> Stashed changes
          {pledgeLister(props.pledges)}
        </Card.Description>
      </Card>

    </div>
  )

}


export default GiftListItem
