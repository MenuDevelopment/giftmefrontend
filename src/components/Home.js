import React from 'react'
import GiftListItem from './gifts/GiftListItem'
import { Progress, Divider} from 'semantic-ui-react'
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

  pledgeADollar = (gift) => {
    let match = this.state.gifts.find((query)=> {
      return query === gift
    })
    let index = this.state.gifts.indexOf(match)
    console.log(match);
    fetch('http://localhost:3000/api/v1/pledges/', {
      method: "POST",
      headers: {
        Authorization: localStorage.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: localStorage.id,
        gift_id: match.id,
        amount: 1
      })
    })
    .then(res=>res.json)
    .then(res=>{
      fetch(`http://localhost:3000/api/v1/gifts/${match.id}`,{
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(res => res.json())
      .then( res => {
        let copyGifts = [...this.state.gifts]
        copyGifts[index] = res
        this.setState ({
          currentGift: res,
          gifts: copyGifts,
        })
      })
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
    console.log("rerendering");
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
        {this.state.currentGift.item && localStorage.token  ? <GiftFullView gift = {this.state.currentGift} progressBar = {this.progressBar} pledgeADollar= {this.pledgeADollar} />  : null}
        {this.state.currentGift.item && localStorage.token ? <Divider /> : null}
        {localStorage.token ? giftComps : null}
      </div>
    )
  }
}

export default Home
