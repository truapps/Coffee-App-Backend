const express = require('express');
const router = require('./routes/router');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbConfig = require('./config/dbConfig');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 4000;

configureServer();
app.use(router);
start();

async function start() {
    try {
        let url = `mongodb+srv://${dbConfig.username}:${dbConfig.password}@cluster.7u040.mongodb.net/${dbConfig.dbName}`;
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        app.listen(PORT, () => console.log('The server was started'));
    }
    catch (err) {
        console.log(err);
    }
}
function configureServer() {
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());
}
