import React from 'react';
import style from './Header.css'

function Header() {
    return (
        <div className="container">
            <div className="row">
                // Home Component
                <div className="col-sm">
                    One of three columns
                </div>
                // Status Component
                <div className="col-sm">
                    One of three columns
                </div>
                // Score Component
                <div className="col-sm">
                    One of three columns
                </div>
            </div>
        </div>
    );
}

export default Header;