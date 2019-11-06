const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://toconaskevin:kevin123@mytinerary-0tsgv.mongodb.net/mydatabase?retryWrites=true&w=majority`, { useNewUrlParser: true,  useUnifiedTopology: true });

var Schema = mongoose.Schema;

var citiesSchema = new Schema({
    name: String,
    country: String
});

var cityModel = mongoose.model('City', citiesSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

router.get('/get', (req, res) => {
  cityModel.find()
  .then(datos=>res.send(datos))
  .catch(err=>console.log(err))
});

router.post('/post', (req, res) => {
    console.log(req.body);
    const newCity = new cityModel(req.body)
    newCity.save()
    .then(result=>res.send(result))
    .catch(err=>console.log(err))
});

app.listen(port, () => console.log(`Puerto: ${port}`));