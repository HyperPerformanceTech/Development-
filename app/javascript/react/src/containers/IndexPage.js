import React, {Component} from 'react';
import BarberShopPanel from '../components/BarberShopPanel';
import WhatIsTunsure from '../components/WhatIsTunsure';

class IndexPage extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className='motto-panel'>
        <BarberShopPanel/>
        <WhatIsTunsure />
      </div>
    )
  }
}

export default IndexPage
