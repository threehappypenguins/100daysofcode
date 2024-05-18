import React, { useState } from 'react';

const EventHandlingComponent = () => {
    // Declare a state variable named 'count' with an initial value of 0
    const [count, setCount] = useState(0);

    // Function to handle button click and update the state
    const incrementCount = () => {
        setCount(count +1);
    };

    // Function to handle button click and reset the state
    const resetCount = () => {
        setCount(0);
    };

    return (
        <div>
            <h2>Event Handling Component</h2>
            <p>Current count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
};

export default EventHandlingComponent;