import express from 'express';

const app = express();

app.get('/test', () => {
  return { msg: 'Ok' };
});

app.listen(5050);
