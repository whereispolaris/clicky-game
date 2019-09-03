import React from 'react';

function Status(props) {
    return (
        <div className="col-sm text-center">
            <h4>{props.message}</h4>
        </div>
    )
}

export default Status;