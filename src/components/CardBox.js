import React from 'react';
import './CardBox.css'

function CardBox(props) {
    return (
        <div className={props.wrongImage ? "shake container-fluid text-center cardBox" : "container-fluid text-center cardBox"} >
            <div className="row">
                {props.children}
            </div>
        </div>
    );
}

export default CardBox;