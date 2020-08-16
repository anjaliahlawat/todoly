import React from 'react';
import Home from './Home/Home'
import Captured from './Captured/Captured'
import Organized from './Organized/Organized'
import References from './References/References'
import Settings from './Settings/Settings'

function RenderedComponent({module, folder, notify}) {

  if(module === 'home')
    return (
      <Home notify={notify} />
    )
  else if(module === 'captured')
    return (
      <Captured folder={folder} notify={notify}/>
    )
  else if(module === 'organized')
    return (
      <Organized notify={notify} />
    )
  else if(module === 'references')
    return (
      <References notify={notify} />
    )
  else if(module === 'settings')
    return (
      <Settings notify={notify} />
    )
  else
      window.location = '/home'
}

export default RenderedComponent;