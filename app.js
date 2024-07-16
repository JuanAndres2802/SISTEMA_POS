const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('prueba 1 respuesta del servidor');
} );
app.listen(10000);
