import React from 'react';
import Home from './Home';
import Status from './Status';
import Scoreboard from './Scoreboard';
import './Header.css'

const Header = (props) => {
    return (
        <nav className="nav-menu navbar navbar-inverse navbar-fixed-top" >
            <Home />
            <Status message={props.message} />
            <Scoreboard score={props.score} topScore={props.topScore} />
        </nav>
    );
}

export default Header;