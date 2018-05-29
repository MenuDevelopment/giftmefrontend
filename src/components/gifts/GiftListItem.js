import React from 'react'
import PledgeListItem from '../pledges/PledgeListItem'
import { Line } from 'rc-progress'

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
          <Line percent={percentRaised} strokeWidth="4" strokeColor="red" trailColor = "blue" />
       </div> )
      } else {
        return null
      }
  }

  return (
    <div className = "GiftListItem" >
      <h3> {props.name} </h3>
      <h4> Goal: {props.price} </h4>
      <h4> {progressBar(props.price, props.pledges)} </h4>
      <div>
        {pledgeLister(props.pledges)}
      </div>
    </div>
  )

}


export default GiftListItem
