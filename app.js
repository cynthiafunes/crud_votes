const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res) {
    res.render('index')
})

app.listen(PORT, function() {
    console.log(`Server running on http://localhost:${PORT}`);
});