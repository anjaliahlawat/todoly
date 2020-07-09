import React from 'react';
import Home from './Home/Home'

function RenderedComponent({module}) {

  if(module === 'home')
    return (
      <Home />
    )
  else
      window.location = '/home'
}

export default RenderedComponent;