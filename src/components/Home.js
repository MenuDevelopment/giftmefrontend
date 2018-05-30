import React from 'react'
import GiftListItem from './gifts/GiftListItem'
import { Progress, Divider, Segment } from 'semantic-ui-react'
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

  progressBar = (price, pledges) => {
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

  render () {
    console.log(this.state);
    const giftComps = this.state.gifts.map((gift)=> {
      let index = this.state.gifts.indexOf(gift)
      return (
        <div>
          <GiftListItem
          name = {gift.item}
          pledges = {gift.pledges}
          price = {gift.price}
          giftClicked = {this.giftClicked}
          progressBar = {this.progressBar}
           />
         <Divider hidden />
       </div>
     )
    })
    return (
      <div className = "GiftList">
        {this.state.currentGift.item ? <GiftFullView gift = {this.state.currentGift} progressBar = {this.progressBar} /> : null}
        {this.state.currentGift.item ? <Divider /> : null}
        {localStorage.token ? giftComps : null}
      </div>
    )
  }
}

export default Home
