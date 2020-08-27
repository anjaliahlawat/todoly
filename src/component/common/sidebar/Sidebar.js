import React from 'react';
import { Image, Button } from 'react-bootstrap';
import AccountDiv from './AccountDiv';
import AllLinks from './AllLinks';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/login';

const Sidebar =({linkName}) => {
  const dispatch = useDispatch()
  return (
    <nav className="sidebar">
        <div className="sidebar-header">
            <Image src={require('../../../assets/iconImage.PNG')} />
        </div>
        <AccountDiv />
        <AllLinks linkName={linkName}/>
        <Button className="logout-btn" onClick={() =>dispatch({type: logout.type})}>Logout</Button>
    </nav>
  );
}

export default Sidebar;