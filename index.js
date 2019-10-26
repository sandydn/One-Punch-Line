const express = require('express');
const app = express();
const port = 8000;
const routes = require('./routes');
const path = require('path');

app.use('/api', routes);

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} !`);
});
