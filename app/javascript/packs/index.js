import React from 'react';
import ReactDOM from 'react-dom';
import PublicSite from '../react/src/PublicSite';

document.addEventListener('DOMContentLoaded', () => {
  let publicSite = document.getElementById('public-site')
  if(publicSite) {
    ReactDOM.render(<PublicSite />, publicSite);
  }
})
