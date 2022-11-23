const express = require("express");
const app = express();
const cors = require('cors')
require('dotenv').config()
const port=process.env.PORT ||4000
const routes=require('../backend/routes/ads')

const bodyParser = require('body-parser')
require('./database/db');



// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(express.json());


app.use("/",routes);


app.listen(port, () => console.log(`server up and runing on port ${port}` ));
