const express = require('express')
    , app = express()
    , path = require('path')
    ;

// Points to where any static files might be located
app.use(express.static('public'));

// Starts the server on port 3333
app.listen(3333);


console.log(`
    Server started on http://localhost:3333/html/index.html
`);

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/public/html/index.html'))
})

app.get('/addPick', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/public/html/addPick.html'))
})
