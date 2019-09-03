import React from 'react';

function Scoreboard(props) {
    return (
        <div className="col-sm text-center">
            <h4>Score: {props.score} | Top Score: {props.topScore}</h4>
        </div>
    )
}

export default Scoreboard;