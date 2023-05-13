const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    // Aquí puedes realizar cualquier lógica de registro que necesites
    res.send('Registro exitoso');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
