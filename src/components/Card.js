import React from 'react';
import './Card.css';
function Card(props) {
    return (
        <div className="card" style={{ width: '18rem' }} >
            <img className="image-fluid" src={props.image} alt={props.name} />
        </div>
    );
}

export default Card;