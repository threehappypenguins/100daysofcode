const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/Hello', (req, res) => {
  res.send('World!')
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});