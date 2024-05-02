// Example function to simulate asynchronous data retrieval
function getUserData() {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous data retrieval
        setTimeout(() => {
            const userData = { id: 1, name: 'John Doe', email: 'john@example.com'};
            resolve(userData); // Resolve with user data
        }, 1000); // Simulate delay of 1 second
    });
}

// Usage of the function with promises
getUserData()
    .then(userData => {
        console.log('User data:', userData);
        // Perform additional operations with user data...
    })
    .catch(error => {
        console.error('Error:', error);
    });