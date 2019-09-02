import React from 'react';
import './Card.css';
function Card(props) {
    return (
        <div className="card" style={{ width: '11rem' }} >
            <img className="image" src={props.image} alt={props.name} />
        </div>
    );
}

export default Card;