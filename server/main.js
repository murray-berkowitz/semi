var express = require('express');
var app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const router = express.Router();
app.listen(port, function(){
    console.log(`listening on port ${port}`);
})

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, '../index.html')));
app.use(express.static('public'));

