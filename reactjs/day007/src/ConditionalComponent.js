import React, { useState } from 'react';

const ConditionalComponent = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () =>  {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <h2>Conditional Rendering Component</h2>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide' : 'Show'} Message
            </button>
            {isVisible && <p>This is a conditionally rendered message.</p>}
        </div>
    );
};

export default ConditionalComponent;