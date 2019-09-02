import React from 'react';
function CardBox(props) {
    return (
        <div className="container-fluid" style={{ padding: '0 100px' }}>
            <div className="row">
                {props.children}
            </div>
        </div>
    );
}

export default CardBox;