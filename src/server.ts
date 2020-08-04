import express from 'express';

const app = express();

app.get('/test', (request, response) => {
  response.json({ msg: 'OK' });
});

app.listen(5050);
