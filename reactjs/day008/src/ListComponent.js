import React from 'react';

const ListComponent = () => {
    // Sample list of items
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    return (
        <div>
            <h2>List of Items</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListComponent;