import React from 'react';

const Header =({save}) => {
  return (
    <div className="captured_header container-fluid">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-2 offset-lg-9">
                 <button onClick={save}>Save</button>
            </div>
        </div>
    </div>
  );
}

export default Header;