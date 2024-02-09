let express = require('express')
let app = express();
const path = require('path')

const publicPath = path.resolve(__dirname, '/public');
app.use(express.static(publicPath));

app.listen(3000, () => console.log('Esto fue exitoso'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html') )
})


