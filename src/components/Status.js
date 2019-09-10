import React from 'react';
import './Status.css'

function Status(props) {
    return (
        <div className="col-sm text-center">
            <h4 className={props.wrongImage ? "wrongImage shake" : "correctImage"}>{props.message}</h4>
        </div>
    )
}

export default Status;