const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://toconaskevin:kevin123@mytinerary-0tsgv.mongodb.net/mydatabase?retryWrites=true&w=majority`, { useNewUrlParser: true,  useUnifiedTopology: true });

const API_Cities = require("./cities.js");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', API_Cities);
//app.use('/api', API_Users);

app.listen(port, () => console.log(`Puerto: ${port}`));