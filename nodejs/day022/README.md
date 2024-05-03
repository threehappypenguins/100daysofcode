```console
npm install cron
node cron-jobs.js
```

Every 5 seconds, you will see in the console (with the current date/time):
```console
CRON job executed at: <date-time>
Error in CRON job: An error occurred in the cron job
```

The error is for testing purposes to ensure that proper error handling in place causes the cron job to continue running despite errors.