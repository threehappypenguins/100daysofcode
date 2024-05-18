import React from 'react';

const ChildComponentB = ({ sharedState }) => {
    return (
        <div>
            <h3>Child Component B</h3>
            <p>Shared state: {sharedState}</p>
        </div>
    );
};

export default ChildComponentB;