const express = require('express');
const sequelize = require('./config/database')
const temasRoutes = require('./routes/temas')
const librosRoutes = require('./routes/libros')
const { Tema, Libro } = require('./models')

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(temasRoutes)
app.use(librosRoutes)

app.get('/', function(req, res) {
    res.redirect('/temas')
})

sequelize.sync()
    .then(() => { console.log('db ready')})
    .catch((error) => {console.log('error:', error)})

app.listen(PORT, function() {
    console.log(`Server running on http://localhost:${PORT}`);
});