'use strict'

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');

const _SECOND = 5000;

// count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connection: ${numConnection}`);
}

// check overload
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        console.log(`Activate connection: ${numConnection}`);
        console.log(`Memory usage: ${Math.floor(memoryUsage / 1024 / 1024)} MB`);

        // Suppose that maximum number of connections is based on number of cores
        const maxConnections = numCores * 5     // Suppose that each core can have 5 connect
        if (numConnection > maxConnections) {
            console.log('Connection overload detected');
        }

    }, _SECOND);    // monitor every 5s
}

module.exports = {
    countConnect,
    checkOverload,
};
