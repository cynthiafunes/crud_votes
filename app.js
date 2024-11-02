const express = require('express');
const sequelize = require('./config/database')
const { tema, libro } = require('./models')

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

sequelize.sync()
    .then(() => { console.log('db ready')})
    .catch((error) => {console.log('error:', error)})

app.get('/', function(req, res) {
    res.render('index')
})

app.listen(PORT, function() {
    console.log(`Server running on http://localhost:${PORT}`);
});