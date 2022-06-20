const express = require('express')
const fs = require('fs').promises
const compression = require('compression')
const helmet = require('helmet');

const app = express()
app.use(helmet({
    crossOriginResourcePolicy: false
}))
app.use(compression())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.end("Hello from backend");
})
app.get('/api', async (req, res) => {
    let data = await fs.readFile('./books.json', 'utf8')
    data = JSON.parse(data);
    res.json(data);
});

app.listen(process.env.PORT || 3000, () => console.log('Server running on port 3000'))