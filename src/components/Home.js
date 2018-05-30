import React from 'react'
import GiftListItem from './gifts/GiftListItem'
import { Divider } from 'semantic-ui-react'

class Home extends React.Component {

  state = {
    gifts: []
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
           />
         <Divider hidden />
       </div>
     )
    })
    return (
      <div>
        {localStorage.token ? giftComps : null}
      </div>
    )
  }
}

export default Home
