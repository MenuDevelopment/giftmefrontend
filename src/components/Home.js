import React from 'react'
import GiftListItem from './gifts/GiftListItem'
import GiftFullView from './gifts/GiftFullView'

class Home extends React.Component {

  state = {
    gifts: [],
    currentGift : {},
  }

  componentDidMount () {
    if (localStorage.getItem("token")){
      fetch('http://localhost:3000/api/v1/gifts/',{
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

  giftClicked = (name) => {
    let match = this.state.gifts.find( (gift) => {
      return gift.item === name
    })
    this.setState({
      currentGift: match
    })
  }

  render () {
    const giftComps = this.state.gifts.map((gift)=> {
      return (
        <GiftListItem
        name = {gift.item}
        pledges = {gift.pledges}
        price = {gift.price}
        giftClicked = {this.giftClicked}
         />
     )
    })
    return (
      <div className = "GiftList">
        {this.state.currentGift.item ? <p>hi</p> : null }
        <GiftFullView />
        {giftComps}
      </div>
    )
  }
}

export default Home
