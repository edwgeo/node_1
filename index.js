const express = require('express')
const fs = require('fs').promises
const app = express()

app.use(express.static('public'))

app.get('/api', async (req, res) => {
    let data = await fs.readFile('./books.json', 'utf8')
    data = JSON.parse(data);
    res.json(data)
});

app.listen(3000, () => console.log('Server running on port 3000'))