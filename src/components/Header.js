import React from 'react';
import Home from './Home';
import Status from './Status';
import Scoreboard from './Scoreboard';
import style from './Header.css'

function Header() {
    return (
        <div className="nav-menu row justify-content-center navbar-fixed-top">
            {/* // Home Component */}
            <Home />
            {/* // Status Component */}
            <Status />
            {/* // Score Component */}
            <Scoreboard />
        </div>
    );
}

export default Header;