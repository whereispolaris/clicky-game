import React from 'react';

function CardBox(props) {
    return (
        <div className="container-fluid text-center" >
            <div className="row" style={{ margin: '20px 10%' }}>
                {props.children}
            </div>
        </div>
    );
}

export default CardBox;