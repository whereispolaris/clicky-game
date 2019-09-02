import React from 'react';
import Card from './Card';
import guessWho from "../guessWho.json";

function CardBox() {
    return (
        <div className="container-fluid">
            <div className="row">
                {guessWho.map(character => {
                    return (
                        <Card
                            key={character.id}
                            image={character.image}
                            name={guessWho.name}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default CardBox;