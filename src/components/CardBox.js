import React from 'react';
import Card from './Card';
import guessWho from "../guessWho.json";

function CardBox() {
    return (
        <div className="container-fluid">
            <Card
                image={guessWho[0].image}
                name={guessWho[0].name}
            />
        </div>
    );
}

export default CardBox;