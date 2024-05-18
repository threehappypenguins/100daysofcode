import React from 'react';

const ChildComponentA = ({ sharedState }) => {
    return (
        <div>
            <h3>Child Component A</h3>
            <p>Shared state: {sharedState}</p>
        </div>
    );
};

export default ChildComponentA;