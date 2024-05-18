import React, { useState } from 'react';
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';

const AncestorComponent = () => {
    const [sharedState, setSharedState] = useState('');

    const handleInputChange = (e) => {
        setSharedState(e.target.value);
    };

    return (
        <div>
            <h2>Ancestor Component</h2>
            <input
            type="text"
            value={sharedState}
            onChange={handleInputChange}
            placeholder="Enter shared state"
            />
            <ChildComponentA sharedState={sharedState} />
            <ChildComponentB sharedState={sharedState} />
        </div>
    );
};

export default AncestorComponent;