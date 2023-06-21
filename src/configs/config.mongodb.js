'use strict'

// level 0
// const config = {
//     app: {
//         port: 3000
//     },
//     db: {
//         host: '127.0.0.1',
//         port: 27017,
//         name: ''
//     }
// };

// level 1
const dev = {
    app: {
        port: 3000
    },
    db: {
        host: '127.0.0.1',
        port: 27017,
        name: 'dev'
    }
};

const prod = {
    app: {
        port: 3000
    },
    db: {
        host: '127.0.0.1',
        port: 27017,
        name: 'prod'
    }
};

const config = { dev, prod };
const env = process.env.NODE_ENV || 'dev';

module.exports = config[env];
