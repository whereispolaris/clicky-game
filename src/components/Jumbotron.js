import React from 'react';

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container-fluid justify-items-center">
                <img src="https://whereispolaris.github.io/clicky-game/img/guessWhoLogo.png" alt="guessWho" />
                <h4 className="instructions">Click on an image to earn points, but don't click on any more than once!</h4>
            </div>
        </div>
    );
}

export default Jumbotron;