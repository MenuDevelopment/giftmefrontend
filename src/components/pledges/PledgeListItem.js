import React from 'react'

const PledgeListItem = (props) => {
  return (
    <li>
      {props.username} : {props.amount}
    </li>
  )
}

export default PledgeListItem
