import React from 'react';

import mockMobilePhoto from '../../../../assets/images/phone-mock-271x300.png'

const WhatIsTunsure = props => {
  return(
    <div>
      <h3>WHAT IS TUNSURE?</h3>
      <p>Tunsure is a platform for beauty professionals that gives them their own  community. A portfolio to share their work, connect and manage appointment bookings with customers.</p>
      <p>The original word tonsure the act of cutting the hair or shaving the head. To give you a little history lesson tonsure actually started when monks  shaved the middle of their  heads for  religious reason. These haircuts symbolized religious devotion, group identity, and humility as well as the renunciation of worldly things and personal vanity.</p>
      <img src={mockMobilePhoto} alt='mock photo of mobile web app' />
    </div>
  )
}

export default WhatIsTunsure
