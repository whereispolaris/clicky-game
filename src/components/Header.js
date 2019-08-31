import React from 'react';
import Home from './Home';
import Status from './Status';
import Jumbotron from './Jumbotron';
import Scoreboard from './Scoreboard';
import style from './Header.css'

function Header() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {/* // Home Component */}
                <Home />
                {/* // Status Component */}
                <Status />
                {/* // Score Component */}
                <Scoreboard />

                {/* <Jumbotron /> */}
            </div>
        </div>
    );
}

export default Header;