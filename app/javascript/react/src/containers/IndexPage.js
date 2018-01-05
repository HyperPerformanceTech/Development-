import React, {Component} from 'react';

import barbershopPath from '../../../../assets/images/barbershop-1.jpg';

class IndexPage extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className='motto-panel'>
        <img className='motto-image' src={barbershopPath} alt="stock barbershop photo" />
        <h1 className='motto-text'>Index page</h1>
      </div>
    )
  }
}

export default IndexPage
