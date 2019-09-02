import React from 'react';
import style from './Card.css'
function Card(props) {
    return (
        <div class="card">
            <img className="image-fluid" src={props.image} />
        </div>
    );
}

export default Card;