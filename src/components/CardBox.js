import React from 'react';
import './CardBox.css'

function CardBox(props) {
    return (
        <div className={props.wrongImage ? "shake container-fluid text-center" : "container-fluid text-center"} >
            <div className="row">
                {props.children}
            </div>
        </div>
    );
}

export default CardBox;