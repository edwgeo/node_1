const http = require('http')
const fs = require('fs')

let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    let body = fs.readFileSync('/Users/edwingeorge/Documents/Github/node_1/test.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        // res.write(data)
        // res.end()
        return data
    })
    res.write(body);
    res.end()
});

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000')