'use strict'

// const mongoose = require('mongoose');
// const connectionString = 'mongodb://localhost:27017';

// mongoose.connect(connectionString)
//     .then(_ => console.log('Connected to mongoDB'))
//     .catch(err => {
//         console.log(err);
//     });

// // dev
// if (true) {
//     mongoose.set('debug', true);
//     mongoose.set('debug', { color: true });
// }

// module.exports = mongoose;


const mongoose = require('mongoose');
const { countConnect } = require('../helpers/check.connect');
const { db: { host, name, port } } = require('../configs/config.mongodb');
const connectionString = `mongodb://${host}:${[port]}/${name}`;
console.log(connectionString);

class Database {
    constructor() {
        this.connect();
    }

    // connect
    connect(type = 'mongodb') {
        // dev
        if (true) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        mongoose
            .connect(connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(_ => {
                console.log(`Connected to mongoDB`);
                countConnect();
            })
            .catch(err => {
                console.log(err);
            });
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;