import React from 'react'

const PledgeListItem = (props) => {
  return (
    <li>
      {props.username} : {props.amount} : {props.id}
    </li>
  )
}

export default PledgeListItem
