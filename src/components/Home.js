import React from 'react'
import GiftListItem from './gifts/GiftListItem'
import { Divider, Segment } from 'semantic-ui-react'

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
    console.log(this.state);
    const giftComps = this.state.gifts.map((gift)=> {
      return (
        <div>
          <GiftListItem
          name = {gift.item}
          pledges = {gift.pledges}
          price = {gift.price}
           />
         <Divider hidden />
       </div>
     )
    })
    return (
      <div className = "GiftList">
        {localStorage.token ? giftComps : null}
      </div>
    )
  }
}

export default Home
