import React from 'react';
import { Image } from 'react-bootstrap';
import AccountDiv from './AccountDiv';
import AllLinks from './AllLinks';

const Sidebar =({linkName}) => {
  return (
    <nav className="sidebar">
        <div className="sidebar-header">
            <Image src={require('../../../assets/iconImage.PNG')} />
        </div>
        <AccountDiv />
        <AllLinks linkName={linkName}/>
    </nav>
  );
}

export default Sidebar;