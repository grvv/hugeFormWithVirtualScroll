const express = require('express');
let path = require('path');

const app = express();
const port = 3000;

var publicPath = path.resolve(__dirname, 'dist/virtualScroll');

app.use(express.static(publicPath));
app.get('/*', function (req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))