import React from 'react';
import Home from './Home/Home'
import Captured from './Captured/Captured'
import Organized from './Organized/Organized'
import References from './References/References'
import Settings from './Settings/Settings'

function RenderedComponent({module, folder}) {

  if(module === 'home')
    return (
      <Home />
    )
  else if(module === 'captured')
    return (
      <Captured folder={folder}/>
    )
  else if(module === 'organized')
    return (
      <Organized />
    )
  else if(module === 'references')
    return (
      <References />
    )
  else if(module === 'settings')
    return (
      <Settings />
    )
  else
      window.location = '/home'
}

export default RenderedComponent;