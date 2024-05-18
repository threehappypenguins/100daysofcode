import React, { useState } from 'react';

const StatefulComponent = () => {
    // Declare a state variable named 'count' with an initial value of 0
    const [count, setCount] = useState(0);

    // Function to handle button click and update the state
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Stateful Component</h2>
            <p>Current count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
};

export default StatefulComponent;