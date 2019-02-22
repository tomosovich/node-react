const express = require('express'); // Imports express from CommonJS modules

const app = express();

// Route Handler for Index
app.get('/', (req, res) => { // Express listens for requests to '/'
  res.send({ hi: 'baller' }); // if the request matches the '/' route, {hi: 'there'} is returned
});

// Looks for env variables from Heroku, default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT); // tells the app to only listen to traffic over port 5000 of the http protocol
