import React from 'react';
import Home from './Home';
import Status from './Status';
import Scoreboard from './Scoreboard';
import './Header.css'

function Header() {
    return (
        <nav className="nav-menu navbar navbar-inverse navbar-fixed-top">
            <Home />
            <Status />
            <Scoreboard />
        </nav>
    );
}

export default Header;