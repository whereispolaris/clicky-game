import React from 'react';

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container-fluid justify-items-center">
                <img src="https://whereispolaris.github.io/clicky-game/img/guessWhoLogo.png" alt="guessWho" />
                <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    );
}

export default Jumbotron;