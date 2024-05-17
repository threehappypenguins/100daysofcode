import React from 'react';

const ChildComponent = (props) => {
    return (
        <div>
            <h2>This is a child component</h2>
            <p>Received data: {props.data}</p>
        </div>
    );
};

export default ChildComponent;