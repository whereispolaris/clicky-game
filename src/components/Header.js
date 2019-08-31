import React from 'react';
import style from './Header.css'

function Header() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {/* // Home Component */}
                <div className="col-sm text-center">
                    One of three columns
                </div>
                {/* // Status Component */}
                <div className="col-sm text-center">
                    One of three columns
                </div>
                {/* // Score Component */}
                <div className="col-sm text-center">
                    One of three columns
                </div>
            </div>
        </div>
    );
}

export default Header;