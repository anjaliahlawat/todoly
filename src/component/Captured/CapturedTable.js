import React from 'react';
import { Link } from 'react-router-dom';

function CapturedTable({folder}) {
  return (
    <div className="container-fluid captured">
        <div className="row captured_tabs">
            <div className="col-10 d-flex">
                <div className="flex-fill p-2">
                    <Link to="/captured/professional" params={{folder: 'professional'}}>Professional</Link>
                </div>
                <div className="flex-fill p-2">
                    <Link to="/captured/personal" params={{folder: 'personal'}}>Personal</Link>
                </div>
            </div>
        </div>
        <div className="row captured_table">
            
        </div>
    </div>
  );
}

export default CapturedTable;