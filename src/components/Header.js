import React, { Component } from 'react';
import Home from './Home';
import Status from './Status';
import Scoreboard from './Scoreboard';
import './Header.css'

class Header extends React.Component {

    state = {
        score: 0,
        topScore: 0
    }

    render() {
        return (
            <nav className="nav-menu navbar navbar-inverse navbar-fixed-top" >
                <Home />
                <Status />
                <Scoreboard score={this.state.score} topScore={this.state.topScore} />
            </nav>
        );
    }
}

export default Header;