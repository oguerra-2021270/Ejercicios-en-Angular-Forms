const exprees = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = exprees();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res){
    res.send('hello from server');
})

app.post('/enroll', function(req, res){
    console.log(req.body);
    res.status(200).send({"message": "Data Received"});
})

app.listen(PORT, function(){
    console.log("server runnig in localhost: " + PORT);
});