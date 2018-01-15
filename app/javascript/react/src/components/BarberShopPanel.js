import React from 'react';
import barbershopPath from '../../../../assets/images/barbershop-1.jpg';

const BarberShopPanel = props => {
  return(
    <div>
      <img className='motto-image' src={barbershopPath} alt="stock barbershop photo" />
    </div>
  )
}

export default BarberShopPanel;
