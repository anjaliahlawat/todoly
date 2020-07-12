import React from 'react';
import Sidebar from './common/sidebar/Sidebar';
import RenderedComponent from './RenderedComponent';

function Module(props) {
  return (
    <div className="wrapper">
       <Sidebar
          linkName={props.match.params.module}
        /> 
        <div className="content">
            <RenderedComponent 
              module={props.match.params.module}/>
        </div>
    </div>
  );
}

export default Module;