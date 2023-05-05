const cors = require('cors')
const express = require('express');

const app = express();

const port = 3000

app.use(cors());

app.get('/', (req, res) => {
    res.redirect('/index.html')
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
