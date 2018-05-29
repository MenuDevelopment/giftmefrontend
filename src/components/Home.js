import React from 'react'
import GiftListItem from './gifts/GiftListItem'

class Home extends React.Component {

  state = {
    gifts: []
  }

  componentDidMount () {
    if (localStorage.getItem("token")){
      fetch('http://localhost:3001/api/v1/gifts/',{
        headers: {
          authorization: localStorage.token
        }
      })
      .then(res => res.json())
      .then( res => {
        this.setState ({ gifts: res})
      })
    } else {
      this.props.history.push("/login")
    }
  }

  render () {
    const giftComps = this.state.gifts.map((gift)=> {
      return (
        <GiftListItem
        name = {gift.item}
        pledges = {gift.pledges}
        price = {gift.price}
         />
     )
    })
    return (
      <div className = "GiftList">
        {giftComps}
      </div>
    )
  }
}

export default Home
