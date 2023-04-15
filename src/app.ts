import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
