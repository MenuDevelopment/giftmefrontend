import React from 'react'
import GiftListItem from './gifts/GiftListItem'

class Home extends React.Component {

  state = {
    gifts: []
  }

  componentDidMount () {
    fetch('http://localhost:3001/api/v1/gifts/')
    .then(res => res.json())
    .then( res => {
      this.setState ({ gifts: res})
    })
  }

  render () {
    const giftComps = this.state.gifts.map((gift)=> {
      return ( <GiftListItem
        name = {gift.item}
        pledges = {gift.pledges}
        price = {gift.price}
         />)
    })
    return (
      <div className = "GiftList">
        {giftComps}
      </div>
    )
  }
}

export default Home
