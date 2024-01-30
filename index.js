const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! - Elad new server' + process.env.STAM)
})

app.get('/class', (req, res) => {
    res.send('Hello class!')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})