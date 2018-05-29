import React from 'react'
import PledgeListItem from '../pledges/PledgeListItem'

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

  return (
    <div className = "GiftListItem" >
      <h3> {props.name} </h3>
      <h4> Goal: {props.price} </h4>
      <ul>
        {pledgeLister(props.pledges)}
      </ul>
    </div>
  )

}


export default GiftListItem
