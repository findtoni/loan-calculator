const express = require('express');
const app = express();

app.set('port', 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(app.get('port'), () => {
    console.log("Node app is running at localhost:" + app.get('port'))
});