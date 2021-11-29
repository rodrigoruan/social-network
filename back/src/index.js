const express = require('express');

const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const user = require('./routes/users');
const post = require('./routes/posts');

app.use('/user', user);
app.use('/post', post);

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});
