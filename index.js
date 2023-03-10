const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    console.log("Binary to Decimal converter!");
    res.render('home');
})

app.get('*', (req, res) => {
    res.send(`I don't know that path`)
})

//start listening for requests on port 
app.listen(3000, () => {
    console.log(`Listening on port: 3000`);
})

