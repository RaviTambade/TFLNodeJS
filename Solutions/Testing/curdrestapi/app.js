const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use('/api', routes);

const PORT = 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app; // for testing
