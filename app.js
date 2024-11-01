const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('The server is working');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});