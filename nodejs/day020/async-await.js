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

// Using async/await with promises
async function fetchData() {
    try {
        const userData = await getUserData(); // Wait for the promise to resolve
        console.log('User data:', userData);
        // Perform additional operations with user data...
    } catch (error) {
        console.error('Error', error);
    }
}

// Call the async function
fetchData();