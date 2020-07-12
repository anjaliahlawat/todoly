import React from 'react';
import CustomLink from './CustomLink';

const AllLinks =({ activeClass, linkName }) => {
  return (
    <div className="navlinks">
      <ul className="list-unstyled links">
          <CustomLink 
              linkName ={linkName}
              givenLink ={'home'}
              // source ={"../../../assets/dashboard-1.png"}
              title={'Home'}
          />
          <CustomLink 
              linkName ={linkName}
              givenLink ={'captured'}
              title={'Captured'}
          />
          <CustomLink 
              linkName ={linkName}
              givenLink ={'organized'}
              title={'Organized'}
          />
          <CustomLink 
              linkName ={linkName}
              givenLink ={'references'}
              title={'References'}
          />
          <CustomLink 
              linkName ={linkName}
              givenLink ={'settings'}
              title={'Settings'}
          />
      </ul>
    </div>
  );
}

export default AllLinks;