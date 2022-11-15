const express = require('express');
const app = express();
const serverConfig = require('./config/server.config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./config/dbConfig');


app.get('/', (req,res)=>{
    res.send("Hello World!")
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on("error",()=>{
    console.log("Error while connecting to MongoDB");
});
db.once("open", ()=>{
    console.log("Connected to mongoDB");
});
require('./routes/user.routes')(app);

app.listen(serverConfig.PORT,()=>{
    console.log("Started the server on the PORT number : ", serverConfig.PORT);
});
