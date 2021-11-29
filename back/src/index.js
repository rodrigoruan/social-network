const express = require('express');

const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const user = require('./routes/users');

app.use('/user', user);

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});
