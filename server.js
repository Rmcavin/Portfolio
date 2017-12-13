const express = require ('express');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(PORT);
