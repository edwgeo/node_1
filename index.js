const express = require('express')
const fs = require('fs').promises
const app = express()

app.use(express.static('public'))

app.get('/', async (req, res) => {
    let data = await fs.readFile('./books.json', 'utf8')
    data = JSON.parse(data);
    res.setHeader("Content-Type", "text/html")
    data.forEach(element => {
        res.write("<div><img src='"+element.imageLink+"'/></div>")
    });
    res.send()
});

app.listen(3000, () => console.log('Server running on port 3000'))