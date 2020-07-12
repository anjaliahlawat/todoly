import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const CustomLink =({link, linkName, givenLink, title, source})=> {
  return (
    <li className={linkName === givenLink ? "active" : ""}>
          <Link to={`/${givenLink}`} className='sidebar-a'>
            {/* <Image src={require(source)} thumbnail /> */}
            <span>{title}</span>
          </Link>
        </li>
  );
}

export default CustomLink;