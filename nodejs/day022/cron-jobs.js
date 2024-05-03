const cron = require('cron');

// Create a new cron job
const job = new cron.CronJob('*/5 * * * * *', () => {
    try {
      // This function will be executed every 5 seconds
      console.log('CRON job executed at:', new Date());
      // Simulate an error for demonstration
      throw new Error('An error occurred in the cron job');
    } catch (error) {
      console.error('Error in CRON job:', error.message);
    }
});

// Start the cron job 
job.start();

// Optionally, stop the cron job after some time
setTimeout(() => {
    job.stop();
    console.log('CRON job stopped');
}, 30000); // Stop after 30 seconds