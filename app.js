let express = require('express')
const path = require('path')

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3000, () => console.log('Esto fue exitoso'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html') )
})


