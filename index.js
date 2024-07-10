const app = require('express')();
const PORT = 8080;

app.listen(
  PORT,
  () => console.log(`It's Working on port: http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: '👕',
    size: 'large'
  });
});